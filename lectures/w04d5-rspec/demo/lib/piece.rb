class Piece
  attr_reader :color, :board
  attr_accessor :pos

  def initialize(color, pos, board)
    raise 'Invalid color' unless [:white, :black].include?(color)
    raise 'Invalid pos' unless board.valid_pos?(pos)
    @color = color
    @pos = pos
    @board = board
  end

  def symbol
    raise NotImplementedError.new
  end

  def to_s
    symbol
  end
end