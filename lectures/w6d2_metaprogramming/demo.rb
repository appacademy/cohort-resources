require 'byebug'
class Pet # we can define instance variables on the class itself
  def initialize(name)
    @name = name
  end

  def self.add_pet # shared between classes 
    @@total_pets ||= 0 
    @@total_pets += 1
  end

  def self.total_pets  
    @@total_pets
  end
end

class Dog < Pet

  puts self # what is self? dog
  def self.doggie_things
    puts self # dog
  end

  def self.record_dog_birth(dog)
    @all_dogs ||= []
    add_pet
    @all_dogs << dog
  end

  def self.create_tricks(*trick_names)
    # self = Dog
    # what type of method? class method
    trick_names.each do |trick_name|
      # self = Dog
      define_method(trick_name) do |num = 1| 
        # self = instance of a dog
        # why is that? 
        # define_method is the logic of the instance method, defines instance methods
        puts self
        # self inside of the block is an instance and not the class
        num.times do 
          puts "#{trick_name}ing"
        end
      end
    end
  end

  def self.my_attr_reader(*method_names)
    # iterate through method names
    # for each method name, define a method with that name
    # the method being defined should get the instance variable of that same name
    # ruby and rails is cool and FUN ^^
    # TRY YOUR BESTEST
  end

  def who_am_i?
    puts self # instance of the dog class
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise" #instance variables are not shared between instances
    self.class.record_dog_birth(self)
    # all instances should have access to .class method. will return dog instance
  end

  def do_this_then_that(this, that)
    self.send(this)
    self.send(that)
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