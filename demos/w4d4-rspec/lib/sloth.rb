DIRECTIONS = ['north', 'south', 'east', 'west']

class Sloth
  attr_reader :name, :food, :drinks
  
  def initialize(name)
    @name = name
    @food = []
    @drinks = Hash.new(0)
  end

  def eat(food)
    food.bitten
    @food << food
    food
  end

  def run(direction)
    raise ArgumentError if !DIRECTIONS.include?(direction)
    "I am climbing in #{direction}!!"
  end

  def drink(type, amt)
    drinks[type] += amt
  end

  private

  def secret_sloth
    'shh'
  end
end