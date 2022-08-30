require_relative "walkable"

class Robot
    include Walkable

    def initialize(name)
        @name = name
    end


    private
    attr_reader :name

end

r2 = Robot.new("R2D2")
r2.walk