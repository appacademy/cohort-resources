require_relative "animals"
# require_relative "walkable"

class Horse < Animal
    # include Walkable
    
    def initialize(name, nickname)
        super(name)
        @nickname = nickname
    end


    def run
        puts "#{self.name} is running"
    end




end

h = Horse.new("Spirit", "Fast boi")
# p h.name
# h.walk
h.run