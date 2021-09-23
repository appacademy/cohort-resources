class Piece

    attr_reader :color, :board
    attr_accessor :position

    def initialize(color, position, board)
        raise "Invalid color" if ![:black, :white].include?(color)
        raise "Invalid position" if !board.valid_position?(position)
        @color = color
        @position = position
        @board = board
    end

    def symbol
        raise NotImplementedError
    end

    def to_string
        " #{symbol} "
    end

    def empty?
        return false
    end
end