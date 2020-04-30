require 'piece' #rspec knows to go into lib 
# require_relative '../lib/piece' this is an alternative 

describe Piece do #describe is Ruby syntax: relates to specific method or class 
  let(:board) { double("Board", valid_pos?: true) }
  #creating a variable: this variable is avaiable to all of our tests 
  #double: we are mocking this other class 
  #valid_pos? is a potential instance method and we want it to return true 

  #only one subject. multiple ones will overwrite previous ones 
  subject(:piece) { Piece.new(:black, board, [0,0]) }

  describe '#initialize' do 
    context 'with valid arguments' do 
      it 'instantiates a piece correctly' do #no do-end blocks leads to pending test 
      #it statement is the test. one spec 
        # piece = Piece.new(:black, board, [0,0]) 
        expect(piece.color).to be(:black) #to be: a.equal? b checking object_ids 
        expect(piece.pos).to eq([0,0]) #to eq: just checking equivalence a == b 
        #both expects need to ring true for this spec to pass 
      end
    end

    context 'with invalid arguments' do 
      it 'raises an error when provided an invalid color' do 
        expect{ Piece.new(:blue, board, [0,0]) }.to raise_error('Invalid color')
      end

      it 'raises an error when provided an invalid position' do 
        allow(board).to receive(:valid_pos?).and_return(false) 
        #this is unit test forcing return value to be false
        #mimicking board behavior 
        expect { Piece.new(:white, board, [9,9]) }.to raise_error('Invalid pos')
        #we are not testing board.valid_pos? 
      end
    end
  end

  describe '#pos=' do 
    before(:each) { piece.pos = [1,1] }
    #change pos each time before each it statements 
    #before(:all) will only run once per block

    it 'correctly reassigns a piece\'s position' do 
      # piece = Piece.new(:white, board, [0,0])
      expect(piece.pos).to eq([1,1])
    end

    it 'correctly reassigns a piece\'s position again' do 
      expect(piece.pos).to eq([1,1])
    end
  end

  describe '#symbol' do 
    it 'raises an error' do 
      # piece = Piece.new(:black, board, [2,3])
      expect{ piece.symbol }.to raise_error(NotImplementedError) 
    end
  end

  describe '#to_s' do 
    it 'returns a formatted string' do 
      # piece = Piece.new(:white, board, [1,5])
      allow(piece).to receive(:symbol).and_return('♕')
      expect(piece.to_s).to eq(' ♕ ')
    end
  end

  describe '#empty?' do 
    it 'returns false' do 
      # piece = Piece.new(:black, board, [4,5])
      expect(piece.empty?).to be(false)
    end
  end
end