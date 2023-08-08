require_relative "walkable.rb"

class Animal
  def initialize(name)
    @name = name
  end

  def eat(food)
    puts "*#{self.name} eats the #{food}*"
  end

  # can use in sniff for all animals
  protected
  attr_reader :name

end

class Dog < Animal
  # equivalent to having the method (or methods) from walkable written inside here
  # can have multiple modules
  include Walkable # instance methods
  # extend Walkable # class methods

  def introduce
    puts "#{name} bork bork"
  end

  def fetch(item)
    puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
  end

  def sniff(other_dog)
    puts "*#{name} sniffs #{other_dog.name}'s butt. interesting.*"
  end

  # def walk
  #   puts "#{name} is walking"
  # end


  # protected
  # attr_reader :name

end

class Cat < Animal

  def initialize(name, fur_color)
    # @name = name # this is equivalent
    super(name) # initialize(name, fur_color)
    @fur_color = fur_color
  end

  def introduce
    puts "#{name} meow"
  end

  # cant use in sniff
  # protected
  # attr_reader :name

end

class Robot
  include Walkable
  def initialize(name, data)
    @name = name
    @data = data
  end

  # def walk
  #   puts "#{name} is walking"
  # end

  def destroy_all_humans
    puts "I am doing it"
  end

  protected
  attr_reader :name
  
end

