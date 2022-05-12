require 'piece'
require 'byebug'

describe Piece do 
  let(:board) { double("Banana", valid_pos?: true)}
  subject(:piece) { Piece.new(:white, board, [0,0])}
  describe '#initialize' do 
    context 'with valid arguments' do
      it 'instantiates a piece correctly' do
        # debugger
        # piece = Piece.new(:white, [0,0])
        expect(piece.color).to be(:white)
        expect(piece.pos).to eq([0,0])
      end
    end

    context 'with invalid arguments' do 
      it 'raises an error when provided with an invalid color' do 
        expect{ Piece.new(:blue, board, [0,0])}.to raise_error("Invalid color")
      end

      it 'raises an error when provided with an invalid position' do 
        allow(board).to receive(:valid_pos?).and_return(false)
        expect{ Piece.new(:white, board, [9,9])}.to raise_error("Invalid pos")
      end
    end
  end

  describe '#pos=' do 
    before(:each) { piece.pos = [1,1] }
    
    it 'correctly reassigns position' do 
      # piece = Piece.new(:white, [0,0])
      # piece.pos = [1,1]
      expect(piece.pos).to eq([1,1])
    end

    it 'still works' do 
      expect(piece.pos).to eq([1,1])
    end
  end

  describe "#symbol" do 
    it 'raises an error' do 
      # piece = Piece.new(:white, [0,0])
      expect{ piece.symbol }.to raise_error(NotImplementedError)
    end
  end

  describe '#empty?' do 
    it 'returns false' do 
      # piece = Piece.new(:white, [0,0])
      expect(piece.empty?).to be(false)
    end
  end
end