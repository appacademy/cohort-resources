class Player

    attr_reader :token

    def initialize(token)
        @token = token
    end



    # This Player#get_stack_index method is given for free and does not need to be modified
    # It is used to make your game playable.
    def get_stack_index
        p "player " + @token + ", enter a valid stack index"
        gets.chomp.to_i
    end
end
