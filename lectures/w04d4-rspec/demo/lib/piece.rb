class Piece
  COLORS = [:white, :black]
  attr_reader :color, :board, :pos
  # attr_accessor :pos

  def initialize(color, pos, board)
    raise 'Invalid color' unless COLORS.include?(color)
    @color = color
    @pos = pos
    @board = board
  end

  def pos=(new_pos)
    if board.valid_pos?(new_pos)
      @pos = new_pos
    else
      raise 'Invalid pos'
    end
  end
end