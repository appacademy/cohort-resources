class Piece

    attr_reader :color, :board
    attr_accessor :pos

    def initialize(color, board, pos)
        raise "Invalid color" if !(color == :black || color == :white)
        raise "Invalid position" if !board.valid_pos?(pos)

        @color = color
        @board = board
        @pos = pos
    end

    def to_s
        " #{self.symbol} "
    end

    def empty?
        false
    end

    def symbol
        raise NotImplementedError
    end

    


end