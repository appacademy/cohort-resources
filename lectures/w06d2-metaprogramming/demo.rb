require 'byebug'

class Pet

  def self.add_pet
    # class variables
    @@total_pets ||= 0
    @@total_pets += 1
    # class instance variables
    # @total_pets ||= 0
    # @total_pets += 1
  end

  def self.total_pets
    @@total_pets
  end
    
  def initialize(name)
    @name = name
  end
end

class Dog < Pet
  puts self # Dog class

  def self.doggie_things
    puts self # Dog class
  end

  def self.create_tricks(*trick_names)
    p self # Dog class
    trick_names.each do |trick_name|
        define_method(trick_name) do |thing = 'chain saws', n = 1| # create a method with that name on the Dog class
            p self # instance
            n.times do
                puts "#{trick_name}ing with #{thing}!!!"
            end
        end
    end
  end

  def who_am_i?
    puts self # instance of Dog
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    self.class.add_pet # Dog.add_pet
  end
  
  def do_this_and_then_that(this, that)
    self.send(this) # calls method stored in this variable
    self.send(that) # calls method in that variable
    # cant do self.this ## would look for literally a method named 'this'
  end

  def do_some_method_with_args(some_method, *args)
    self.send(some_method, *args)
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

  private

  attr_reader :secret

  def tell_secret
    puts "My secret is: #{@secret}"
  end
end


# def my_attr_reader(*method_names)
    # iterate over method names
    # define methods with those names
    # return instance variables with those names
# end

    # if setter, sets instance variables to values passed in