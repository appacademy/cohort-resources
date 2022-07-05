require_relative 'animal.rb'
require_relative 'puppy.rb'

class Kitten < Animal
    include Cuddleable
    def greet(other_kitten)
        puts "#{name} and #{other_kitten.name} hiss and ignore each other"
        # other_pup.pos = 56
    end

    # private # no access from outside the class definition, also prevents calling with explicit receiver (except writers - has to be explicit self)
    
end

# whiskers = Kitten.new("Mr. Whiskers")
# olga = Kitten.new("Olga")
# whiskers.meow
# whiskers.scamper(5)
# whiskers.ignore(olga)