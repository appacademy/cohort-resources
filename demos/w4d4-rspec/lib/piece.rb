class Piece
    attr_reader :color, :board
    attr_accessor :position

    def initialize(color, board, position)
        raise 'invalid color' unless [:white, :black].include?(color)
        raise 'Invalid position' unless board.valid_pos?(position)

        @color = color
        @position = position
        @board = board
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
