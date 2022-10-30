class Piece
  attr_reader :color, :board
  attr_accessor :pos

  def initialize(color, pos, board)
    raise Exception.new('Invalid color') unless [:black, :white].include?(color)
    raise RuntimeError.new('Invalid pos') unless board.valid_pos?(pos)
    @color = color
    @pos = pos
    @board = board
  end

  def symbol
    raise NotImplementedError
  end

  def empty?
    false
  end
end