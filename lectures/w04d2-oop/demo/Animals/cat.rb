require_relative "animal.rb"
require_relative "walkable.rb"

class Cat < Animal
  def initialize(name, fur_color)

    # @name = name
    super(name)
    @fur_color = fur_color
  end

  def introduce
    puts "#{name} meow"
  end

  def eat(food)
    # puts "*#{name} eats the #{food}*"
    # super(food)
    # puts "#{food} was yummy"
    # puts "#{name} does #{trick}"
  end

  # private
  # attr_reader :name
end