require 'singleton'

module MyEnumerable
    def map(&blk)
        result = Array.new
        each do |el| ## note that this is calling #each inside our Farm class
            result << blk.call(el)
        end
        result
    end
end



class NullAnimal
    include Singleton

    def name
        ""
    end

    def move(delta)
        puts "*tumbleweed blows through an empty town*"
    end

    def make_noise
        puts "*eerie wind sound*"
    end
        
end

class Farm
    include MyEnumerable ## will be instance methods

    def initialize(animals)
        @animals = animals
    end

    def each(&blk)
        @animals.each(&blk)
    end

    
end


class Animal
    attr_reader :name

    def initialize(name, pos)
        @name = name
        @pos = pos
    end

    def move(delta)
        new_pos = @pos + delta
        puts "#{@name} #{movement} from #{@pos} to #{new_pos}."
        @pos = new_pos
    end

    def make_noise
        puts "#{@name} #{noise}."
    end

private
    def movement
        'moves'
    end

    def noise
        'makes noise'
    end
end

class Horse < Animal
    ## note the lack of an initialize method
    def initialize(name, pos)
        super
        @broken = false
    end

    def leg_broken?
        @broken
    end

    def break_leg
        @broken = true
        puts "I didn't see that hole!"
    end

    def heal_leg
        @broken = false
        puts "Thank goodness for health insurance."
    end

    def move(delta)
        if leg_broken?
            raise LegBrokenError, "I can't move, silly."
        end
        
        super
    end

    def movement
        'gallops'
    end

    def noise
        'neighs'
    end
end


class Pig < Animal
    def movement
        'trots'
    end

    def noise
        'oinks'
    end
end


class Dog < Animal
    def movement
        'runs'
    end

    def noise
        'barks'
    end
end

class LegBrokenError < StandardError; end


boxer = Horse.new('Boxer', 0)
clover = Horse.new('Clover', 3)
jessie = Dog.new('Jessie', 1)
snowball = Pig.new('Snowball', 2)
napoleon = Pig.new('Napoleon', 4)

snowball.move(-3)
clover.break_leg
begin
    clover.move(-2)
rescue LegBrokenError 
    clover.heal_leg
    retry
ensure
    clover.make_noise
end
jessie.make_noise
jessie.move(-2)
snowball.make_noise
snowball.move(-1)
napoleon.move(-2)
napoleon.make_noise

puts "----------------------"

my_farm = Farm.new([snowball,
                    NullAnimal.instance,
                    clover, jessie,
                    NullAnimal.instance,
                    napoleon,
                    boxer])
puts my_farm.map(&:name)

my_farm.each do |animal|
    animal.make_noise #no more type-checking logic
end
