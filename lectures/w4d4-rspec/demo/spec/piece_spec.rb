require 'rspec'
require 'byebug'
require 'piece' # only works b/c we followed convention

describe Piece do
  subject(:piece) { Piece.new(:black, [3,5], board) }
  let(:bad_piece) { Piece.new(:blue, [1,1], board) }
  let(:board) { double("Board", valid_pos?: true) }
  # a double is a mock object, a stand in for an instance of another class

  # block runs for the start of every test (it block)
  # result is a new instance for each test

  describe '#initialize' do
    context 'with valid arguments' do
      it 'sets all instance variables' do
        # write expect statements only inside 'it' blocks
        expect(piece.color).to be(:black)
        # be expects object equality
        expect(piece.pos).to eq([3,5])
        # eq expects value equality
      end
    end
    
    context 'with invalid arguments' do
      it 'takes in 3 arguments' do
        expect { Piece.new(:white,[1,1],board,[4,5]) }.to raise_error(ArgumentError)
      end

      it 'raises an error when provided an invalid color' do
        expect { bad_piece }.to raise_error("Invalid color")
      end

      it 'raises an error when provided an invalid pos' do
        allow(board).to receive(:valid_pos?).and_return(false)
        expect { Piece.new(:white, [9,9], board) }.to raise_error(RuntimeError, "Invalid pos")
      end

      it 'delegates to the board when checking for a valid pos' do
        expect(board).to receive(:valid_pos?)
        piece
      end
    end
  end

  describe '#pos=' do
    before(:each) { piece.pos = [2,2] }

    it 'correctly reassigns a piece\'s position' do
      expect(piece.pos).to eq([2,2])
    end
  end

  describe '#symbol' do

    it 'raises an error' do
      expect { piece.symbol }.to raise_error(NotImplementedError)
    end
  end

  describe '#empty?' do
    it 'returns false' do
      expect(piece.empty?).to be_falsey
    end
  end
end