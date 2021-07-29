class Piece

    attr_writer :pos

    def initialize(color,pos,board)
        raise "Invalid color" unless [:white,:black].include?(color)
        # raise "Invalid position" unless pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8
        raise "Invalid position" unless board.valid_pos?(pos)
        @color = color
        @pos = pos
    end

    def symbol
        raise NotImplementedError
    end
end