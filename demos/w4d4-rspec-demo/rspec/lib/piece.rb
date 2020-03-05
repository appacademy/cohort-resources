class Piece
    attr_reader :color, :pos, :board
    attr_accessor :dead

    def initialize(color, pos, board)
        raise 'Invalid Color' unless %i(white black).include?(color)
        raise 'Invalid Position' unless board.valid_pos?(pos)

        @color = color
        @pos = pos
        @board = board
        @dead = false
    end

    def pos=(new_pos)
        @pos = new_pos
    end

    def symbol
        raise NotImplementedError
    end

    def to_s
        " #{symbol} "
    end

    def attack(other_piece)
        x, y = self.pos
        possible_attack = [x+1, y+1]
        if possible_attack == other_piece.pos
            self.pos = possible_attack
            other_piece.dead = true
        end
    end
end