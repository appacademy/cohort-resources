require "problems"

describe "pow(base, exponent)" do
    it "should correctly calculate any base raised to the 0-th power" do
        expect(pow(2, 0)).to eq(1)
        expect(pow(7, 0)).to eq(1)
        expect(pow(10, 0)).to eq(1)
    end

    it "should calculate the base raised to the exponent power" do
        expect(pow(2, 1)).to eq(2)
        expect(pow(2, 5)).to eq(32)
        expect(pow(3, 4)).to eq(81)
        expect(pow(4, 3)).to eq(64)
    end

    it "should be recursive" do
        expect(self).to receive(:pow).at_least(:twice).and_call_original
        pow(2, 5)
    end
end

describe "lucas_number(n)" do
    it "should return the n-th number of the Lucas Sequence" do
        expect(lucas_number(0)).to eq(2)
        expect(lucas_number(1)).to eq(1)
        expect(lucas_number(2)).to eq(3)
        expect(lucas_number(5)).to eq(11)
        expect(lucas_number(10)).to eq(123)
    end

    it "should be recursive" do
        expect(self).to receive(:lucas_number).at_least(:twice).and_call_original
        lucas_number(5)
    end
end

describe "sum_array(array)" do
    it "should return the total sum of all elements in the array" do
        expect(sum_array([])).to equal(0)
        expect(sum_array([5])).to equal(5)
        expect(sum_array([5, 2])).to equal(7)
        expect(sum_array([4, 10, -1, 2])).to equal(15)
    end

    it "should be recursive" do
        expect(self).to receive(:sum_array).at_least(:twice).and_call_original
        sum_array([4, 10, -1, 2])
    end
end

describe "reverse_string(str)" do
    it "should return the string with its characters in reverse order" do
        expect(reverse_string("")).to eq("")
        expect(reverse_string("c")).to eq("c")
        expect(reverse_string("internet")).to eq("tenretni")
        expect(reverse_string("abbbcdef")).to eq("fedcbbba")
    end

    it "should be recursive" do
        expect(self).to receive(:reverse_string).at_least(:twice).and_call_original
        reverse_string("internet")
    end
end

describe "flatten(data)" do
    it "should return a flattened array" do
        expect(flatten("hi")).to eq(["hi"])

        array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
        expect(flatten(array_1)).to eq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
        
        array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
        expect(flatten(array_2)).to eq([ 'this', 'problem', 'is', 'pretty', 'tough', ':)'])
    end

    it "should be recursive" do
        expect(self).to receive(:flatten).at_least(:twice).and_call_original
        array = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
        flatten(array)
    end
end
