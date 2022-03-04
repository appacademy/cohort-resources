require_relative "walkable"

class Animal
  include Walkable 
  # can have multiple modules

  def initialize(name)
    @name = name
  end

  def walk
    # super
    puts "overwrite"
  end
  
  def eat(food)
    puts "*#{name} eats the #{food}*"
  end

  private
  attr_reader :name
  
end
