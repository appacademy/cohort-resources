class Piece
  attr_reader :color, :position, :board
  
  def initialize(color, pos, board)
    raise 'Invalid color' unless [:white, :black].include?(color)
    raise 'Invalid position' unless board.valid_pos?(pos)
    @color = color
    @position = pos
    @board = board
  end

  def symbol
    nil
  end

  def to_s
    symbol
  end
end