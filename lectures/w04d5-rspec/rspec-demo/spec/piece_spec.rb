require "piece"

describe Piece do
    # let(:board) {Board.new} # integration test
    let(:board) {double("Board", valid_pos?: true)} # creates fake Board instance, where valid_pos? returns true
    subject(:piece) { Piece.new(:white, board, [0,0]) }

    describe "#initialize" do
        context "with valid arguments" do
            it "instantiates a piece correctly" do
                expect(piece.color).to be(:white)
                expect(piece.pos).to eq([0,0])
            end
        end

        context "with invalid arguments" do
            it "raises an error when provided the wrong color" do
                expect{ Piece.new(:blue, board, [0,0]) }.to raise_error("Invalid color (must be black or white)")
            end

            it "raises an error while provided an invalid condition" do
                allow(board).to receive(:valid_pos?).and_return(false) # change valid_pos? for one test
                expect{ Piece.new(:white, board, [-1, 99])}.to raise_error("Invalid pos")
            end
        end
    end

    describe "#pos=" do
        before(:each) {piece.pos = [1,1]} # before(:all) errors out
        it "correctly reassign the position of a piece" do
            expect(piece.pos).to eq([1,1])
        end
    end

    describe "#to_s" do
        it "returns a string" do
            expect(piece.to_s).to eq(' 👑 ')
        end
    end

    describe "#empty?" do
        it "returns false" do
            expect(piece.empty?).to be false
        end
    end
end