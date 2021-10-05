require 'byebug'

class Pet

  def self.add_pet
    @@total_pets ||= 0
    @@total_pets += 1
  end

  def self.total_pets # just a getter for total_pets
    @@total_pets || 0
  end

  def initialize(name)
    @name = name
  end
end


class Dog < Pet
  # puts self # Dog

  # def self.doggie_things
  #   puts self # self = ClassName inside a class method!
  # end

  # def who_am_i?
  #   puts self # self = dog instance inside an instance method!
  # end

  def self.create_trick_methods(*trick_names)
    trick_names.each do |trick_name|
      define_method(trick_name) do |num = 1|
        num.times do
          puts "#{trick_name}ing!"
        end
      end
    end
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    self.class.add_pet # Dog.add_pet
    self.class.create_trick_methods("eat", "sleep", "drink", "dance", "sit", "jump", "stay", "code")
  end

  def method_missing(method_name, *args) # if we receive a method call for a method that does not exist
    self.class.create_trick_methods(method_name) # create a method for that trick
    self.send(method_name, *args) # invoke the method we just created with the original args
  end

  def do_this_then_that(this, that)
    self.send(this)
    self.send
  end

  def do_this_with_args(this, *args)
    self.send(this, *args)
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
