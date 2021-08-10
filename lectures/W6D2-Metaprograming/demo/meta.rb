require 'byebug'

# <Class:0x093754957439hfurje9387> @name = Pet
# Class.new('Pet')

class Pet
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def self.add_pet
    @@total_pets ||= 0
    @@total_pets += 1
  end

  def self.total_pets
    @@total_pets
  end

end


class Cat < Pet
  def initialize(name)
    super(name)
  end
end


class Dog < Pet
  puts self # self in here is the Dog class

  def self.doggie_things
    puts self # self in here is the Dog class, inside a class method, self is the class
  end

  def who_am_i?
    puts self # self is the dog instance
  end

  def self.record_dog_birth(dog)
    @all_dogs ||= []
    add_pet # self.add_pet
    @all_dogs << dog
  end

  def self.all
    @all_dogs.each { |dog| puts dog.name }
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"

    self.class.record_dog_birth(self)
  end

  def do_this_then_that(this, that)
    self.send(this) # takes in a method => self.this => self.eat
    self.send(that) # takes in a method => self.that => self.sleep
  end

  def do_this_with_args(this, *args)
    self.send(this, *args) # => self.juggle('Knife', 5)
  end

  def sleep
    puts "#{name} is sleeping!"
  end

  def eat
    puts "#{name} is eating!"
  end

  def drink
    puts "#{name} is drinking!"
  end

  # def trick
  #   puts "BACK FLIP!!"
  # end

  # def juggle(thing, num)
  #   num.times do
  #     puts "juggling #{thing}!"
  #   end
  # end


  def self.create_trick(*trick_names)
    # self => Dog
    trick_names.each do |trick_name| # backflip
      # self => Dog
      define_method(trick_name) do |num = 1|
        # self => dog instance
        num.times do
          puts "#{trick_name}ing"
        end
      end
    end
  end

  private

  attr_reader :secret

  def tell_my_secret
    puts "My secret is: #{@secret}"
  end
end

# def self.my_attr_reader(*method_names) # as many method names as can be, passed in as symbols
  # For each method name...
  # define a method with that name that ... do
  # grabs the instance varialbe of that same name and returns it
# end

