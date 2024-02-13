# class variables are accessible by all instances and are also inherited
require 'byebug'

class MyClass
  def self.my_attr_writer(*vars)
    # debugger
    vars.each do |var|
      define_method("#{var}=") do |val|
        instance_variable_set("@#{var}", val)
      end
    end
  end
end

class Dog < MyClass
  @info = 'something' # class instance variable

  def self.population
    @@population ||= 0
  end

  def self.create_tricks(*tricks)
    p self
    tricks.each do |trick|
      define_method(trick) do
        p self
        p "#{@name} #{trick}s"
      end
    end
  end

  my_attr_writer :name, :breed # creates #name=(val), #breed=(val)

  def initialize(name, breed)
    @name = name
    @breed = breed
    @@population += 1
  end

  def who_am_i
    p self
  end

  # def roll_over
  #   p "#{@name} rolls over"
  # end

  # def jump
  #   p "#{@name} jumps"
  # end

  # def bark
  #   p "#{@name} barks"
  # end

  # def shake
  #   p "#{@name} shakes"
  # end

  def say(something)
    p "#{@name} says #{something}"
  end

  def do_this_and_then_that(this, that)
    self.send(this)
    self.send(that)
  end

  private
  def tell_secret
    puts 'woof'
  end
end

Dog.population
fido = Dog.new('Fido', 'terrier')
spot = Dog.new('Spot', 'collie')
# fido.who_am_i
# Dog.doggie_things
# p fido.instance_variable_get('@breed')
# fido.instance_variable_set('@breed', 'Scottish Terrier')
# p fido.instance_variable_get('@breed')
# fido.send(:tell_secret)
# p fido.shake
# p fido.bark
# fido.send(:say, 'woof')
Dog.create_tricks(:juggle, :eat, :bark, :talk, :jump)
fido.talk
fido.name = "George"
p fido

# Ruby defines a variety of helpful metaprogramming methods
# `instance_variable_get` and `instance_variable_set`
