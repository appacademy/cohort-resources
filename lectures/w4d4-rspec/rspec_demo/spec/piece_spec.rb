require "piece"
# require "board"

describe Piece do
    let(:board) { double(:board, :valid_pos? => true) }
    # allow(board).to receive(:valid_pos?)
    subject(:piece) { Piece.new(:black, [0,0], board) }

    describe "#initialize" do
        context "with valid params" do
            it "instantiates a piece correctly" do
                # board = Board.new
                # piece = Piece.new(:white, [0,0], board)
                expect(piece.color).to be(:black)
                expect(piece.pos).to eq([0,0])
            end
        end

        context "with invalid params" do
            it "throws an error when provided an invalid color" do
                # board = Board.new
                expect{ Piece.new(:blue, [0,0], board) }.to raise_error("invalid color")
            end

            it "throws an error when provided an invalid position" do
                # board = Board.new
                allow(board).to receive(:valid_pos?).and_return(false)
                expect{ Piece.new(:black, [9,9], board) }.to raise_error("invalid position")
            end
        end
        # it "tests to be" do
        #     expect("hello").to be("hello")
        # end
    end
    
    describe "#pos=" do
        context "with valid pos" do
            before(:each) { puts "each"; piece.pos = [1,1] }
            # before(:all) { board = Board.new }

            it "correctly reassigns the position" do
                # piece = Piece.new(:black, [0,0], board)
                # piece.pos = [1,1]
                expect(piece.pos).to eq([1,1])
            end
            it "correctly reassigns the position" do
                # piece = Piece.new(:black, [0,0], board)
                # piece.pos = [1,1]
                expect(piece.pos).to eq([1,1])
            end
        end

        context "with invalid pos" do
            it "throws an error" do
                # piece = Piece.new(:black, [0,0], board)
                allow(board).to receive(:valid_pos?).and_return(false)
                expect{ piece.pos = [9,9] }.to raise_error("invalid position")
            end
        end
    end

    describe "#symbol" do
        it "throws a NotImplemented error" do
            # piece = Piece.new(:black, [0,0], board)
            expect { piece.symbol }.to raise_error(NotImplementedError)
            # expect(piece.symbol.is_a?(String)).to be(true)
        end
    end

    describe "#to_s" do
        it "returns a formatted string" do
            # piece = Piece.new(:black, [0,0], board)
            allow(piece).to receive(:symbol).and_return("♛")
            expect(piece.to_s).to eq(" ♛ ")
        end
    end

    describe "#empty?" do
        it "returns false" do
            # piece = Piece.new(:black, [0,0], board)
            expect(piece.empty?).to be false
            # expect(piece.empty?).to be_falsey
        end
    end
end