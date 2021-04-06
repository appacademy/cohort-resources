require 'byebug'
require 'singleton' # this is a module
#Null Object and Singleton Patterns

class Animal 

    def initialize(name, pos)
        @name = name
        @pos = pos
    end

    def make_noise
        puts "#{name} #{noise}" 
    end

    def moves(new_pos)
        debugger
        puts "#{name} #{movement} from #{pos} to #{new_pos}"
    end

end

module Flyable
    def fly  
        puts "#{name} can fly! WOOOOOW"
    end

    def crash
        puts "oh no, I have crashed. :("
    end
end

class Puppy < Animal 
#   include Flyable
  extend Flyable

  def initialize(name, pos, coat_color)
    super(name, pos)
    @coat_color = coat_color
  end

  def noise 
    "yelps"
  end 

  def movement
    debugger
    "scrambles"
  end

  def greet(other_pup)
    puts "#{name} and #{other_pup.name} sniff and tackle"
  end

  protected # allows for explicit receiver in the class definition
  attr_reader :name

  private # does not allow for a explicit receiver, may only be called using implicit self
  attr_reader :pos

end

class Bear < Animal

  def initialize(name, pos)
    super
  end

  def noise
    "roars"
  end

  def movement
    "motorcycles"
  end

  private # does not allow for a explicit receiver, may only be called using implicit self
  attr_reader :name, :pos

  def fur 
    "brown"
  end

end

class NullAnimal < Animal 
    include Singleton
    attr_reader :name
    def initialize
        super("", 0)
    end

    def noise 
        "..."
    end

    def movement
        "..."
    end
end

class Farm 
  attr_reader :enclosure
  def initialize(animals)
    @animals = animals 
    not_animal = NullAnimal.instance
    @enclosure = Array.new(8, not_animal)
  end

  def each_animals(&blk)
    @animals.each(&blk)
  end

  def relocate(animal, pos)
    enclosure[pos] = animal
  end

end 

alvin = Bear.new("Alvin", 0)
snoop = Puppy.new("Snoop", 0, "caramel")
mocha = Puppy.new("Mocha", 0, "brown")

farm = Farm.new([alvin, snoop, mocha])
farm.enclosure[0].make_noise
farm.relocate(mocha, 0)
farm.enclosure[0].make_noise
