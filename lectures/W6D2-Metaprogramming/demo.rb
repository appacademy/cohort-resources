require 'byebug'

class Pet
    @@total_pets

  def self.my_attr_reader(*args)
    # for each arg in args
    # define_method called arg
        # grab the value of instance variable arg
        
  end


  def self.add_pet
    @@total_pets ||= 0 # instance variable that belongs to Pet
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
#   puts self # self = Dog
  

  # class instance variable: instance variable defined on a class instance
  # class variable: 

  def self.doggie_things
    puts self # self = Dog
  end

  def self.create_tricks(*tricks)
    tricks.each do |trick|
        # define_method(method_name) do |param1, param2, param3|
            # body of the method
        # end
        p "running"
        define_method(trick) do |num = 1|
            p "running"
            num.times { puts "#{trick}ing!" }
        end
    end
  end

  def method_missing(method_name, *args)
    self.class.send(:define_method, method_name) do |*args|
        puts "#{method_name}ing!"
    end
    self.send(method_name, *args)
  end

  def who_am_i?
    puts self # self = fido instance
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    self.class.add_pet # Dog.add_pet
  end

#   def sleep
#     puts "sleeping!"
#   end

#   def eat
#     puts "eating!"
#   end

#   def drink
#     puts "drinking!"
#   end

#   def trick
#     puts "BACK FLIP!!"
#   end

  def juggle(thing, num)
    num.times do
      puts "juggling #{thing}!"
    end
  end

  def do_this_then_that(this, that) # dynamic dispatch
    self.send(this)
    self.send(that)
  end

  def do_this_with_args(this, *args)
    self.send(this, *args)
  end

#   def instance_variable_get(*args)
#     puts "nice try"
#   end

  private

  attr_reader(:secret, :name)

  def tell_secret
    puts "My secret is: #{@secret}"
  end

#   Dog.create_tricks("run", "play", "hide")
end