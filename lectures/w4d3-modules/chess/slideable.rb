module Slideable
    HORIZONTAL_AND_VERTICAL_DIRS = [
      [1,0],[-1,0],[0,1],[0,-1]
      ].freeze
  
    DIAGONAL_DIRS = [
        [1,1],[1,-1],[-1,1],[-1,-1]
      ].freeze
  
    def horizontal_and_vertical_dirs
      HORIZONTAL_AND_VERTICAL_DIRS
    end
  
    def diagonal_dirs
      DIAGONAL_DIRS
    end
  
    def moves # this is the goal
        # take the current position of the piece (@pos)
        # iterate through move_dirs
        # for each dir in move_dirs, call grow_unblocked_moves_dir(dx, dy)
        # shovel into a result array
    end
  
    private
  
    def move_dirs
      # subclass implements this
      raise NotImplementedError
    end
  
    def grow_unblocked_moves_in_dir(dx, dy)
      # given current position and direction, keep applying dx, dy
      # until no longer a valid move, at which point we return a result array
    end
  end