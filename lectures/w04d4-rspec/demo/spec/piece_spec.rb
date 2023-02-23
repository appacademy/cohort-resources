require 'rspec'
require 'piece'
require 'byebug'

describe Piece do
  let(:board) { double(:Board, valid_pos?: true) }
  subject(:piece) { Piece.new(:white, [0,0], board) }
  let(:bad_piece) { Piece.new(:blue, [1,1], board) }

  # before do
  #   puts 'Testing!'
  # end
  
  # before(:all) do
  #   puts 'Ready set go!'
  # end

  describe '#initialize' do
    context 'with valid arguments' do
      it 'instantiates a piece correctly' do
        # piece = Piece.new(:white, [0,0])
        # be enforces strict equality
        expect(piece.color).to be(:white)
        # eq enforces value equality
        expect(piece.pos).to eq([0,0])
      end
    end

    context 'with invalid arguments' do
      it 'throws an error when provided an invalid color' do
        # piece = Piece.new(:white, [0,0])
        # piece = Piece.new(:blue, [4,5])
        expect{bad_piece}.to raise_error('Invalid color')
      end
    end
  end

  describe '#pos=' do
    context 'when a valid position' do
      it 'checks with the board for a valid position' do
        expect(board).to receive(:valid_pos?)
        piece.pos = [4,5]
      end

      it 'correctly reassigns a piece\'s position' do
        # piece = Piece.new(:white, [0,0])
        piece.pos = [1,1]
        expect(piece.pos).to eq([1,1])
      end
    end

    # context 'when the new position is occupied' do
    #   it 'does not reassign and throws an error' do
        
    #   end
    # end
  end
end