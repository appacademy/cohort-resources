require "connect_tac_toe"
require "player"
require "board"

describe "ConnectTacToe" do
    let(:small_connect_tac_toe) { ConnectTacToe.new(7, 6) }
    let(:big_connect_tac_toe) { ConnectTacToe.new(8, 10) }

    it "should not have a #board method" do
        expect(small_connect_tac_toe).to_not respond_to(:board)
    end

    describe "#initialize" do
        it "should accept two numbers as args, the number stacks and the max stack height" do
            expect { small_connect_tac_toe }.to_not raise_error
        end

        it "should set @board to a instance of Board with the given dimensions" do
            expect(small_connect_tac_toe.instance_variable_get(:@board)).to be_instance_of(Board)
            expect(small_connect_tac_toe.instance_variable_get(:@board).max_height).to eq(6)

            expect(big_connect_tac_toe.instance_variable_get(:@board)).to be_instance_of(Board)
            expect(big_connect_tac_toe.instance_variable_get(:@board).max_height).to eq(10)
        end

        it "should set @player_1 and @player_2 to instances of Player with tokens 'y' and 'b' respectively" do
            player_1 = small_connect_tac_toe.instance_variable_get(:@player_1)
            expect(player_1).to be_instance_of(Player)
            expect(player_1.token).to eq('y')

            player_2 = small_connect_tac_toe.instance_variable_get(:@player_2)
            expect(player_2).to be_instance_of(Player)
            expect(player_2.token).to eq('b')
        end

        it "should set @current_player to be the same instance as @player_1" do
            expected = small_connect_tac_toe.instance_variable_get(:@player_1)
            actual = small_connect_tac_toe.instance_variable_get(:@current_player)
            expect(actual).to be(expected)
        end
    end

    describe "switch_players!" do
        it "should set @current_player to the other player" do
            player_1 = small_connect_tac_toe.instance_variable_get(:@player_1)
            player_2 = small_connect_tac_toe.instance_variable_get(:@player_2)

            expect(small_connect_tac_toe.instance_variable_get(:@current_player)).to be (player_1)
            small_connect_tac_toe.switch_players!
            expect(small_connect_tac_toe.instance_variable_get(:@current_player)).to be (player_2)
            small_connect_tac_toe.switch_players!
            expect(small_connect_tac_toe.instance_variable_get(:@current_player)).to be (player_1)
        end
    end

    describe "play_turn" do
        it "should get the stack index to be played from the @current_player" do
            player = small_connect_tac_toe.instance_variable_get(:@current_player)
            allow(player).to receive(:get_stack_index).and_return(2)
            expect(player).to receive(:get_stack_index)
            small_connect_tac_toe.play_turn
        end

        it "should add @current_player's token to the top of the designated stack on the @board" do
            player = small_connect_tac_toe.instance_variable_get(:@current_player)
            allow(player).to receive(:get_stack_index).and_return(2)
            small_connect_tac_toe.play_turn
            stack = small_connect_tac_toe
                .instance_variable_get(:@board)
                .instance_variable_get(:@stacks)[2]
            expect(stack).to eq([player.token])
        end

        it "should switch players to end the turn" do
            player = small_connect_tac_toe.instance_variable_get(:@current_player)
            allow(player).to receive(:get_stack_index).and_return(2)
            allow(small_connect_tac_toe).to receive(:switch_players!)
            expect(small_connect_tac_toe).to receive(:switch_players!)
            small_connect_tac_toe.play_turn
        end
    end
end
