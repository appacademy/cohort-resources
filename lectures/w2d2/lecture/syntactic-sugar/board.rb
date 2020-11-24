class Board
    def initialize
        @grid = Array.new(3){Array.new(3)}
        populate
    end

    def populate
        @grid.each.with_index do |row, idx1|
            row.each.with_index do |piece, idx2|
                @grid[idx1][idx2] = [:x, :o].sample
            end
        end
    end
# [a, b] position = [0, 1]
    def [](i, j)
        # i, j = position[0], position[1]
        # @grid[position[0]][position[1]]
        @grid[i][j]
    end

    # position => [a, b]
    def []=(position, value)
        @grid[position[0]][position[1]] = value
    end

    
end

board = Board.new
p board

# piece1 = board.[]([0,1]) 
# p piece1

piece1 = board[[0,1]]

# p board.[](0, 1)
# p board[0, 1]

board.[]=([0,1], :x)
board[[0,1]] = :x







