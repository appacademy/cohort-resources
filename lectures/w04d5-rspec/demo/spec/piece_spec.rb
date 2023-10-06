require 'piece'

# it's super important to organize our specs in order to produce good documentation
# highest level of organization in specs is `describe`

describe Piece do
  # a double is a mock instance of another class
  let(:board) { double("Board", valid_pos?: true) }
  # subjects, lets, and doubles are all lazily instantiated
  subject(:piece) { Piece.new(:white, [3,3], board) }
  let(:blue_piece) { Piece.new(:blue, [3,3], board) }

  describe '#initialize' do
    context 'when given valid arguments' do
      it 'creates @color, @pos, and @board instance variables/getters' do
        # piece = Piece.new(:white, [3,3])
        expect(piece.color).to be(:white) # strict object equality
        expect(piece.pos).to eq([3,3]) # value quality
        expect(piece.board).to be(board)
      end

      it 'defers to @board in order to ensure position is valid' do
        expect(board).to receive(:valid_pos?)
        piece
      end
    end

    context 'when given invalid arguments' do
      it 'raises an error when provided an invalid color' do
        expect { blue_piece }.to raise_error('Invalid color')
      end
  
      it 'raises an error when provided an invalid pos' do
        allow(board).to receive(:valid_pos?).and_return(false)
        expect { Piece.new(:white, [-1,3], board) }.to raise_error('Invalid pos')
      end
    end
  end

  describe '#pos=' do
    before(:each) { piece.pos = [1,1] }

    it 'correctly reassigns a piece\'s position' do
      # piece = Piece.new(:white, [3,3])
      # piece.pos = [1,1]
      expect(piece.pos).to eq([1,1])
    end
  end

  describe '#symbol' do
    # not implemented in the Piece class
    it 'is not implemented in base class' do
      # piece = Piece.new(:white, [3,3])
      expect { piece.symbol }.to raise_error(NotImplementedError)
    end
  end

  describe '#to_s' do
    it 'returns a formatted string' do
      # piece = Piece.new(:white, [3,3])
      allow(piece).to receive(:symbol).and_return('♖')
      expect(piece).to receive(:symbol)
      expect(piece.to_s).to eq('♖')
    end
  end
end