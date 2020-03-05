require 'rspec'
require 'piece'

describe Piece do 
    let(:board) { double('board', valid_pos?: true, another_method: 'wut') }
    subject(:piece) { Piece.new(:white, [0,0], board) }
    # let(:bad_board) { double('bad_board', valid_pos?: false, another_method: 'wut') }
    
    describe '#initialize' do
        context 'with valid arguments' do
            it 'instantiates a piece correctly' do
                # allow(board).to receive(:valid_pos?).and_return(true)
                # piece = Piece.new(:white, [0,0], board)
                expect(piece.color).to eq(:white)
                expect(piece.pos).to eq([0,0])
            end
        end

        context 'with invalid arguments' do
            it 'raises an error when provided an invalid color' do
                # allow(board).to receive(:valid_pos?).and_return(true)
                expect { Piece.new(:blue, [0,0], board) }.to raise_error('Invalid Color')
            end
            
            context 'for checking position' do
                it 'raises an error when provided an invalid pos' do
                    allow(board).to receive(:valid_pos?).and_return(false)
                    expect { Piece.new(:white, [-1,0], board) }.to raise_error('Invalid Position') 
                end

                it 'calls on Board#valid_pos?' do # this could be outside of this context but we wanted it here
                    expect(board).to receive(:valid_pos?) 
                    Piece.new(:black, [0,0], board)
                end
            end
        end
    end

    describe '#pos=' do
        it "correctly reassigns a piece's position" do
            expect(piece.pos).to eq([0,0])
            piece.pos = [1,1]
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
            allow(piece).to receive(:symbol).and_return('♙') # ctrl + cmd + space
            expect(piece.to_s).to eq(' ♙ ')
        end
    end

    describe '#attack' do
        # this runs `before each` of the it blocks within this describe block
        before(:each) { 
            piece.attack(other_piece) # doesnt run at this time, runs during the it blocks 
        }

        context 'when piece successfully attacks another piece' do
            let(:other_piece) { Piece.new(:black, [1,1], board) }

            it 'moves the pos for attacking piece' do # this is the spec
                expect(piece.pos).to eq([1,1])
            end

            it 'changes the attacked piece to be dead' do # this too
                expect(other_piece.dead).to be(true)
            end
        end

        context 'when piece cannot attack another piece' do
            let(:other_piece) { Piece.new(:black, [2,2], board) }

            it 'does not change the pos of the two pieces' do
                expect(other_piece.pos).to eq([2,2])
                expect(piece.pos).to eq([0,0])
            end

            it 'makes the other piece not dead' do
                expect(other_piece.dead).to be(false)
            end
        end
    end
end

# expect(Array.empty?).to be true == expect(Array).to be_empty

# expect(my_hash.has_key?(my_key)).to eq(true) == expect(my_hash).to have_key(my_key)