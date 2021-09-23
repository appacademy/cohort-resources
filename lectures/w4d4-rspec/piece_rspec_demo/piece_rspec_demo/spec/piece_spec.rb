require 'piece'

describe Piece do
    let(:board) {double("Board", valid_position?: true)}
    subject(:piece) {Piece.new(:white, [0,0], board)}

    describe "#initialize" do
        context "with valid arguments" do
            it "sets the instance variables" do
                # Using to be checks for object id equality
                # Using to eq checks for object value equality
                expect(piece.color).to be(:white) 
                expect(piece.position).to eq([0,0])
                expect(piece.board).to be_truthy
            end
        end

        context "with invalid arguments" do
            it "raises an error when given an invalid color" do
                # Raise error can look for argument type or an error message or both
                # {} executes code, () reads a value
                expect{Piece.new(:pink, [0,0], board)}.to raise_error("Invalid color")
                expect{Piece.new(:red, [0,0], board)}.to raise_error("Invalid color")
                expect{Piece.new(:blue, [0,0], board)}.to raise_error("Invalid color")
                expect{Piece.new(:maroon, [0,0], board)}.to raise_error("Invalid color")
            end

            it "raises an error when given an invalid position" do
                allow(board).to receive(:valid_position?).and_return(false)
                expect{Piece.new(:black, [9,9], board)}.to raise_error("Invalid position")
                expect{Piece.new(:black, [9,0], board)}.to raise_error("Invalid position")
                expect{Piece.new(:black, [-1,5], board)}.to raise_error("Invalid position")
                expect{Piece.new(:black, [-9,-8], board)}.to raise_error("Invalid position")
                expect{Piece.new(:black, [-1,10], board)}.to raise_error("Invalid position")
            end
        end

        it "calls the board to check if the passed position is valid" do
            # Listens to see if board receives 'valid_position?'
            expect(board).to receive(:valid_position?)
            Piece.new(:white, [0,0], board)
        end
    end

    describe "#position=" do
        before(:each) {piece.position = [1,1]}
        it "reassigns the piece's position" do
            # piece.position = [1,1]
            expect(piece.position).to eq([1,1])
        end
    end

    describe "#symbol" do
        it "raises an error" do
            expect{piece.symbol}.to raise_error(NotImplementedError)
        end
    end

    describe "#to_string" do
        it "returns a formatted string" do
            allow(piece).to receive(:symbol).and_return('♜')
            expect(piece.to_string).to eq(' ♜ ')
        end
    end

    describe "#empty?" do
        it "should return false" do
            expect(piece.empty?).to be(false)
        end
    end
end