require_relative "walkable"

class Animal

  include Walkable

  def initialize(name)
    puts "hello world"
    @name = name
  end

  def eat(food)
    puts "*#{name} eats the #{food}*"
    # trick = "give paw"
    # puts "*#{name} eats the #{food}*"
    # puts "#{name} knows #{trick}"

  end

  private 
  attr_reader :name 

end