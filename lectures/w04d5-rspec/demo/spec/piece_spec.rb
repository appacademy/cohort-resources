require "piece" # look for piece file in lib

describe Piece do
  # let(:board) {Board.new} # turns everything into integration tests # not ideal
  let(:board) { double("Board", valid_pos?: true)} # double is a mock object, we can make pretend to be a Board instance
  # board.valid_pos? -> return true
  subject(:piece) { Piece.new(:white, board, [0,0]) } # test case for the whole spec file

  describe '#initialize' do # describe blocks organize tests into sections
    context 'with valid arguments' do # same as describe, but semantically more specific than describe
      it 'instantiates a piece correctly' do # it blocks actually set up test cases
          expect(piece.color).to be(:white) # be checks object identity (object_id)
          expect(piece.pos).to eq([0,0]) # eq checks equality (==)
      end
    end
    context 'with invalid arguments' do
      it 'raises an error when provided an invalid color' do
        expect{ Piece.new(:orange, board, [0,0]) }.to raise_error("Invalid color") # for checking errors, use a block with expect
      end
      it 'raises an error while provided an invalid position' do
        allow(board).to receive(:valid_pos?).and_return(false) # overwrite the valid_pos? attribute on the double to temporarily return false
        expect{ Piece.new(:white, board, [-1,99])}.to raise_error("Invalid position")
      end
    end
  end

  describe "#pos=" do
    context 'with valid arguments' do
      before(:each) { piece.pos = [1,1] } # runs before each test in this block
      
      it 'should assign a piece\'s position to the value given' do
        expect(piece.pos).to eq([1,1])
      end

      # other test cases for checking could use that change
      # it 'some other test using [1,1]' 
    end

    context 'with invalid arguments' do
      it 'passes in an array with 2 values' do
        expect{piece.pos = [1,2,3]}.to raise_error("Invalid position values")
      end
    end
  end

  describe "#to_s" do
    it 'returns a formatted string' do
      expect(piece.to_s).to eq('P')
    end
  end

  describe "#empty?" do
    it "returns false" do
      expect(piece.empty?).to be(false)
    end
  end
end