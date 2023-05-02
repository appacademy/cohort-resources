require 'byebug'

class Pet
  def initialize(name)
    @name = name
    self.class.add_pet
  end

  def self.add_pet
    @@total_pets ||= 0
    @@total_pets += 1
    # specific to the class that is using it
  end

  def self.total_pets
    @@total_pets
  end
end

class Dog < Pet
  puts self # nothing? nope its Dog

  def self.doggie_things
    # Dog.doggie_things
    puts self # Dog
  end

  def who_am_i?
    puts self # <Dog #12845345425 @name='doggy'>
  end
  
  # def method_missing(method_name, *args)
  #   self.class.define_method(method_name) do 
  #     puts "#{method_name}ing!"
  #   end
  #   send(method_name)
  # end

  def initialize(name)
    # puts self # <Dog #12845345425 >
    super(name)
    @secret = "I'm a goat in disguise"
    # Dog.add_pet
  end


  def self.create_tricks(*trick_names)
    p self # Dog
    trick_names.each do |trick_name|
      p self # Dog
      define_method(trick_name) do |n = 1|
        # code being called by a dog instance
        p self # Dog instance
        n.times do
          puts "#{trick_name}ing!"
        end
      end
    end
  end

  def sleep
    puts "sleeping!"
  end

  def eat
    puts "eating!"
  end

  def drink
    puts "drinking!"
  end

  def trick
    puts "BACK FLIP!!"
  end

  def do_this_then_that(this, that)
    self.send(this) # some dog instance calling whatever method 'this' is
    self.send(that)
  end

  def do_this_with_args(this, *args)
    # send can accept any number of arguments, the first is the method, the rest are args passed into the method
    self.send(this, *args) # [arg1, arg2, arg3,...] => arg1, arg2, arg3
  end

  def juggle(thing, num)
    num.times do
      puts "juggling #{thing}!"
    end
  end

  private

  attr_reader :secret

  def tell_secret
    puts "My secret is: #{@secret}"
  end

  def self.my_attr_reader(*method_names)
    # iterate over the names
    # define a method for each name
    # return instance variable (use instance_variable_get)
  end
end