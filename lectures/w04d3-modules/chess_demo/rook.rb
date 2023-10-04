require_relative 'piece'
require_relative 'slideable'

class Rook < Piece
  include Slideable

  def symbol
    color == :black ? '♖' : '♜'
  end

  def move_dirs
    h_dirs
  end
end