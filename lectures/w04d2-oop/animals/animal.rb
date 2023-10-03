class Animal
  def initialize(name)
    p 'inside Animal#initialize'
    @name = name
  end

  def eat(food)
    puts "*#{name} eats the #{food}*"
  end

  protected
  attr_reader :name
end

# animal_one = Animal.new('George')
# animal_one.eat('pizza')