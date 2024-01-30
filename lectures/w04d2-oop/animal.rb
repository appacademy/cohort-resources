# - super with no parentheses passes all arguments this method received to the superclass' method
# - super(arg) with specific arguments passes just the specified arguments to the superclass' method
# - super() with empty parentheses passes no arguments to the superclass' method
require_relative "walkable"


class Animal
  include Walkable ### from the module demo, comment out walk method
  def initialize(name)
    @name = name
  end
  def eat(food)
    puts "*#{name} eats the #{food}*"
  end
  # def walk
  #   puts "*#{name} is walking*"
  # end
  private
  # attr_reader :name
  def name
    @name
  end
end

