class Board 
    def initialize 
        # @grid = Array.new(4, Array.new(4, "B"))
        @grid = Array.new(4){ Array.new(4, "B")}
    end

    def [](pos)
        @grid[pos[0]][pos[1]]
    end

    def []=(pos, color)
        @grid[pos[0]][pos[1]] = color 
    end

    def check_row 
        @grid.any?{|row| row.uniq.length == 1}
    end

    def check_column 
        @grid.transpose.any?{|row| row.uniq.length == 1}
    end

    def check_diagonal 
        right_diagonal = []
        left_diagonal = []
        @grid.each_with_index do |ele, idx|
            left_diagonal << @grid[idx][idx] 
            right_diagonal << @grid[idx][@grid.length - idx - 1] 
        end

        right_diagonal.uniq.length == 1 || left_diagonal.uniq.length == 1
    end
end

b = Board.new 
# p b 
# p b.[]([0,0])
# p b[[0,0]]
p b
b.[]=([0,0], "W")
b[[0,0]]="W"
p b