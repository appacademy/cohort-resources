require "byebug"
class Board
​
  def self.print_grid(grid)
    grid.each do |row|
      puts row.join(" ")
    end
  end
​
  attr_reader :size
​
  def initialize(n)
    @grid = Array.new(n) { Array.new(n, :N) }
    # @grid.each_with_index do |row, row_idx|
    #   row.each_index do |col_idx|
    #     @grid[row_idx][col_idx] = :N
    #   end
    # end
​
    @size = n * n  # 10 x 10 means there are 100 elements
  end
​
  # instance method that instances of board can call
  def [](pos)
    row, col = pos # row = pos[0] col = pos[1]
    @grid[row][col]
  end
​
  # my_board = Board.new(10)
  # my_board[[0, 0]]
  # my_board.[]([0, 0])
​
  # instance method that board instance can call
  def []=(pos, val)
    row, col = pos
    # row, col = [6, 4]
    # row == 6
    # col == 4
    @grid[row][col] = val
  end
​
  # my_board = Board.new(10)
  # my_board[[0, 0]] = :banana
  # my_board.[]=([0, 0], :banana)
​
​
  def num_ships
    # this won't work
    # @grid is an array instance
    # @grid[ [0, 0] ] = :banana
    # @grid[pos] = :banana
    # end notes above
​
    count = 0
    @grid.each do |row|
      row.each do |el|
        count += 1 if el == :S
      end
    end
​
    count
  end
​
  def attack(pos)
    # we are calling the board instance bracket method
    # my_board.attack([0, 0])
    if self[pos] == :S
      self[pos] = :H # we are calling our board instance bracket-equals method
      print 'you sunk my battleship' # If print spec is passing: Board#print, self.print("you sunk my battleship")
      # Kernel::print "you sunk my battleship"
      # puts "you sunk my battleship"
​
      # setters, you must have an explict self, aka self.grid = some value
      # brackets, you must have an explicit self, aka self[[0, 0]], or self[[0, 0]] = some value
      # other instance methods, the self can be implicit
      true
    else
      self[pos] = :X
      false
    end
  end
​
  def place_random_ships
    ship_limit = @size * 0.25
    count = 0
​
    while count < ship_limit
      row_idx = rand(Math.sqrt(@size))
      col_idx = rand(@grid.length)
      pos = [row_idx, col_idx]
      if self[pos] != :S
        self[pos] = :S
        count += 1
      end
    end
​
    count
  end
​
  def hidden_ships_grid
    @grid.map do |row|
      row.map do |el|
        if el == :S
          :N
        else
          el
        end
      end
    end
  end
​
​
  def cheat
    Board.print_grid(@grid)
    # self.class.print_grid(@grid)
    # we are in an instance method #cheat
    # my_board.cheat
    # self refers to the instance of the board (aka my_board)
    # self.class => Board
    # Board.print_grid(@grid)
  end
​
  def print
    Board.print_grid(hidden_ships_grid)
  end
​
  # def to_s
  #   "banana"
  # end
​
  # attr_reader :grid
  def grid
    @grid
  end
​
  # attr_writer :grid
  def grid=(new_grid)
    @grid = new_grid
  end
​
  def test_stuff
    # This will work
    p "Referring to variable directly"
    p @grid
    p ""
​
    # THIS WILL WORK
    p "Calling the grid GETTER method without self:"
    p grid
    p ""
​
    # THIS WILL WORK
    p "Calling the grid GETTER method with self:"
    p self.grid
    p ""
​
    # THIS WON'T WORK
    p "Calling the grid SETTER method without self"
    p grid = "banana" # set a local variable called grid
    p @grid
    p ""
​
    # THIS WILL WORK
    p "Calling the grid SETTER method with self"
    p self.grid = "banana"
    p @grid
    p ""
​
    # Bracket you must you explicit self
​
    # For other instance methods not listed above, behaves like getter
    # WORKS
    self.grid = Array.new(2) { Array.new(2, :S)}
    p "Calling num_ships without self:"
    p num_ships
    p ""
​
    # WORKS
    p "Calling num_ships with self:"
    p self.num_ships
    p ""
  end
​
end
