class Board

    def self.build_stacks(num)
        Array.new(num) { Array.new }
    end

    attr_reader :max_height

    def initialize(num_stacks, max_height)
        # num_stacks = 100; max_height = 3
        if (num_stacks < 4) || (max_height < 4)
            raise 'rows and cols must be >= 4'
        end
        @max_height = max_height
        @stacks = Board.build_stacks(num_stacks)
    end

    def add(token, stack_idx)
        if @stacks[stack_idx].length < max_height
            @stacks[stack_idx] << token
            true
        else
            false
        end
    end

    def vertical_winner?(token)
        @stacks.each do |sub_arr|
            if sub_arr.count(token) == max_height
                return true
            end
        end
        false
    end

    def horizontal_winner?(token)
        # Nested loop; @stacks[inner_loop][outer_loop]
        (0...@stacks[0].length).each do |outer_loop|
            counter = 0
            (0...@stacks.length).each do |inner_loop|
                if @stacks[inner_loop][outer_loop] == token
                    counter += 1
                end
            end
            if counter == @stacks.length
                return true
            end
        end
        false
    end


    # Here's a much shorter way to solve horizontal winner. It's using the same
    # logic as above, just using a .any? & .all? to iterate rather than a counter.

    # def horizontal_winner?(token)
    #     (0...@stacks[0].length).any? do |ele_idx|
    #         (0...@stacks.length).all? {|arr_idx| @stacks[arr_idx][ele_idx] == token}
    #     end
    # end

    def winner?(token)
        horizontal_winner?(token) || vertical_winner?(token)
        # if horizontal_winner?(token) || vertical_winner?(token)
        #     true
        # else
        #     false
        # end
    end


    

    # This Board#print method is given for free and does not need to be modified
    # It is used to make your game playable.
    def print
        @stacks.each { |stack| p stack }
    end
end
