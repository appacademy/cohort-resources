class Piece
  attr_reader :color
  attr_accessor :pos

  def initialize(color, pos, board)
    raise 'Invalid Color' unless [:white, :black].include?(color)
    raise 'Invalid Pos' unless board.valid_pos?(pos)
    @color = color
    @pos = pos
  end

  def symbol
    raise NotImplementedError, '#symbol needs to be written in sub class'
  end

  def to_s
    " #{symbol} "
  end

  def empty?
    false
  end


end