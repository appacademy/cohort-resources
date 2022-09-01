class Piece

  attr_reader :color, :pos

  def initialize(color, board, pos)
    raise "Invalid color" unless %i(white black).include?(color)
    raise "Invalid pos" unless board.valid_pos?(pos)
    @color = color
    @pos = pos
    @board = board
  end

  def pos=(new_pos)
    @pos = new_pos
  end

  def to_s
    '♕'
  end

  def empty?
    false
  end
  
end

class Board
  def initialize
    raise 'board is broken'
  end
end