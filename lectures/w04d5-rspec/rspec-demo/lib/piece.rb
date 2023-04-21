class Piece

    attr_reader :color, :pos

    def initialize(color, board, pos)
        raise "Invalid color (must be black or white)" unless [:black, :white].include?(color)
        raise "Invalid pos" unless board.valid_pos?(pos)
        @color = color
        @board = board
        @pos = pos
    end

    def pos=(new_pos)
        @pos = new_pos
    end

    def to_s
        ' 👑 '
    end

    def empty?
        false
    end
    
end

class Board

end