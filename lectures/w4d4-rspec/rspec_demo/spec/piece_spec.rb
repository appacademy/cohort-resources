require "rspec"
require "piece"

# Describe: most basic unit of info,can be nested

describe Piece do 
    let(:board) {double("Board", valid_pos?: true)}
    subject(:piece) {Piece.new(:white,[0,0],board)}
    describe "#initialize" do
        context "with valid args" do
            it "instantiates a piece correctly" do
                # each it block is one spec
                # piece = Piece.new(:white,[0,0])
                expect(piece.color).to be(:white) # be refers to object id
                expect(piece.pos).to eq([0,0]) # eq checks equality
    
                # any expect failure fails the whole spec
            end
            it "delegates to the board to ensure the passed pos is valid" do
                expect(board).to receive(:valid_pos?)
                Piece.new(:black,[0,0],board)
                
            end
        end
        context "with invalid args" do
            # it "raises an error with an invalid color" # pending: needs no do/end
            it "raises an error with an invalid color" do
                # expect(Piece.new(:blue,[0,0])).to raise_error("Invalid Color") # can't do this
                expect {Piece.new(:blue,[0,0],board)}.to raise_error("Invalid Color")
                # when raising error, expect must take a block
            end
            it "raises an error with an invalid position" do 
                allow(board).to receive(:valid_pos?).and_return(false)
                expect {Piece.new(:white,[9,9],board)}.to raise_error("Invalid Position")
            end
        end
        it "has a pending spec"
    end
    describe "#pos=" do
        before(:each) {piece.pos = [2,4]}
        it "correctly assigns a piece's position" do 
            # piece = Piece.new(:black,[0,0])
            # piece.pos = [2,4]
            expect(piece.pos).to eq([2,4])
        end
    end
    describe "#empty?" do
        it "returns false" do
            # piece = Piece.new(:black,[6,7])
            expect(piece.empty?).to be false
        end
    end
    describe "#symbol" do
        it "raises an error" do
            # piece = Piece.new(:white,[2,5])
            expect do
                piece.symbol
            end.to raise_error(NotImplementedError)
        end
    end
    describe "#to_s" do
        it "returns a formatted string" do
            # piece = Piece.new(:black,[3,7])
            allow(piece).to receive(:symbol).and_return("♜")
            # expect(piece.to_s).to be(" ♜ ") # nope
            expect(piece.to_s).to eq(" ♜ ")
        end
    end
end