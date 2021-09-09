class Board
  attr_reader :size
  # attr_writer :size
  # attr_accessor :size # creates both

  def initialize(n)
    raise "n is too small!" if n < 3
    @grid = Array.new(n) { Array.new(n, :N)}
    @size = n * n
  end

  # def size # reader method
  #   @size
  # end

  # def size=(new_size) # writer method
  #   @size = new_size
  # end

  def [](pos) # pos == array
    # row = pos[0]
    # col = pos[1]
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, val)
    row, col = pos # row = pos[0], col = pos[1]
    @grid[row][col] = val
  end


  def attack(pos) # pos == [3,6]
    if self[pos] == :S # you hit a ship
      self[pos] = :H # indicates a hit
      puts "you sunk my battleship!! >:("
      return true
    else # you missed lol
      self[pos] = :X # indicates a miss
      return false
    end
  end

  def ask_for_guess
    print "Please guess where a ship is, ex: 1,2: "
    guess = gets.chomp.split(",").map(&:to_i) # removes a newline character (\n) => "1,2"
    return guess
  end
  
end

board = Board.new(10) # create a board instance <Board:0x9802379748h @grid=[[...]] @size=100>
board.size # 100
board = Board.new(1)
