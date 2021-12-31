require "part_1"

describe "Part 1:" do
  describe "average" do
    it "should accept two numbers as arguments" do
      expect { average(4, 8) }.to_not raise_error
    end

    it "should return the average of the two numbers" do
      expect(average(4, 8)).to eq(6)
      expect(average(5, 10)).to eq(7.5)
    end
  end

  describe "average_array" do
    it "should accept an array of numbers as an arg" do
      expect { average_array([2, 4, 6]) }.to_not raise_error
    end

    it "should return the average of the numbers of the array" do
      expect(average_array([2, 4, 6])).to eq(4)
      expect(average_array([3, -4, 21, 8])).to eq(7)
      expect(average_array([5, 10])).to eq(7.5)
    end
  end

  describe "repeat" do
    it "should accept a string and a number as args" do
      expect { repeat("happy", 2) }.to_not raise_error
    end

    it "should return a new string where the original is repeated that number of times" do
      expect(repeat("happy", 2)).to eq("happyhappy")
      expect(repeat("Work", 5)).to eq("WorkWorkWorkWorkWork")
      expect(repeat("whoa", 0)).to eq("")
    end
  end

  describe "yell" do
    it "should accept a string as an arg" do
      expect { yell("hello") }.to_not raise_error
    end

    it "should return a yelled version of the string" do
      expect(yell("hello")).to eq("HELLO!")
      expect(yell("goodBYE")).to eq("GOODBYE!")
    end
  end

  describe "alternating_case" do
    it "should accept a sentence string as an arg" do
      expect { alternating_case("code never lies, comments sometimes do.") }.to_not raise_error
    end

    it "should return the sentence with words alternating between uppercase and lowercase" do
      expect(alternating_case("code never lies, comments sometimes do.")).to eq("CODE never LIES, comments SOMETIMES do.")
      expect(alternating_case("HEY PROGRAMMERS")).to eq("HEY programmers")
    end
  end
end
