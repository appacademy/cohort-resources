require 'piece'

# we open up our testing structure with `describe`
describe Piece do
  # a double is a mock object used to model other classes
  let(:board) { double("Board", valid_pos?: true) }
  subject(:piece) { Piece.new(:white, [0,0], board) }
  let(:invalid_piece) { Piece.new(:purple, [0,0], board) }

  describe '#initialize' do
    context 'when invoked with valid arguments' do
      # individual specs are defined using `it`
      it 'sets @color and @pos instance variables with getters' do
        # an actual test consists of an assertion or expectation
        # new_piece = Piece.new(:white, [2,3])
        expect(piece.color).to be(:white)
        expect(piece.pos).to eq([0,0])
      end

      it 'defers to @board in order to verify that @pos is valid' do
        expect(board).to receive(:valid_pos?)
        piece
      end
    end

    context 'when invoked with invalid arguments' do
      it 'throws an error if @color is not :white or :black' do
        expect{invalid_piece}.to raise_error('color must be white or black')
      end

      it 'throws an error is @pos is not valid' do
        allow(board).to receive(:valid_pos?).and_return(false)
        expect{Piece.new(:white, [-1,3], board)}.to raise_error('invalid position')
      end
    end
  end

  describe '#pos=' do
    before(:each) { piece.pos = [1,1] }

    it 'correct reassigns the piece\'s pos to a new value' do
      # new_piece = Piece.new(:black, [0,0])
      # piece.pos = [1,1]
      expect(piece.pos).to eq([1,1])
    end
  end
end