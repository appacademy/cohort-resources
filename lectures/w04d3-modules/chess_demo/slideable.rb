module Slideable
  def h_dirs
    [[1,0], [0,1], [-1,0], [0,-1]]
  end

  def d_dirs
    [[1,1], [1,-1], [-1,1], [-1,-1]]
  end

  def moves
    # expects a move_dirs method to be implemented in base class
    # returns an array of all possible moves for
    res =[]

    move_dirs.each do |dir|
      res += grow_unblocked_moves_in_dir(dir)
    end

    res
  end

  private
  def grow_unblocked_moves_in_dir(dir)
    dr, dc = dir
    res = []
    # remember that we have access to all of a piece's information
    new_pos = pos.dup
    loop do
      new_pos = [new_pos[0] + dr, new_pos[1] + dc]
      if board.valid_pos?(new_pos) && board[new_pos].empty?
        res << new_pos
      else
        return res
      end
    end
  end

  def move_dirs
    raise 'must be overwritten by base class'
  end
end