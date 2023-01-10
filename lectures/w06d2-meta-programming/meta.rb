require 'byebug'

class Pet
    @@total_pets = 0

    def self.add_pet
        # @total_pets ||= 0
        # @total_pets += 1
        @@total_pets += 1
    end

    def self.total_pets
        @@total_pets
    end
    
    def initialize(name)
        @name = name
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


  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    # self.class.add_pet
    Dog.add_pet # equivalent to above
  end

  def method_missing(method_name)
    Dog.send(:define_method, method_name) do
        puts "#{method_name}ing!"
    end
    # define_method(method_name)

    self.send(method_name)
    # puts "blah blah blah"
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

  def self.create_tricks(*trick_names)
    puts self # Dog
    trick_names.each do |trick_name|
        puts self # Dog
        define_method(trick_name) do |num = 1|
            puts self # Dog instance
            num.times do
                puts "#{trick_name}ing!"
            end
        end
    end
  end

  def do_this_then_that(this, that)
    # self.this
    # self.that
    # doesnt work ^^^
    self.send(this)
    self.send(that)
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

### for project

def self.my_attr_reader(*method_names)
    # for each method name ... do 
    # define a method with that method name
    # return a instance variable with that name
end