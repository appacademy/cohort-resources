require_relative './walkable'
# require 'enumerable'

class Robot
    include Walkable # is dependent on having a #name method
    include Enumerable # is dependent on having #each method

    def initialize(name)
        @name = name
        @parts = ['arm', 'leg', 'engine', 'oil']
    end

    def each(&prc) # this is not overwriting each
        parts.each(&prc)
    end

    private
    attr_reader :name
    attr_reader :parts
end

howie = Robot.new("Howie")
howie.walk
el = howie.map {|el| el.upcase}
p el