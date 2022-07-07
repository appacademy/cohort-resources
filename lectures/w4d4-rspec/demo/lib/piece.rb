class Piece

    attr_reader :color, :pos
    attr_writer :pos

    def initialize(color, board, pos)
        raise "Invalid color" unless [:black, :white].include?(color)
        raise "Invalid pos" if board.valid_pos?(pos) == false
        @color = color
        @pos = pos
        @board = board
    end

    def symbol
        raise NotImplementedError
    end

    def empty?
        false
    end

end