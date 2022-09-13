require 'byebug'

class Pet

  def self.add_pet
    @total_pets ||= 0
    @total_pets += 1
  end

  def self.total_pets
    @total_pets
  end
  
  def initialize(name)
    @name = name
    self.class.add_pet
  end
end

class Dog < Pet
  puts self # Dog

  def self.doggie_things
    puts self # Dog
  end

  def who_am_i?
    puts self # Dog instance
  end

  attr_reader :name

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    self.class.add_pet
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

  def juggle(thing, num)
    num.times do
      puts "juggling #{thing}!"
    end
  end

  def do_this_then_that(this, that)
    self.send(this)
    self.send(that)
  end

  def do_this_with_args(this, *args)
    self.send(this, *args)
  end

  

  def self.create_tricks(*trick_names)
    puts self
    trick_names.each do |trick_name|
      define_method(trick_name) do |num = 1| # argument is the method name, the block is the args the method will take
        # anything in here is what the method you're defining will do
        puts self
        num.times do
          puts "#{self.name} is #{trick_name}ing!!!!"
        end
      end
    end
  end

  def method_missing(method_name, *args)
    # create a method if its missing
    self.class.send(:define_method, method_name) do
      puts "#{method_name}ing!"
    end

    define_method(method_name) do |num = 1| # argument is the method name, the block is the args the method will take
      # anything in here is what the method you're defining will do
      puts self
      num.times do
        puts "#{self.name} is #{method_name}ing!!!!"
      end
    end

    self.send(method_name, *args) # call it
  end

  def self.my_attr_reader(*readers)
    # iterate over method names
    # define a method with that name
    # get the instance variable of the same name
  end

  private

  attr_reader :secret

  def tell_secret
    puts "My secret is: #{@secret}"
  end
end
