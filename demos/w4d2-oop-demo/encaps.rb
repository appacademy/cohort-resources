require 'byebug'
require 'singleton'

class BrokenLegError < StandardError; end

module My_Enumerable
    def each
        raise NoMethodError
    end

    def any?(&blk)
        self.each do |ele|
            return true if blk.call(ele)
        end
        false
    end
end


class Farm
    include My_Enumerable
    
    def initialize(animals)
        @animals = Array.new(10) { NullAnimal.instance }
        animals.each_with_index do |animal, idx|
            @animals[idx] = animal
        end
    end
    
    def each(&blk)
        i = 0
        while i < @animals.length
            blk.call(@animals[i])
            i += 1
        end
    end
end

class Animal
    attr_accessor :name, :pos, :movement, :noise
    
    def initialize(name, pos)
        @name = name
        @pos = pos
        @movement = 'moves'
        @noise = 'noises'
    end
    
    def move(distance = 1)
        new_pos = pos + distance
        str = "#{name} #{movement} from #{pos} to #{new_pos}."
        puts str
        @pos = new_pos
        str
    end
    
    def make_noise
        puts "#{name} #{noise}. So loud."
    end
end

class NullAnimal < Animal
    include Singleton

    def initialize

    end

    def move(*stuff) # * allows this method to take any number of args

    end

    def make_noise

    end
end

class Horse < Animal
    attr_accessor :broken

    def initialize(name, pos)
        @name = name
        @pos = pos
        @movement = 'gallops'
        @noise = 'neighs'
        @broken = false
    end

    def break_leg
        self.broken = true
        puts "Didn\'t see that hole."
    end

    def heal_leg
        self.broken = false
        puts "Thank goodness for modern medicine."
    end

    def move(distance)
        raise BrokenLegError.new('Oi, I\'ve broken my leg.') if broken
        rescue BrokenLegError => e # e is the instance of the error object that was raised
            puts e.message
            heal_leg
            retry
        else
            super
        ensure
            make_noise
    end

    # protected
    # attr_accessor :name, :pos, :movement, :noise
end

class Dog < Animal
    def initialize(name, pos)
        super
        @movement = 'runs'
        @noise = 'barks'
    end

    def move(banana = 1)
        str = super # super has a return value
        str += " So fast."
        puts str
    end

    def rename(new_name)
        self.name = new_name
    end

    def greet(other_dog)
        puts "#{other_dog.name} and #{name} greet each other."
    end

    # protected
    # private == not allowed to call these methods with an explicit receiver
    # except for setters

    # protected == can call with an explicit receiver 
    # if it is self or any instance of the same class
    # attr_accessor :name, :pos, :movement, :noise
end

boxer = Horse.new('Boxer', 11)
boxer.break_leg
boxer.move(-5)
# boxer.make_noise

jesse = Dog.new('Jesse', 5)
fido = Dog.new('Fido', 6)
generic = Animal.new('Gen', 5)
# generic.move(-5)
my_stable = Farm.new([boxer, fido, jesse])

# Good (Polymorphism lets us do this)
# # my_stable.each { |animal| animal.make_noise }
# my_stable.each(&:make_noise) # same as line above
# puts '------'
# # my_stable.each(&:move) # same as line above
# my_stable.each { |animal| animal.move(2) }
# puts '------'
# puts my_stable.any? { |animal| animal.is_a? Dog }
# puts '------'
# my_stable.each { |animal| puts animal.object_id }

# Not ideal
# my_stable.each do |animal|
#     case animal
#         when Dog
#             animal.bark
#         when Horse
#             animal.neigh
#     end
# end

# jesse.move(9)
# jesse.make_noise
# jesse.greet(fido)

# puts boxer.name
# jesse.rename('Bob')
# jesse.bark
# fido.greet(boxer)

# p fido.methods