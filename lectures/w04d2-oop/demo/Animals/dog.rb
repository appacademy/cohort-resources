require_relative "animal.rb"
# require_relative "walkable.rb"

class Dog < Animal

  # include Walkable
  # NOTE: walkable is included in animal class, so we don't need to include it here

  # def initialize(name)
  #   @name = name
  # end

  def introduce
    puts "#{name} bork bork"
  end

  def fetch(item)
    puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
  end

  # def eat(food)
  #   puts "*#{self.name} eats the #{food}*"
  # end

  def sniff(other_dog)
    puts "*#{name} sniffs #{other_dog.name}'s butt. interesting.*"
  end

  # protected
  # attr_reader :name

end