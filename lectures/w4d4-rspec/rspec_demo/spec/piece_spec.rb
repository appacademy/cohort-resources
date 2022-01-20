require 'rspec' #rspec gem
require 'piece' #file we are writing tests for.  rspec will put "lib/" in the require path by default

describe Piece do #describe is rpsec's most basic unit of organization - it gathers groups of test together and can also enclose other describe blocks
  #can take a string as arg or constant that is the name of the class or module you are testing
  let(:board) { double("Board instance", :valid_position? => true)} 
  #let allows us to create a helper variable
  #double creates a mock object and can have methods with outputs as key-value pairs
  subject(:piece) {Piece.new(:white, [0,0], board)} #the subject of our tests; there should only be one subject
  describe '#initialize' do
    context 'with valid args' do #context is an alias for describe and can be a bit more descriptive
      it "properly sets the instance variables and creates getters" do #it is rspec's most basic test unit and test go inside it blocks
        #it block can have multiple expect calls but still is a single spec
        # piece = Piece.new(:white, [0,0], board)
        expect(piece.color).to be(:white) # Using to be checks for object id equality
        expect(piece.position).to eq([0,0]) # Using to eq checks for object value equality
        expect(piece.board).to_not eq nil 
      end
    end

    context 'with invalid args' do
      it 'raises an error when provided an invalid color' do
        # Raise error can look for argument type or an error message or both
        # {} executes code, () reads a value
        expect {Piece.new(:blue, [0,0], board)}.to raise_error("Invalid color")
      end

      it 'raises an error when given an invalid position' do
        allow(board).to receive(:valid_position?).and_return(false)
        expect {Piece.new(:black, [9,9], board)}.to raise_error("Invalid position")
      end
    end

    it 'calls the board to check if the passed position is valid' do
      expect(board).to receive(:valid_position?)
      # listens to see if board receives 'valid_position?'
      # Piece.new(:white, [0,0], board)
      piece
    end

    describe '#position=' do
      before(:each) {piece.position = [1,1]}
      # before is a script that runs before your tests execute
      # before(:each) runs before each test
      it "reassigns the piece's position" do
        # piece = Piece.new(:white, [0,0], board)
        expect(piece.position).to eq([1,1])
      end
    end

    describe "#symbol" do
      it 'raises an error' do
        expect{piece.symbol}.to raise_error(NotImplementedError)
      end
    end

    describe "#to_string" do
      it 'returns a formatted string' do
        allow(piece).to receive(:symbol).and_return('♟')
        expect(piece.to_string).to eq(' ♟ ')
      end
    end

    describe "#empty?" do
      it "should return false" do
        expect(piece.empty?).to be(false)
      end
    end
  end

end