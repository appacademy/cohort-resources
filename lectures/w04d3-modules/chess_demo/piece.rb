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
    symbol.to_s
  end

  def symbol
    color == :white ? 'W' : 'B'
  end

  def empty?
    false
  end
end

if __FILE__ == $PROGRAM_NAME
  p "Here I am in the piece.rb file"
end