require 'byebug'

class Piece 

    attr_reader :color
    attr_accessor :pos
    # def initialize(color, pos, banana)
    def initialize(color, pos, board)
        raise 'invalid color' unless [:white, :black].include?(color)
        x, y = pos
        # raise 'invalid position' unless (x >= 0 && y >= 0) && (x < 8 && y < 8)
        raise 'invalid position' unless board.valid_pos?(pos)
        @color = color
        @pos = pos
        @board = board
        # @banana = banana
    end

    # def something_else
    #     orange = @banana

    #     return orange
    # end

    def symbol 
        raise NotImplementedError
    end

    def empty?
        false
    end

    def to_s 
        "#{symbol}"
    end

end

# class Pawn 
#     def symbol
#        "🐱"
#     end
# end
