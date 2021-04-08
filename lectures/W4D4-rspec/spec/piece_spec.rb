require 'piece'
require 'rspec'

describe Piece do 
    subject(:piece) { Piece.new(:white, [0, 0], board) }
    # subject(:variable_name) 
    let(:board) { double('Board', valid_pos?: true) }
    # creating another reusable variable that is a mock board instance

    describe '#initialize' do 
        context 'with valid arguments' do 
            it 'instantiates a piece correctly' do 
                # piece = Piece.new(:white, [0, 0])
                expect(piece.color).to be(:white) # .to be() checks for object ID
                expect(piece.pos).to eq([0, 0]) # .to eq() checks for equality
            end
            it 'delegates to the board to ensure the passed pos is valid' do 
                expect(board).to receive(:valid_pos?)
                Piece.new(:black, [1, 1], board)
            end
        end
        context 'with invalid arguments' do 
            it 'raises an error when provided an invalid color' do 
                expect{ Piece.new(:blue, [0, 0], board) }.to raise_error('invalid color')
            end 
            it 'raises an error when provided an invalid position' do 
                allow(board).to receive(:valid_pos?).and_return(false) # mocking board behavior
                expect{ Piece.new(:white, [-1, -1], board)}.to raise_error('invalid position')
                expect{ Piece.new(:black, [9, 9], board)}.to raise_error('invalid position')
            end
        end
    end

    describe '#pos=' do
        before(:each) { piece.pos = [1, 1] }
        it 'correctly reassigns a piece\'s position' do 
            # piece = Piece.new(:black, [0, 0])
            # piece.pos = [1, 1]
            expect(piece.pos).to eq([1, 1])
        end
        # 10 other it blocks that check pos reassignment
        # use before(:each) to avoid rewriting piece.pos = [1, 1] over and over
        # note: before(:all) will run before all it blocks and only runs once
    end

    describe '#symbol' do 
        it 'raises an error' do 
            # piece = Piece.new(:white, [2, 2])
            expect{ piece.symbol }.to raise_error(NotImplementedError)
        end
    end

    describe '#empty?' do 
        it 'returns false' do 
            # piece = Piece.new(:black, [0, 0])
            expect(piece.empty?).to be false # checking for specifically false
            # expect(piece.empty?).to be_falsey # checking for specifically falsey values (ex: nil)
        end 
    end
    
    describe '#to_s' do 
        it 'returns a formatted string' do 
            # piece = Piece.new(:black, [0, 0])
            allow(piece).to receive(:symbol).and_return('♟') # mocked version of working symbol
            # set up expectations first
            # then assume that the symbol method from another class (i.e. pawn) works
            # and expect that it returns a stringified version of that symbol
            expect(piece.to_s).to eq('♟') 
        end
    end

end
