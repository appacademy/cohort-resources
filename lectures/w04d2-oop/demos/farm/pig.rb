require_relative "farm"

class Pig < Animal
    def initialize(name, tail)
        @name = name
        @tail = tail
    end

    
end

porky = Pig.new("Porky", "Curly")

