require_relative 'board'
require_relative 'player'

class ConnectTacToe

    def initialize(num_stacks, max_height)
        @board = Board.new(num_stacks, max_height)
        @player_1 = Player.new('y')
        @player_2 = Player.new('b')
        @current_player = @player_1
    end

    def switch_players!
        if @current_player == @player_1
            @current_player = @player_2
        else
            @current_player = @player_1
        end
    end

    def play_turn
        input = @current_player.get_stack_index
        @board.add(@current_player.token, input)
        switch_players!
    end




    # This ConnectTacToe#play method is given for free and does not need to be modified
    # It is used to make your game playable.
    def play
        until @board.winner?(@player_1.token) || @board.winner?(@player_2.token)
            @board.print
            self.play_turn
            p "--------------------"
        end

        self.switch_players!
        @board.print
        p @current_player.token + " has won!"
    end
end
