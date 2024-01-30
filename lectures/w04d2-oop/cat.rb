require_relative 'animal'
# require_relative 'walkable'

class Cat < Animal 
  # include Walkable
  attr_reader :name, :fur_color

  def initialize(name, fur_color)
    # @name = name
    # super # super is grabbing all args and passing it into parents initialize

    # super() # no args

    super(name) # name is passed to parent class' initialize method
    @fur_color = fur_color # you need to create the local i var 
  end

  def introduce
    puts "#{name} meow"
  end

  def eat(food)
    puts "*#{name} eats the #{food}*"
  end

  # private
  # attr_reader :name
end

tom = Cat.new("tom", "orange")
p tom
p tom.fur_color
# p tom.eat("fish")
# p tom.walk