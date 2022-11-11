class Piece

  attr_reader :color
  attr_accessor :pos

  def initialize(color, board, pos)
    raise "Invalid color" unless [:white, :black].include?(color)
    raise "Invalid pos" if board.valid_pos?(pos) == false 

    @color = color
    @board = board
    @pos = pos
  end

  def symbol 
    raise NotImplementedError
  end

  def empty? 
    false
  end


end