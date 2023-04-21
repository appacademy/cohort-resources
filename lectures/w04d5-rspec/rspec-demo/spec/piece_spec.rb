require "piece"

describe Piece do
    describe "#initialize" do
        context "with valid arguments" do
            it "instantiates a piece correctly" do
                piece = Piece.new(:white, [0,0])
                expect(piece.color).to be(:white)
                expect(piece.pos).to eq([0,0])
            end
        end

        context "with invalid arguments" do
            it "raises an error when provided the wrong color" do
                expect{ Piece.new(:blue, [0,0]) }.to raise_error("Invalid color (must be black or white)")
            end
        end
    end

    describe "#pos=" do
        it "correctly reassign the position of a piece" do
            piece = Piece.new(:white, [0,0])
            piece.pos = [1,1]
            expect(piece.pos).to eq([1,1])
        end
    end

    describe "#to_s" do
        it "returns a string" do
            piece = Piece.new(:white, [0,0])
            expect(piece.to_s).to eq(' 👑 ')
        end
    end

    describe "#empty?" do
        it "returns false" do
            piece = Piece.new(:white, [0,0])
            expect(piece.empty?).to be false
        end
    end
end