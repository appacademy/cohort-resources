require_relative 'walkable'

class Robot
  include Walkable

  def initialize(name)
    @name = name
  end

  private
  attr_reader :name
end

robot_one = Robot.new('Bender')
robot_one.walk