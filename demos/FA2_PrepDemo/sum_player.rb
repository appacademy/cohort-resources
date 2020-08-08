class Game 
    def initialize(current_player)
        @current_player = current_player 
        @player_a = "A"
        @player_b = "B"
    end


    def switch_players
        @current_player == @player_a ? @current_player = @player_b : @current_player = @player_a 
    end
    def play
        num_1 = rand(1..100)
        num_2 = rand(1..100)
        p "What is the sum of #{num_1} and #{num_2}?"
        result = gets 
        if result.chomp.to_i == num_1 + num_2
            p "You got it, #{@current_player}"
            switch_players
        else
            p "Try one more time, #{@current_player}"
        end
    end
end