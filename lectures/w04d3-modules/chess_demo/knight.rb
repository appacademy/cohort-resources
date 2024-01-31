require_relative 'piece'

class Knight < Piece
  def symbol
    color == :black ? '♞' : '♘'
  end

  def move_diffs
    [[3,1],[-3,1],[-1,3],[-1,-3],[1,3],[-1,3],[1,-3],[-1,-3]]
  end
end