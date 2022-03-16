require_relative 'piece'
require_relative 'slideable'

class Queen < Piece
  include Slideable

  def symbol
    '♛'.colorize(color)
  end

  protected

  def move_dirs
    horizontal_and_vertical_dirs + diagonal_dirs
  end
end