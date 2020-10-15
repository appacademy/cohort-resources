require "piece"
require "byebug"

describe Piece do
  # mock Board instance allows us to test the Piece #initialize without needing
  # a Board class. 
  let(:board) {double("board", valid_pos?: true)}
  subject(:piece) { Piece.new(:white, board, [0,0]) }
  
  describe "#initialize" do
    context "with valid arguments" do
      it "instantiates a piece correctly" do
        # piece = Piece.new(:white, board, [0,0])
        # be checks for object_id
        expect(piece.color).to be(:white)
        # eq checks for equality
        expect(piece.pos).to eq([0,0])
      end
    end

    context "with invalid arguments" do
      it "raises an error when provided an invalid color" do
        # need block {} for checking errors
        expect{ Piece.new(:blue, board, [0,0]) }.to raise_error("Invalid color")
      end

      it "raises an error when provided an invalid position" do
        allow(board).to receive(:valid_pos?).and_return(false)
        expect{ Piece.new(:white, board, [9,9]) }.to raise_error("Invalid position")
      end

      it "delegates to the board to ensure the passed position is valid" do
        expect(board).to receive(:valid_pos?)
        Piece.new(:white, board, [0,1])
      end
    end
  end

  describe "#pos=" do
    before(:each) { piece.pos = [1,1] } # will run before each it block
    it "correctly assigns a piece's position" do
      expect(piece.pos).to eq([1,1])
    end
  end

  describe "#symbol" do
    it "raises an error" do
      expect{ piece.symbol }.to raise_error(NotImplementedError)
    end
  end

  describe "#to_s" do
    it "returns a formatted string" do
      allow(piece).to receive(:symbol).and_return("♜")
      expect(piece.to_s).to eq(" ♜ ")
    end
  end

  describe "#empty?" do
    it "returns false" do
      expect(piece.empty?).to be_falsey # there are a lot of different 'matchers'
    end
  end
  
end