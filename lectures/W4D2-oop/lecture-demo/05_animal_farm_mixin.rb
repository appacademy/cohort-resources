class Animal

  def initialize(name, position)
    @name = name
    @position = position
  end

  def make_noise
    puts "#{name} #{self.noise}"
  end

  def moves(new_pos)
    puts "#{name} #{self.movement} from #{position} to #{new_pos}"
  end

end

module Flyable

  def fly
    puts "#{name} can fly!! Woo-hoooo!!!"
  end
  
  def crash
    puts "Oh no! I have crashed :_("
  end
  
end

class Puppy < Animal
  # include Flyable # adds Flyable methods as isntance methods
  extend Flyable # adds Flyable methods as class methods

  def initialize(name, position)
    super(name, position) # passes name and position to Animal#initialize
  end

  def noise # alternatively, these could be instance variables
    "yelps"
  end

  def movement
    "scrambles"
  end
  
  def greets(other_puppy)
    puts "#{self.name} and #{other_puppy.name} sniff and tackle"
  end
  
  # protected
  attr_accessor :name
  
  # private
  attr_accessor :position
end

class Bear < Animal

  def initialize(name, position)
    super  # shortcut for super(name, position)
  end

  def noise
    "roars"
  end

  def movement
    "motorcycles"
  end

  # private
  attr_reader :name, :position
end

class Duck < Animal

  def initialize(name, position)
    super
  end

  def noise
    "quacks"
  end

  def movement
    "waddles"
  end

  private
  attr_reader :name, :position
end

class Farm

  def initialize(animals) # an array is still 1 argument
    @animals = animals
  end

  def animals_each(&prc) # accepts a block, converts to a proc
    @animals.each(&prc) # converts the proc BACK to a block to send to .each
  end

end

snoopy = Puppy.new("Snoopy", 0)
lola = Puppy.new("Lola", 0)
alvin = Bear.new("Alvin", 0)

farm = Farm.new([snoopy, lola, alvin])
# farm.animals_each do |animal|
#   animal.make_noise # we can call this bc ALL animals have a make_noise function
#   puts " and then "
#   animal.moves(7)
# end

# snoopy.fly
# snoopy.crash
Puppy.fly
Puppy.crash