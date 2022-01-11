require "mastermind"


describe "Mastermind" do
  let(:mastermind) do
    mastermind = Mastermind.new(4)
    mastermind.instance_variable_set(:@secret_code, Code.new(["R", "G", "R", "B"]))
    mastermind
  end

  describe "PART 3" do
    describe "#initialize" do
      it "should accept a length (number) as an arg" do
        mastermind
      end

      it "should set @secret_code to a random Code instance of the given length" do
        allow(Code).to receive(:random).and_return(Code.new(["R", "G", "R", "B"]))
        expect(Code).to receive(:random).with(4)
        expect(Mastermind.new(4).instance_variable_get(:@secret_code)).to be_instance_of(Code)

        allow(Code).to receive(:random).and_return(Code.new(["R", "G", "R", "B", "Y"]))
        expect(Code).to receive(:random).with(5)
        expect(Mastermind.new(5).instance_variable_get(:@secret_code)).to be_instance_of(Code)
      end
    end

    describe "#print_matches" do
      it "should accept a Code instance as an arg" do
        mastermind.print_matches(Code.new(["R", "Y", "G", "B"]))
      end

      it "should print the number of exact matches between @secret_code and the arg" do
        code = Code.new(["R", "Y", "Y", "B"])
        expect { mastermind.print_matches(code) }.to output(/2/).to_stdout
      end

      it "should print the number of near matches between @secret_code and the arg" do
        code = Code.new(["Y", "Y", "Y", "G"])
        expect { mastermind.print_matches(code) }.to output(/1/).to_stdout
      end
    end

    describe "#ask_user_for_guess" do
      it "should print 'Enter a code'" do
        allow(mastermind).to receive(:gets).and_return("RGRB\n")

        expect { mastermind.ask_user_for_guess }.to output(/Enter a code/).to_stdout
      end

      it "should call gets.chomp to get input from the user " do
        input = double("RGRB\n", :chomp => "RGRB")
        allow(mastermind).to receive(:gets).and_return(input)

        expect(input).to receive(:chomp)
        expect(mastermind).to receive(:gets)
        mastermind.ask_user_for_guess
      end

      it "should call Code::from_string with the user's entered string" do
        input = double("RGRB\n", :chomp => "RGRB")
        allow(mastermind).to receive(:gets).and_return(input)
        allow(Code).to receive(:from_string).and_return(Code.new(["R", "G", "R", "B"]))

        expect(Code).to receive(:from_string).with("RGRB")
        mastermind.ask_user_for_guess
      end

      it "should print the number of exact and near matches between @secret_code and the user's guessed code" do
        input = double("RYYB\n", :chomp => "RYYB")
        allow(mastermind).to receive(:gets).and_return(input)
        expect { mastermind.ask_user_for_guess }.to output(/2/).to_stdout
        expect { mastermind.ask_user_for_guess }.to output(/0/).to_stdout
      end

      it "should return a boolean indicating whether the user's guessed code is equal to @secret_code" do
        input_1 = double("RGRB\n", :chomp => "RGRB")
        allow(mastermind).to receive(:gets).and_return(input_1)
        expect(mastermind.ask_user_for_guess).to eq(true)

        input_2 = double("YYYY\n", :chomp => "YYYY")
        allow(mastermind).to receive(:gets).and_return(input_2)
        expect(mastermind.ask_user_for_guess).to eq(false)
      end
    end
  end
end
