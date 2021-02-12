require "piece.rb"

describe Piece do
  let(:board) { double("Board", valid_pos?: true) }
  subject(:piece) { piece = Piece.new(:white, board, [0,0]) }

  describe "#initialize" do
    context "with valid arguments" do
      it "instantiates a piece correctly" do
        # piece = Piece.new(:white, [0,0])
        expect(piece.color).to be(:white)
        expect(piece.pos).to eq([0,0])
      end
    end

    context "with invalid arguments" do
      it "raises an error when given an invalid color" do
        expect{ Piece.new(:blue, board, [0,0]) }.to raise_error("Invalid color")
      end

      it "raises an error when given an invalid position" do
        allow(board).to receive(:valid_pos?).and_return(false)
        expect{ Piece.new(:white, board, [9,9]) }.to raise_error(RuntimeError)
      end
    end
  end

  describe "#pos=" do
    before(:each) { piece.pos = [1,1] }

    it "correctly reassigns a piece\'s position" do
      # piece = Piece.new(:white, [0,0])
      # piece.pos = [1,1]
      expect(piece.pos).to eq([1,1])
    end

    it "doesn\'t incorrectly reassign a piece\'s position" do
      # piece = Piece.new(:white, [0,0])
      # piece.pos = [1,1]
      allow(piece).to receive(:pos).and_return([0,0])
      expect(piece.pos).to_not eq([0,0])
    end
  end

  describe "#symbol" do
    it "raises an error" do
      # piece = Piece.new(:white, [0,0])
      
      expect{piece.symbol}.to raise_error(NotImplementedError)
    end
  end

  describe "#empty?" do
    it "returns false" do
      # piece = Piece.new(:white, [0,0])

      expect(piece.empty?).to be(false)
    end
  end
end