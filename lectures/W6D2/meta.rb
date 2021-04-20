require 'byebug'

class Pet
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

  # attr_reader :a, :b, :c, :d 
  def self.my_attr_reader(*args)
    # iterate over the args
        # fore each arg define method
        # name of method = arg
        # body = instance_variable_get()
  end

  # attr_accesser creates/calls attr_reader and atter_writer
  
end

class Cat < Pet
    def initialize(name)
        super(name)
        self.class.record_cat_birth(self)
    end

    def self.record_cat_birth(cat)
        @all_cats ||= []
        add_pet # self here is the class Cat
        @all_cats << cat
    end
end

class Dog < Pet # the Dog class is a class instance of the Pet superclass
  puts self

  def self.doggie_things
    puts self
  end

  def who_am_i?
    puts self
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    self.class.record_dog_birth(self) # self here is an instance of a dog
  end

  def self.record_dog_birth(dog)
    @all_dogs ||= []
    add_pet # self here is the class Dog
    @all_dogs << dog
  end

  def self.all
    @all_dogs.each { |dog| puts dog.name }
  end

  def do_this_then_that(this, that) # this is also known as dynamic dispatch
    self.send(this, 'banana') # dynamically calling methods based on variables
    self.send(that) # this and that are parameters (method names)
  end

  def do_this_with_args(this, *args)
    debugger
    self.send(this, *args) # args = ['trucks', 4] *args => 'trucks', 4 
    # self.send(juggle, trucks, 4)
  end

  # send(arg1, arg2) arg1 is always a method, arg2(*args) are paramaters for the arg1 method

  # defines methods for us
  def self.create_tricks(*trick_names) # :dance
    puts self # Dog 
    trick_names.each do |trick|
        puts self # Dog
                 #method name  #paramater(s)
        define_method(trick) do |num = 1|
            puts self # dog instance 
            num.times do 
                puts "#{trick}ing"
            end
        end
    end
  end

#   def jump(num = 1)
#     puts self # dog instance
#     num.times do 
#         puts 'jumping'
#     end
#   end

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

#   def juggle(thing, num)
#     num.times do
#       puts "juggling #{thing}!"
#     end
#   end

#   def instance_variable_get(instance_variable)
#     if instance_variable == '@secret' || instance_variable == :@secret
#         puts "Nice try; not gonna tell you my secret."
#     else 
#         puts 'Nice try...'
#     end
#     return 0
#   end

  private

  attr_reader :secret

  def tell_secret
    puts "My secret is: #{@secret}"
  end
end