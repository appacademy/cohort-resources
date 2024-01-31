require_relative 'slideable'
require_relative 'piece'

class Rook < Piece
  include Slideable
  
  def symbol
    color == :black ? '♜' : '♖'
  end

  def move_dirs
    STRAIGHT_DIRS
  end
end

my_rook = Rook.new(:black,[0,0],'board')
p my_rook.move_dirs