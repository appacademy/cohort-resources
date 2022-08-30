require_relative "walkable"

class Animal
    include Walkable

    def initialize(name)
        @name = name
        # puts "hello from Animal"
    end

    # def initialize
    #     puts "hello from parent class"
    #     @name = "hello"
    # end

    def greet(other_animal)
        p "#{self.name} greets #{other_animal.name}" 
    end

    # def walk
    #     puts "#{@name} is walking"
    # end

    def name
        @name
    end

end

# a1 = Animal.new("Drogo")
# p a1.name
# a1.walk

