class Piece
  attr_reader :color
  attr_accessor :pos

  def initialize(color, board, pos)
    raise "Invalid color" unless %i(white black).include?(color)
    raise "Invalid pos" unless board.valid_pos?(pos)
    @color = color
    @pos = pos
  end

  def symbol
    raise NotImplementedError
  end

  def empty?
    false
  end

end

class Board

  def initialize
    raise "Board doesn\'t work :(((((("
  end

  def valid_pos?(pos)
    pos.all? {|coord| coord.between?(0,7) }
  end
  
end