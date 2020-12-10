class Piece
    attr_reader :color
    attr_accessor :pos
    def initialize(color,pos,board)
        raise "Invalid Color" unless [:white,:black].include?(color)
        # raise "Invalid Position" unless pos.all? { |i| i.between?(0,7)}
        raise "Invalid Position" unless board.valid_pos?(pos)
        @color = color
        @pos = pos
    end

    def empty?
        false
    end

    def symbol
        # the subclass overwrites and implements this method
        raise NotImplementedError
    end

    def to_s
        " #{symbol} "
    end
end