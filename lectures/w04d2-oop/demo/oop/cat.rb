require_relative "animal"

class Cat < Animal
  attr_reader :fur_color

  def initialize(name, fur_color)
    # super() # doesnt work - not enough args
    # super # doesnt work - too many args
    super(name) # works :) one arg for super class method
    @fur_color = fur_color
  end

  def introduce
    puts "#{name} meows with #{fur_color} fur"
  end

  def something
    p super + 7
  end

end

biscuit = Cat.new("biscuit", "yellow rainbow")
biscuit.walk
biscuit.eat("salami")