require "code"

puts "\nNOTE: Once you complete all specs, run `ruby lib/play_mastermind.rb` in your terminal!"

describe "Code" do
  let (:code) { Code.new(["R", "G", "R", "B"]) }

  describe "::POSSIBLE_PEGS" do
    it "should be a hash containing letters containing letters as keys and colors as values" do
      expect(Code::POSSIBLE_PEGS).to eq ({"R"=>:red, "G"=>:green, "B"=>:blue,"Y"=>:yellow})
    end
  end

  describe "PART 1" do
    describe "::valid_pegs?" do
      it "should accept an array of chars as an arg" do
        Code.valid_pegs?(["B", "Y", "G", "G"])
      end

      context "when all chars of the array are in ::POSSIBLE_PEGS" do
        it "should return true" do
          expect(Code.valid_pegs?(["B", "Y", "G", "G"])).to eq(true)
          expect(Code.valid_pegs?(["b", "y", "g", "g"])).to eq(true)
        end
      end

      context "when a char of the array is not in ::POSSIBLE_PEGS" do
        it "should return false" do
          expect(Code.valid_pegs?(["B", "Y", "Z", "G"])).to eq(false)
        end
      end
    end

    describe "#initialize" do
      it "should accept an array of chars representing pegs as an arg" do
        code
      end

      it "should call Code::valid_pegs?" do
        allow(Code).to receive(:valid_pegs?).and_return(true)
        expect(Code).to receive(:valid_pegs?)
        code
      end

      context "when the array does not contain valid pegs" do
        it "should raise an error" do
          expect { Code.new(["B", "Y", "Z", "G"]) }.to raise_error
        end
      end

      context "when the array contains valid_pegs" do
        it "should set @pegs to an array of chars from the arg" do
          expect(code.instance_variable_get(:@pegs)).to eq(["R", "G", "R", "B"])
        end

        it "should convert lowercase chars of the arg to uppercase in @pegs" do
          code = Code.new(["r", "g", "r", "b"])
          expect(code.instance_variable_get(:@pegs)).to eq(["R", "G", "R", "B"])
        end
      end
    end

    describe "#pegs" do
      it "should get (return) @pegs" do
        expect(code.pegs).to be(code.instance_variable_get(:@pegs))
      end
    end

    describe "::random" do
      it "should accept a length (number) as an arg" do
        Code.random(5)
      end

      it "should call Code::new with an array of the given length containing random pegs" do
        expect(Code).to receive(:new).with(instance_of(Array))
        Code.random(5)
      end

      it "should return a Code instance with a randomized pegs array of the given length" do
        random_code = Code.random(5)
        expect(random_code).to be_instance_of(Code)
        expect(random_code.pegs.length).to eq(5)
      end
    end

    describe "::from_string" do
      it "should accept a string representing pegs as an arg" do
        Code.from_string("GBGB")
      end

      it "should call Code::new with an array of chars" do
        expect(Code).to receive(:new).with(instance_of(Array))
        Code.from_string("GBGB")
      end

      it "should return a Code instance with pegs colors given by the chars of the string" do
        code_from_string = Code.from_string("GBGB")
        expect(code_from_string).to be_instance_of(Code)
        expect(code_from_string.pegs).to eq(["G", "B", "G", "B"])
      end
    end

    describe "#[]" do
      it "should accept an index as an arg" do
        code[1]
      end

      it "should return the element of @pegs at the given index" do
        expect(code[1]).to eq("G")
        expect(code[2]).to eq("R")
      end
    end

    describe "#length" do
      it "should return the length of @pegs" do
        expect(code.length).to eq(4)
      end
    end
  end

  describe "PART 2" do
    describe "#num_exact_matches" do
      it "should accept a Code instance representing a guess" do
        code.num_exact_matches(Code.new(["R", "Y", "Y", "B"]))
      end

      # code == RGRB
      it "should return the number of pegs in the guess that are the correct color and position as @pegs" do
        expect(code.num_exact_matches(Code.new(["R", "R", "Y", "B"]))).to eq(2)
        expect(code.num_exact_matches(Code.new(["Y", "B", "Y", "B"]))).to eq(1)
        expect(code.num_exact_matches(Code.new(["Y", "Y", "Y", "Y"]))).to eq(0)
      end
    end

    describe "#num_near_matches" do
      it "should accept a Code instance representing a guess" do
        code.num_near_matches(Code.new(["B", "R", "Y", "Y"]))
      end

      it "should return the number of pegs in the guess that are the correct color but incorrect position compared to @pegs" do
        expect(code.num_near_matches(Code.new(["B", "R", "Y", "Y"]))).to eq(2)
      end

      # code == RGRB
      it "should not include exact matches" do
        expect(code.num_near_matches(Code.new(["R", "G", "B", "B"]))).to eq(0)
        expect(code.num_near_matches(Code.new(["R", "R", "B", "B"]))).to eq(1)
        expect(code.num_near_matches(Code.new(["G", "R", "R", "R"]))).to eq(2)
      end
    end

    describe "#==" do
      it "should accept another Code instance as an arg" do
        other_code = Code.new(["R", "G", "R", "B"])
        code == other_code
      end

      it "should return a boolean indicating whether the arg exactly matches self" do
        same_code = Code.new(["R", "G", "R", "B"])
        expect(code == same_code).to eq(true)

        same_code = Code.new(["R", "G", "Y", "Y"])
        expect(code == same_code).to eq(false)
      end

      it "should return false if the arg has different length from self" do
        other_code = Code.new(["R", "G", "R", "B", "B"])
        expect(code == other_code).to eq(false)
      end
    end
  end
end
