require "practice_assessment_1"

describe "#first_letter_vowel_count" do 
    it "should accept a sentence string as the arg" do
        expect { first_letter_vowel_count("apples are delicious") }.to_not raise_error
    end

    it "should return an integer indicating the number of words in the sentence which begin with a vowel (a, e, i, o, u)" do
        expect(first_letter_vowel_count("apples are delicious")).to eq(2)
        expect(first_letter_vowel_count("follow the yellow brick road")).to eq(0)
        expect(first_letter_vowel_count("I am who I am")).to eq(4)
    end
end

describe "#count_true" do
    prc1 = Proc.new {|n| n.even? }
    prc2 = Proc.new {|n| n.odd? }
    prc3 = Proc.new {|str| str.include?("n")}
    prc4 = Proc.new {|n| n < 10}

    it "should accept an array and a proc as args" do
        expect { count_true([1,2,3,4,5], prc1) }.to_not raise_error
    end

    it "should return an integer indicating the number of elements which returned true when passed into the proc" do
        expect(count_true([1,2,3,4,5], prc1)).to eq(2)
        expect(count_true([1,2,3,4,5], prc2)).to eq(3)
        expect(count_true(["apple", "banana", "cantaloupe"], prc3)).to eq(2)
        expect(count_true([100,200,300], prc4)).to eq(0)
    end
end

describe "#procformation" do
    is_positive = Proc.new {|el| el >= 0 }
    square_it = Proc.new {|el| el * el }
    minus_hundred = Proc.new {|el| el - 100}

    it "should accept an array and 3 procs as arguments" do
        expect { procformation([1,2,-3,4,-5], is_positive, square_it, minus_hundred) }.to_not raise_error
    end 

    it "should evaluate each element by the first proc and if that returns true the second proc should be called with that element, else the third. Return the results in an array." do
        expect(procformation([1,2,-3,4,-5], is_positive, square_it, minus_hundred)).to eq([1,4,-103,16,-105])
    end 
end 

describe "#array_of_array_sum" do
    it "should accept an array containing subarrays of numbers as an argument" do 
        expect { array_of_array_sum([[1,2],[3,4]]) }.to_not raise_error
    end

    it "should return the total sum of the elements in the subarrays" do
        expect(array_of_array_sum([[1,2],[3,4]])).to eq(10)
        expect(array_of_array_sum([[5, 3], [6, 19, 18]])).to eq(51)
        expect(array_of_array_sum([[3, 10, 5], [4, 11], [10, 19, 11, 2]])).to eq(75)
    end
end

describe "#selective_reverse" do
    it "should accept a sentence string as an arg" do
        expect { selective_reverse("follow the yellow brick road") }.to_not raise_error
    end

    it "should return a new sentence in which every word from the original has been reversed except words that start or end with a vowel (a, e, i, o, u)" do
        expect(selective_reverse("follow the yellow brick road")).to eq("wollof the wolley kcirb daor")
        expect(selective_reverse("try to stay awake please")).to eq("yrt to yats awake please")
        expect(selective_reverse("STOP THAT RACKET NOW")).to eq("POTS TAHT TEKCAR WON")
    end
end

describe "hash_missing_keys" do
    it "should accept a hash and any number of additional arguments" do 
        expect { hash_missing_keys({"z"=> true, "f"=>-1, "c"=>32}) }.to_not raise_error
        expect { hash_missing_keys({"z"=> true, "f"=>-1, "c"=>32}, "z") }.to_not raise_error
        expect { hash_missing_keys({"z"=> true, "f"=>-1, "c"=>32}, "z", "c") }.to_not raise_error
    end

    it "should return an array containing any of the additional arguments which are not keys in the hash" do
        expect(hash_missing_keys({"z"=> true, "f"=>-1, "c"=>32}, "z", "a")).to eq(["a"])
        expect(hash_missing_keys({1=>"ein", 2=>"zwei", 3=>"drei" }, 0, 2, 4, 6)).to eq([0, 4, 6])
        expect(hash_missing_keys({"z"=> true, "f"=>-1, "c"=>32}, "z", "f", "c")).to eq([])
    end

    context "when no additional arguments are passed" do
        it "should return an empty array" do
            expect(hash_missing_keys({0=>"null", 1=>"ein", 2=>"zwei", 3=>"drei" })).to eq([])
        end
    end
end
