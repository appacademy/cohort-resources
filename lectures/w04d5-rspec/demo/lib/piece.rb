class Piece

  attr_reader :color, :pos

  def initialize(color, board, pos)
    raise "Invalid color" unless [:black, :white].include?(color)
    raise "Invalid position" unless board.valid_pos?
    @color = color
    @board = board
    @pos = pos
  end

  def pos=(value)
    raise "Invalid position values" unless value.length == 2
    @pos = value
  end

  def to_s
    'P'
  end

  def empty?
    false
  end
  
end

class Board
  def initialize
    raise 'error example'
  end
end