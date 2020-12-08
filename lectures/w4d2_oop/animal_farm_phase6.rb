require "byebug"
require "singleton"
#Object Oriented 

class Farm 
  attr_reader :enclosure

  def initialize(animals)
    @animals = animals
    not_animal = NullAnimal.instance # call and point to NullAnimal instance 
    @enclosure = Array.new(8, not_animal) #made an enclosure with no animals inside of it
  end

  def each_animal(&blk)
    @animals.each(&blk)
  end

  def relocate(animal,pos)
    @enclosure[pos] = animal 
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
    puts "#{self.name} #{self.noise}!!!"
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
end

module Flyable 
  def fly
    puts "#{name} can fly ! WOOOOOOwww!"
  end
end

class Puppy < Animal
  extend Flyable
  
  def initialize(name,pos, color)
    super(name,pos) # this works
    @color = color
    # super this works
    # super() this does not work
    # @name = name
    # @pos = pos
  end

  # def make_noise
  #   puts "#{@name} Yelps"
  # end

  # def scrambles
  #   puts "#{@name} Scrambles"
  # end

  def movement
    "scrambles"
  end

  def noise
    "Yelps"
  end

  def greet(other_pup)
    puts "#{name} and #{other_pup.name} snif and tackle"
  end

  protected # allows an explicit receiver of the same class type
  attr_reader :pos, :name

  private # does not allow an explicit receiver
  attr_writer :name, :pos

end

class Bear < Animal
  def initialize(name,pos)
    super
    # @name = name 
    # @pos = pos
  end

  # def make_noise 
  #   puts "#{@name} Roars"
  # end

  # def motorcycles
  #   puts "#{@name} motorcycles"
  # end

  def noise 
    "Roars"
  end

  def movement 
    "motorcyles"
  end

end

# titus = Puppy.new("Titus", 0)
# titus.yelp
# titus.scrambles

# misha = Bear.new("Misha", 0)
# misha.roars
# misha.motorcycles

# titus = Puppy.new("Titus", 0, "brown")
# Puppy.fly
# titus.fly
# misha = Bear.new("Misha", 0)
# titus.make_noise
# titus.move(10)

# obi = Puppy.new("Obi", 0)

titus = Puppy.new("Titus", 0, "brown")
misha = Bear.new("Misha", 0)
farm = Farm.new([titus, misha])

farm.enclosure[0].make_noise
farm.relocate(titus,0)
farm.enclosure[0].make_noise
