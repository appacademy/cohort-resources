require "player"

describe "Player" do
    let(:player) { Player.new('y') }

    describe "#initialize" do
        it "should accept a token as an arg" do
            expect { player }.to_not raise_error
        end

        it "should set @token to the given arg" do
            expect(Player.new('y').instance_variable_get(:@token)).to eq('y')
            expect(Player.new('b').instance_variable_get(:@token)).to eq('b')
            expect(Player.new('r').instance_variable_get(:@token)).to eq('r')
        end
    end

    describe "#token" do
        it "should return @token" do
            test_token = double("token")
            expect(Player.new(test_token).token).to be(test_token)
        end
    end
end
