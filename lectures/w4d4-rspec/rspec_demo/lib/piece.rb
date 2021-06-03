class Piece
    COLORS = [:white, :black]
    attr_reader :color, :pos, :board

    def initialize(color, pos, board)
        raise "invalid color" if !COLORS.include?(color)
        raise "invalid position" if !board.valid_pos?(pos)
        @color, @pos, @board = color, pos, board
    end

    def pos=(pos)
        raise "invalid position" if !board.valid_pos?(pos)
        @pos = pos
    end

    def symbol
        raise NotImplementedError
    end

    def to_s
        " #{symbol} "
    end

    def empty?
        false
    end
end