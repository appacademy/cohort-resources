class Piece
  attr_reader :color
  attr_accessor :pos

  def initialize(color, pos, board)
    raise 'color must be white or black' unless [:white, :black].include?(color)
    raise 'invalid position' unless board.valid_pos?(pos)
    @color = color
    @pos = pos
    @board = board
  end
end