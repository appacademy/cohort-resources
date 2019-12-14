# Topics to review - part 2

* Instantiating a new array
```rb
    @grid = Array.new(n) {Array.new(n, :N)}
```

* Multiple reassignment

```rb
   position = [3, 5, 6]

   row, col, a = position
   
   # is equivalent to the below
   row = position[0] 
   col = position[1]

```

* Syntactic sugar 

```rb

    board_instance.grid[row][col]

    def [](pos)
        row, col = pos
        @grid[row][col]
    end

    board_instance.[](pos) # without syntactic sugar
    board_instance[pos] # is equivalent to board_instance.[](pos) without syntactic sugar

    # what data type is pos? 
    # Always remember what data type you're working with!
    # board_instance[pos] vs array_instance[3]

    def []=(pos, val)
        row, col = pos
        @grid[row][col] = val
    end

    board_instance.[](pos, val) # without syntactic sugar
    board_instance[pos] = val # is equivalent to board_instance.[](pos, val) without syntactic sugar

```

* Class interaction

```rb

class Battleship
    def initialize(n)
        @player = Player.new # create new instance of Player
        @board = Board.new(n) # create new instance of board
        @remaining_misses = @board.size / 2
    end

    def turn
        pos = @player.get_move
        @remaining_misses -= 1 if !@board.attack(pos)
        @board.print
        puts "#{@remaining_misses} remaining misses"
    end
end

```

```rb
attr_reader :name

# is equivalent to the below
    def name
        @name
    end

attr_writer :age

# is equivalent to the below
    def age=(value)
        @age = value
    end

```

