class Piece

    attr_reader :color, :pos

    def initialize(color, pos)
        raise "Invalid color (must be black or white)" unless [:black, :white].include?(color)
        @color = color
        @pos = pos
    end
    
end