require_relative 'animal'
require_relative 'walkable'

class Dog < Animal
  include Walkable

  def introduce
    puts "#{name} bork bork"
  end
  
  def fetch(item)
    puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
  end
  
  def sniff(other_dog)
    puts "*#{name} sniffs #{other_dog.name}'s butt. interesting.*"
  end

  attr_reader :name
end

dog_one = Dog.new('Fido')
dog_two = Dog.new('Spot')
# dog_one.introduce
# dog_two.fetch('stick')
# dog_two.eat('kibble')
# dog_one.sniff(dog_two)
dog_two.walk