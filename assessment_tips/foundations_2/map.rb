
# Initialize a two-dimensional array with given dimensions 
#   such that each subarray is distinct in memory.
# Use attr_reader, attr_writer, attr_accessor, 
#   to deliberately allow access to instance variables.
# Define custom bracket methods #[], #[]= on a class.

class Map
  attr_reader :grid
  
  # initialize takes in a dimension n and sets @grid instance variable
  # equal to 2d array of length n such that each subarr is distinct in memory
  # and filled with :x
  def initialize(n)
    @grid = Array.new([]) #=> arrays not distince in memory
    @grid = Array.new(n) { Array.new(n, :x) }
  end

  # define custom bracket methods
  # syntactic sugar for this => self[pos]
  def [](pos)
    x, y = pos
    @grid[x][y] 
  end

  # define custom bracket methods
  # syntactic sugar for this => self[pos] = dog_name
  def []=(pos, dog_name)
    x, y = pos
    @grid[x][y] = dog.name
  end
end