class Board

    def initialize
        raise "You dun goofd"
    end

    def valid_pos?(pos)
        pos.all? { |coord| coord.between?(0, 7) }
    end
end