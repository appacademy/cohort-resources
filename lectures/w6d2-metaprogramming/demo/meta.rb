require 'byebug'

class Pet
  @@total_pets = 0

  def initialize(name)
    @name = name
  end

  def self.add_pet
    # @total_pets ||= 0
    # @total_pets += 1
    # @@total_pets ||= 0
    @@total_pets += 1
  end

  def self.total_pets
    # @total_pets
    @@total_pets
  end
  
end

class Dog < Pet
  puts self # it is class

  def self.doggie_things
    puts self # should be a class of Dog
  end

  def who_am_i?
    puts self # should be an instance Dog
  end

  def inspect
    puts "something else"
  end

  def method_missing(method_name, *args) # normal returns an error, overwrite to do something else
    # self.class.send(:define_method, method) do |*arguments|
    #   puts "#{method_name}ing!"
    # end 
    # self.class.create_tricks(method_name)
    # self.send(method_name, *args)
    puts "nope"
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    Dog.add_pet
  end

  def do_this_then_that(this, that) # (:sleep)
    self.send(this)
    self.send(that)
  end

  def do_this_with_args(this, *args)
    self.send(this, *args) # (method_name, arg1, arg2, arg3, ...)
  end

  def self.create_tricks(*trick_names) # (jump, fly, roll)
    # puts self # class
    trick_names.each do |trick_name|
      # puts self # same but gets called for every trick name
      define_method(trick_name) do |num = 1| # clifford.jump
        # puts self # instance
        num.times do
          # puts self # instance
          puts "#{trick_name}ing!" # "jumping!"
        end
      end
    end
  end

  # def sleep
  #   puts "sleeping!"
  # end

  # def eat
  #   puts "eating!"
  # end

  # def drink
  #   puts "drinking!"
  # end

  # def trick
  #   puts "BACK FLIP!!"
  # end

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
end