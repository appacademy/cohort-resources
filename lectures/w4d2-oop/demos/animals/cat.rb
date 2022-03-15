require_relative "animal"

class Cat < Animal

  def initialize(name, fur_color)
    super(name)
    @fur_color = fur_color
  end

  def introduce
    puts "#{name} meow"
  end

end

p felix = Cat.new("Felix", "black")
felix.introduce
felix.eat("cat food")
felix.walk