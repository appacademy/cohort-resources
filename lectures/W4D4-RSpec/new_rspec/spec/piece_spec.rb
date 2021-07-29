require "piece"

describe Piece do
# basic unit of organization, takes a string and wraps a do end block
    let(:board) { double("board", valid_pos?: true) }
    subject(:piece) { Piece.new(:white,[0,0],board) }
    describe "#initialize" do
        context "with valid args" do
            it "should instantiate a Piece correctly" do
                # will only pass if both expects pass
                # board = double("board")
                # allow(board).to receive(:valid_pos?).and_return(true)
                # piece = Piece.new(:white,[0,0],board)
                # this piece only exists in the "it" block scope
                expect(piece.instance_variable_get("@color")).to be(:white)
                expect(piece.instance_variable_get("@pos")).to eq([0,0])
            end
        end
        context "with invalid args" do
            it "raises and error when provided an invalid color" do
                # board = double("board")
                # allow(board).to receive(:valid_pos?).and_return(true)
                expect { Piece.new(:blue,[0,0],board) }.to raise_error("Invalid color")
            end
            it "raises and error when provided an invalid position" do
                # whenever you expect an error raise, you must use a block with expect
                # board = double("board")
                allow(board).to receive(:valid_pos?).and_return(false)
                expect { Piece.new(:black,[9,9],board) }.to raise_error("Invalid position")
            end
        end
        it "delegates to the board to ensure position is valid" do
            expect(board).to receive(:valid_pos?)
            Piece.new(:black,[1,1],board)
        end
    end
    describe "#pos=" do
        before(:each) { piece.pos = [1,1] }
        # scoped inside this describe block
        it "correctly reassigns the pieces position" do
            # piece.pos = [1,1]
            # expect(piece.instance_variable_get("@pos")).not_to eq([0,0])
            expect(piece.instance_variable_get("@pos")).to eq([1,1])
        end
    end

    describe "#symbol" do
        it "raises an error" do
            expect { piece.symbol }.to raise_error(NotImplementedError)
        end
    end
end
