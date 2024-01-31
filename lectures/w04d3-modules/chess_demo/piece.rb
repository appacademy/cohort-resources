class Piece
  attr_reader :color, :pos, :board

  def initialize(color, pos, board)
    @color = color
    @pos = pos
    @board = board
  end

  def to_s
    symbol
  end

  def empty?
    false
  end

  def valid_moves

  end

  def pos=(val)

  end

  def symbol
    " "
  end
end