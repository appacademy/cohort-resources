
class Board 
    attr_reader :grid
    
    def initialize
        @grid = Array.new(4){Array.new(4, "black")}
        # @grid = Array.new(4, Array.new(4, "black"))
    end

    def [](pos)
        @grid[pos[0]][pos[1]]
    end

    def []=(pos, color)
        @bad_grid[pos[0]][pos[1]] = color
    end

    def check_row 
        @grid.any?{|sub_arr| sub_arr.uniq.length == 1}
    end

    def check_column
        @grid.transpose.any?{|sub_arr| sub_arr.uniq.length == 1}
    end

    def complete_diag?
        right_diagonal = []
        left_diagonal = []
        @grid.each_with_index do |ele, idx|
            right_diagonal << @grid[idx][idx]
            left_diagonal << @grid[idx][@grid.length - 1 - idx]
        end
        return true if (right_diagonal.uniq.length == 1 ) || (left_diagonal.uniq.length == 1 ) 
        false
    end

end