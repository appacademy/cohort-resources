require_relative 'animal.rb'

class Dog < Animal
  def initialize(name)
    @name = name
  end

  def introduce
    puts "#{name} bork bork"
  end

  def fetch(item)
    puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
  end

  # def eat(food)
  #   super(food)
  #   puts "I WANT PIZZA AND STEAK!!!!!!"
  # end

  def greet
    puts "HELLOOOO"
  end

  def sniff(other_dog)
    puts "*#{self.name} sniffs #{other_dog.name}'s butt. interesting.*"
  end
  
  def rename(new_name)
    #private methods have to be called implicitly EXCEPT for setters.  
    #private setters must be called explicitly to avoid creating local variables.
    self.name = new_name
  end

 

  # protected
  # private
  # attr_accessor :name
  # protected
  # def name
  #   @name
  # end
end

# outside class definition

shirley = Dog.new("shirley")
rocky = Dog.new("Rocky")
rocky.eat("fresh pet")
# p rocky.name

# rocky.walk


# rocky.fetch("ball")
# rocky.sniff(shirley)

# p shirley.name




# rocky.rename("rocco")
# rocky.introduce
# rocky.fetch("ball")
# rocky.eat("pizza")
# rocky.name
# rocky.eat