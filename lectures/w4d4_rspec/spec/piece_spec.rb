require 'piece'

describe Piece do
  let(:board) { double("Board", valid_pos?: true) }
  subject(:piece) { Piece.new(:black, [0,0], board) }

  describe '#initialize' do

    context 'with valid arguments' do
      it 'instatiates a piece correctly' do
        expect(piece.color).to be(:black)
        expect(piece.pos).to eq([0,0])
      end

      it 'delegates to the board to ensure that the passed position is valid' do
        expect(board).to receive(:valid_pos?)
        Piece.new(:black, [0,0], board)
      end

    end
    
    context 'with invalid arguments' do
      it 'raises an error when passed an invalid color' do
        expect{ Piece.new(:blue, [0,0], board) }.to raise_error('Invalid Color')
      end

      it 'raises an error when passed an invalid pos' do
        allow(board).to receive(:valid_pos?).and_return(false)
        #board.valid_pos?(pos) => false
        expect{ Piece.new(:black, [9,9], board) }.to raise_error('Invalid Pos')
      end

    end
  end

  describe '#pos=' do
    before(:each) { piece.pos = [1,1] }

    it 'correctly reassigns the pos of a piece' do
      expect(piece.pos).to eq([1,1])
    end

  end

  describe '#symbol' do 
    it 'raises an error' do
      
      expect { piece.symbol }.to raise_error(NotImplementedError)
    end
  end

  describe '#to_s' do
    it 'returns a formatted string' do
      
      allow(piece).to receive(:symbol).and_return('♛')
      expect(piece.to_s).to eq(" ♛ ")
    end
  end

  describe '#empty?' do
    it 'returns false' do
      
      expect(piece.empty?).to be(false)
    end
  end



end