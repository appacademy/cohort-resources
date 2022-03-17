class Piece
    attr_reader :color, :board
    attr_accessor :pos

    def initialize(color, board, pos)
        raise Exception.new("Invalid color") unless %i(black white).include?(color)
        # raise "Invalid pos" unless pos.all? {|ele| (0..7) === ele}
        raise "Invalid pos" unless board.valid_pos?(pos)
        @color = color
        @board = board
        @pos = pos
    end

    def symbol
        raise NotImplementedError
    end

    def empty?
        false
    end

    def to_s
        symbol
    end
end