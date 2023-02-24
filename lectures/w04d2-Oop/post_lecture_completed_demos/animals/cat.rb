require_relative 'animal'

class Cat < Animal
  attr_reader :name

  def initialize(name,fur_color)
    # @name = name
    puts "in cat class"
    # super()
    puts "in cat class"
    @fur_color = fur_color
  # introduce
  # walk
  end

  def introduce
    puts "#{name} meow"
  end

  # def eat(food)
  #   puts "*#{name} eats the #{food}*"
  # end

  # private
  # attr_reader :name
end


Cat.new("dolly","black")
