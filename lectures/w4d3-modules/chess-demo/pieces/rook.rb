require_relative 'piece'
require_relative 'slideable'

class Rook < Piece
  include Slideable

  def symbol
    '♜'.colorize(color)
  end

  protected

  def move_dirs
    # return the directions in which a rook can move
    # a rook can move horizontally (across rows and columns)
  end
end
