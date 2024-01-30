require 'byebug'

class Dog
  def initialize(name)
    @name = name
  end

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

  def rename(new_name)
    self.name = new_name # created a new variable 
    p name # marco 
    p self.name # marco
    debugger
  end

  protected 
  attr_accessor :name

end

mochi = Dog.new("mochi")
scooby = Dog.new("scooby")
mochi.introduce
mochi.fetch("ball")
mochi.eat("bone")
mochi.sniff(scooby)

# mochi.rename("marco")


# class Cat
#   def initialize(name)
#     @name = name
#   end

#   def introduce
#     puts "#{name} meow"
#   end

#   def eat(food)
#     puts "*#{name} eats the #{food}*"
#   end

#   private
#   attr_reader :name
# end






