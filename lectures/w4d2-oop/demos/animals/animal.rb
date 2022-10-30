require_relative 'walkable'
class Animal
    include Walkable
    def initialize(name)
        @name = name
    end

    def eat(food)
        puts "*#{name} eats the #{food}*"
    end

    def walk
        puts "*#{name} is walking"
    end

end