require_relative "animal"
# require_relative "walkable"

class Dog < Animal
  # include Walkable
  # def initialize(name)
  #   @name = name
  # end

  def introduce
    puts "#{name} bork bork"
  end

  def fetch(item)
    puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
  end

  def eat(food)
    puts "*#{self.name} eats the #{food}*"
  end

  def sniff(other_dog)
    puts "*#{name} sniffs #{other_dog.name}'s butt. interesting.*"
  end

  # private
  # attr_reader :name

end