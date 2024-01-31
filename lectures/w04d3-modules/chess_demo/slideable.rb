module Slideable
  STRAIGHT_DIRS = [[0,1],[1,0],[0,-1],[-1,0]]
  DIAGONAL_DIRS = [[1,1],[1,-1],[-1,-1],[-1,1]]

  def moves
    # this method requires that we have a #move_dirs method implemented by the base class
    # use current position, move_dirs, and board state to figure out all possible moves
    res = []
    move_dirs.each do |dir|
      res += grow_unblocked_moves_in_dir(dir)
    end
    res
  end

  def pos
    raise NotImplementedError.new
  end

  def board
    raise NotImplementedError.new
  end

  def move_dirs
    # this only runs if the base class does not overwrite
    raise NotImplementedError.new
  end

  private
  def grow_unblocked_moves_in_dir(dir)
    res = []
    r, c = pos
    dr, dc = dir
    new_pos = [r + dr, c + dc] # generate potential new position
    # return current res if new_pos is off the board
    # return current res if there is a piece of same color at new_pos
    # add new_pos to res and return if there is a piece of opposite color at new_pos
    # add new_pos to res and continue looping if new_pos is empty
  end
end

# it is not uncommon for modules to require that some functionality is already implemented in the base class