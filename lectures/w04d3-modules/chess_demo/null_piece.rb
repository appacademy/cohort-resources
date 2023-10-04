require_relative 'piece'
require 'singleton'

class NullPiece < Piece
  include Singleton

  def initialize

  end

  def symbol
    " "
  end

  def moves
    []
  end

  def empty?
    true
  end
end