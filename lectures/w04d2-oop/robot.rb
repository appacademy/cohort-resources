require_relative "robot"

class Robot
  include Walkable ### from the module demo
  def initialize(name)
    @name = name
  end
  # def walk
  #   puts "*#{name} is walking*"
  # end
  private
  attr_reader :name
end

jake = Robot.new("jake")
jake.walk