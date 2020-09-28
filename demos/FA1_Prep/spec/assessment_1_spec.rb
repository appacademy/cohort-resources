require "assessment_1"
describe "Practice FA01" do 
    describe "censor" do
    it "should accept a sentence and an array of curse words as args" do
      expect { censor("Gosh darn it", ["gosh", "darn", "shoot"]) }.to_not raise_error
    end

    it "should return the sentence where every curse word has it's vowels replaced with '*'" do
      expect(censor("Gosh darn it", ["gosh", "darn", "shoot"])).to eq("G*sh d*rn it")
      expect(censor("SHUT THE FRONT DOOR", ["door"])).to eq("SHUT THE FRONT D**R")
    end
  end

    describe "hash_select" do
        it "should accept a hash and a block as args" do
        expect { hash_select({"a"=>0, "b"=>1, "c"=> 2, "o"=>14}) { |k, v| "aeiou".include?(k) } }.to_not raise_error
        end

        it "should return a new hash containing only the key=>value pairs that resulted in true when passed into the block" do
        expect(hash_select({"a"=>0, "b"=>1, "c"=> 2, "o"=>14}) { |k, v| "aeiou".include?(k) }).to eq({"a"=>0, "o"=>14})
        expect(hash_select({"a"=>0, "b"=>1, "c"=> 2, "o"=>14}) { |k, v| v.even? }).to eq({"a"=>0, "c"=> 2, "o"=>14})
        end

        it "should not use the built-in Hash#select" do
        hash = {"a"=>0, "b"=>1, "c"=> 2, "o"=>14}
        expect(hash).to_not receive(:select)
        hash_select(hash) { |k, v| "aeiou".include?(k) }
        end
    end

     describe "proc_count" do
    it "should accept a value and an array containing proc objects as args" do
      even = Proc.new { |n| n.even? }
      div_by_5 = Proc.new { |n| n % 5 == 0 }
      positive = Proc.new { |n| n % 5 == 0 }

      expect { proc_count(12, [even, div_by_5, positive]) }.to_not raise_error
    end

    it "should return a number representing the count of procs that evaluate to true when called with the given value" do
      even = Proc.new { |n| n.even? }
      div_by_5 = Proc.new { |n| n % 5 == 0 }
      positive = Proc.new { |n| n > 0 }
      expect(proc_count(12, [even, div_by_5, positive])).to eq(2)
      expect(proc_count(-4, [even, div_by_5, positive])).to eq(1)

      upcase = Proc.new { |s| s == s.upcase }
      ends_exclamation = Proc.new { |s| s[-1] == "!" }
      expect(proc_count("RUN!", [upcase, ends_exclamation])).to eq(2)
      expect(proc_count("FOREST", [upcase, ends_exclamation])).to eq(1)
      expect(proc_count("forest", [upcase, ends_exclamation])).to eq(0)
    end
  end


end
