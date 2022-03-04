require_relative "walkable"

class Robot
  include Walkable # I want walkable - dont want introduce and eat
  
  def initialize(name)
    @name = name
  end

  private 
  attr_reader :name
end

data = Robot.new("data")
data.walk