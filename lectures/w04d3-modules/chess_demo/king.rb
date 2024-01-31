require_relative 'piece'

class King < Piece
  def symbol
    color == :black ? '♚' : '♔'
  end

  def move_diffs
    [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]
  end
end