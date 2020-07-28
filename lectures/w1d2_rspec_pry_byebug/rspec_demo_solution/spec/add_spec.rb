require "add"

describe "add method" do
  it "should accept two numbers as arguments" do
    expect { add(2, 3) }.to_not raise_error
  end

  it "should return the sum of the two numbers" do
    expect(add(2, 3)).to eq(5)
    expect(add(10, 12)).to eq(22)
  end
end
