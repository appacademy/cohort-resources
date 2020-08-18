require 'singleton'

class Farm
    attr_accessor :enclosures
    def initialize(animals)
        @animals = animals
        not_animal = NullAnimal.instance # call .instance for singleton
        @enclosures = Array.new(8,not_animal)
    end

    def each_animal(&blk)
        @animals.each(&blk)
    end

    def relocate(animal,pos)
        @enclosures[pos] = animal
    end

end

module Flyable
    def fly
        puts "#{name} can fly! WOW!"
    end
end

class Animal
    def initialize(name,pos)
        @name = name
        @pos = pos
    end

    def move(distance)
        new_pos = @pos + distance
        puts "#{@name} #{movement} from #{@pos} to #{new_pos}"
    end

    def make_noise
        puts "#{@name} #{noise}!!!"
    end

    def movement
        ''
    end

    def noise
        raise "You need to make this method"
    end
end

class NullAnimal < Animal
    include Singleton

    def initialize # needed this to satisfy conditions for the parents initialize
        super('',0)
    end

    def noise
        '...'
    end
end

class Pig < Animal
    include Flyable # porkchop.fly => makes an instance method
    # extend Flyable # Pig.fly => makes a class method
    def initialize(name,pos,color)
        super(name,pos)
        # super() => this is how you would do it if you wanted to pass no args to the parent
        @color = color
    end

    def movement
        'trots'
    end

    def noise
        'oinks'
    end

    def greet(other_pig)
        puts "#{name} and #{other_pig.name} snout boop"
    end

    protected # allows an explicit receiver of the same class type
    attr_reader :name, :pos

    private # does not allow an explicit receiver
    attr_writer :name, :pos
end
  
class Narwal < Animal

    def noise
        'bloops'
    end

    def movement
        'swims'
    end

end

class Ostrich < Animal

    def noise
        'reeeee'
    end

    def movement
        'charges'
    end

end

jerry = Ostrich.new('Jerry',0)
# jerry.reeee
# jerry.charge(10)

seacorn = Narwal.new('Seacorn',0)
# seacorn.bloop
# seacorn.swim(10)

porkchop = Pig.new('Porkchop',0,'Purple')
# porkchop.oinks
# porkchop.trots(10)

# napolean = Pig.new('Napolean',2)
# napolean.greet(porkchop)

farm = Farm.new([jerry,seacorn,porkchop])

# farm.each_animal do |animal|
#     animal.make_noise
# end

farm.relocate(porkchop,1)
farm.enclosures[1].make_noise

farm.enclosures[2].make_noise
