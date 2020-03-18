require_relative 'attr_accessor_lite'
require_relative 'pet'

class Dog < Pet
  attr_accessor_lite :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
    self.class.all_pets_1 << self
    self.class.all_pets_2 << self
  end

  def bark
    puts "bark!"
  end

  def woof 
    puts "woof!"
  end

  def meow
    puts "meow?"
  end

  def make_noise
    puts "What noise would you like #{self.name} make?"
    noise = gets.chomp
    self.send(noise) # noise => 'bark' || 'woof' || 'meow'

    # if noise == 'bark'
    #   self.bark
    # elsif noise == 'woof'
    #   self.woof
    # elsif noise == 'meow'
    #   self.meow
    # end
  end

  def method_missing(method_name, *args)
    if "some condition"
      puts "Sorry, #{self.name} cannot #{method_name} :("
    else
      super
    end
  end
end