require_relative "walkable"

class Robot
    include Walkable
    def initialize(name)
        @name = name
    end
    private
    attr_accessor :name

end

p robo = Robot.new("Robo")
robo.walk
