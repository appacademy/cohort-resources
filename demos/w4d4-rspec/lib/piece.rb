class Piece 
  attr_reader :color, :board
  attr_accessor :pos

  def initialize(color, board, pos)
    raise 'Invalid color' unless [:white, :black].include?(color)
    raise 'Invalid pos' unless board.valid_pos?(pos) 
    @color = color 
    @pos = pos 
  end

  def symbol
    raise NotImplementedError
  end

  def to_s
    " #{symbol} "
  end

  def empty?
    false 
  end

end