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

end



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






