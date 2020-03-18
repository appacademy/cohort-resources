require_relative 'attr_accessor_lite'
require_relative 'pet'

class Cat < Pet
  attr_accessor_lite :color, :breed

  def initialize(breed, color)
    @breed = breed
    @color = color
    Cat.all_pets_1 << self
    Pet.all_pets_2 << self # self.class => Cat
  end

  def color
    debugger
    @color
  end
end