require_relative 'slideable'
require_relative 'piece'

class Bishop < Piece
  include Slideable

  def symbol
    color == :black ? '♝' : '♗'
  end

  def move_dirs
    DIAGONAL_DIRS
  end
end

b = Bishop.new(:white, [0,2], 'fake_board')
p b.move_dirs
# puts and print both call #to_s
# p calls #inspect