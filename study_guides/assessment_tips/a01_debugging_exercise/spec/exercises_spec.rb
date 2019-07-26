require "rspec"
require "exercises"

describe "#dups" do
  it "solves a simple example" do
    expect([1, 3, 0, 1].dups).to eq({ 1 => [0, 3] })
  end

  it "finds two dups" do
    expect([1, 3, 0, 3, 1].dups).to eq({ 1 => [0, 4], 3 => [1, 3] })
  end

  it "finds multi-dups" do
    expect([1, 3, 4, 3, 0, 3].dups).to eq({ 3 => [1, 3, 5] })
  end

  it "returns {} when no dups found" do
    expect([1, 3, 4, 5].dups).to eq({})
  end
end

describe "#pair_sum" do
  it "returns positions of pairs of numbers that add to zero" do
    expect([5, 1, -7, -5].pair_sum(0)).to eq([[0, 3]])
  end

  it "returns positions of pairs that add to other targets" do
    expect([2, 1, 4, -2].pair_sum(5)).to eq([[1, 2]])
  end

  it "finds multiple pairs" do
    expect([5, -1, -5, 1].pair_sum(0)).to eq([[0, 2], [1, 3]])
  end

  it "finds pairs with same element" do
    expect([5, -5, -5].pair_sum(0)).to eq([[0, 1], [0, 2]])
  end

  it "returns [] when no pair is found" do
    expect([5, 5, 3, 1].pair_sum(7)).to eq([])
  end

  it "won't find spurious target pairs" do
    expect([0, 1, 2, 3].pair_sum(0)).to eq([])
  end
end

describe "#caesar_cipher" do
  it "encodes a simple word" do
    expect(caesar_cipher("aaa", 11)).to eq("lll")
  end

  it "wraps around the alphabet" do
    expect(caesar_cipher("zzz", 1)).to eq("aaa")
  end

  it "encodes multiple words" do
    expect(caesar_cipher("catz hatz", 2)).to eq("ecvb jcvb")
  end
end


describe "#jumble_sort" do
  it "defaults to alphabetical order" do
    expect(jumble_sort("hello")).to eq("ehllo")
  end

  it "takes an alphabet array and sorts by that order" do
    alph = ("a".."z").to_a
    hello = "hello".chars.uniq
    alph -= hello
    alphabet = (hello += alph)

    expect(jumble_sort("hello", alphabet)).to eq("hello")
  end

  it "sorts by a reversed alphabet" do
    reverse = ("a".."z").to_a.reverse
    expect(jumble_sort("hello", reverse)).to eq("ollhe")
  end
end

describe 'transpose' do
  let(:arr) { [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ] }
  let(:small_arr) { [
    [1, 2],
    [3, 4]
    ] }
  let(:rect_arr) { [
    [1, 2, 3],
    [4, 5, 6]
    ] }
  let(:tall_rect_arr) { [
    [1, 2],
    [3, 4],
    [5, 6]
    ] }

  it 'should transpose a matrix' do
    expect(transpose(arr)).to eq([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
      ])
  end

  it 'should transpose a matrix of a different size' do
    expect(transpose(small_arr)).to eq([
      [1, 3],
      [2, 4]
      ])
  end

  it 'should transpose a rectangular matrix' do
    expect(transpose(rect_arr)).to eq([
      [1, 4],
      [2, 5],
      [3, 6]
      ])
  end

  it 'should transpose a different rectangular matrix' do
    expect(transpose(tall_rect_arr)).to eq([
      [1, 3, 5],
      [2, 4, 6]
      ])
  end

  it 'should not modify the original' do
    transpose(small_arr)
    expect(small_arr).to eq([
      [1, 2],
      [3, 4]
      ])
  end

  it 'should not call the Array#transpose method' do
    expect(arr).not_to receive(:transpose)
    transpose(arr)
  end
end

describe 'Array#my_inject' do
  it 'calls the block passed to it' do
    expect do |block|
      ["test array"].my_inject(:dummy, &block)
    end.to yield_control.once
  end

  it 'makes the first element the accumulator if no default is given' do
    expect do |block|
      ["el1", "el2", "el3"].my_inject(&block)
    end.to yield_successive_args(["el1", "el2"], [nil, "el3"])
  end

  it 'yields the accumulator and each element to the block' do
    expect do |block|
      [1, 2, 3].my_inject(100, &block)
    end.to yield_successive_args([100, 1], [nil, 2], [nil, 3])
  end

  it 'does NOT call the built in Array#inject method' do
    original_array = ["original array"]
    expect(original_array).not_to receive(:inject)
    original_array.my_inject {}
  end

  it 'is chainable and returns a new array' do
    original_array = ["original array"]
    expect(original_array.my_inject {}).not_to eq(original_array)
  end
end
