require 'byebug'
# Modules/Mixins

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

class Farm 

  def initialize(animals)
    @animals = animals 
  end

  def each_animals(&blk)
    @animals.each(&blk)
  end

end 

alvin = Bear.new("Alvin", 0)
snoop = Puppy.new("Snoop", 0, "caramel")
mocha = Puppy.new("Mocha", 0, "brown")

# snoop.fly 
# alvin.fly 

Puppy.crash
snoop.crash