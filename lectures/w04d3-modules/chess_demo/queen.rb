require_relative 'slideable'
require_relative 'piece'

class Queen < Piece
  include Slideable

  def symbol
    color == :black ? '♛' : '♕'
  end

  def move_dirs
    STRAIGHT_DIRS + DIAGONAL_DIRS
  end
end

my_queen = Queen.new(:white, [0,3], 'board')
p my_queen.move_dirs