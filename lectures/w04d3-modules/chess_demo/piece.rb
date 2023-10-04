class Piece
  attr_reader :color, :board
  attr_accessor :pos

  def initialize(color, board, pos)
    @color = color
    @board = board
    @pos = pos
  end

  def inspect
    "#<Piece:#{object_id} @color=#{color} @pos=#{pos}>"
  end

  def to_s
    'P'
  end
end