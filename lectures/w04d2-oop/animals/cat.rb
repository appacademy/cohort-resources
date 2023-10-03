require_relative 'animal'
require_relative 'walkable'

class Cat < Animal
  include Walkable

  def initialize(name, fur_color)
    p 'inside Cat#initialize'
    # the keyword `super` goes up one level and invokes
    # the method with the same name
    super(name)
    @fur_color = fur_color
  end

  def introduce
    puts "#{name} meow"
  end
end

cat_one = Cat.new('Ozzie', 'tortoise shell')
cat_one.introduce
cat_one.eat('salmon')
# cat_one.name
cat_one.walk