require_relative 'stepable'

class Knight
  include Stepable

  def move_diffs
    [[1,2],[2,1],[-1,2],[-2,1],[1,-2],[2,-1],[-1,-2],[-2,-1]]
  end
end