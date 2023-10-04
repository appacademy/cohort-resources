require_relative 'piece'
require_relative 'rook'
require_relative 'null_piece'

class Board
  def self.populate_rows(board)
    board.rows.each_with_index do |row, r|
      board.rows[r] = case r
        when 0
          row.map.with_index { |_, c| Piece.new(:white, board, [r, c]) }
        when 1
          row.map.with_index { |_, c| Piece.new(:white, board, [r, c]) }
        when 6
          row.map.with_index { |_, c| Piece.new(:black, board, [r, c]) }
        when 7
          row.map.with_index { |_, c| Piece.new(:black, board, [r, c]) }
        else
          row.map.with_index { |_, c| NullPiece.instance }
        end
    end
  end

  attr_reader :rows

  def initialize
    @rows = Array.new(8) { Array.new(8) }
    Board.populate_rows(self)
  end

  def [](pos)
    r, c = pos
    rows[r][c]
  end

  def []=(pos, val)
    r, c = pos
    rows[r][c] = val
  end

  def move_piece(start_pos, end_pos)
    piece = self[start_pos]

    raise 'no piece at start_pos' if piece.nil?
    raise 'end_pos is invalid' unless valid_pos?(end_pos)

    self[end_pos] = piece
    piece.pos = end_pos
    self[start_pos] = NullPiece.instance
  end

  def valid_pos?(pos)
    return false if pos.any? { |n| n < 0 || n > 7 }
    true
  end

  def render
    puts '  ' + (0...8).to_a.join(' ')
    rows.each_with_index do |row, r|
      puts "#{r} " + row.join(' ')
    end
  end
end

if __FILE__ == $PROGRAM_NAME
  b = Board.new
  b.render
  pos_a = [0,0]
  pos_b = [1,4]
  pos_c = [-1, 5]
  pos_d = [3, 9]
  p b[pos_b] = Rook.new(:white, b, pos_b)
  b.render
  p b[pos_b].moves
  b.move_piece(pos_b,[4,4])
  b.render
  p b[[4,4]].moves
end