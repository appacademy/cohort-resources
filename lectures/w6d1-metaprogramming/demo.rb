require 'byebug'

class Pet
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def self.add_pet
    # self here is Pet class
    # instance var is a class instance var
    # @total_pets ||= 0 # class instance variable
    # @total_pets += 1
    @@total_pets ||= 0 # class variable
    @@total_pets += 1
  end

  def self.total_pets
    @@total_pets
  end
end

class Dog < Pet
  puts self

  def self.doggie_things
    puts self
  end

  def who_am_i?
    puts self
  end

  def self.record_dog_birth(dog)
    @all_dogs ||= []
    add_pet # implicit self -> self is the Dog class
    @all_dogs << dog
  end

  def self.all
    @all_dogs.each { |dog| puts dog.name }
    nil
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    # Dog.record_dog_birth(self) 
    self.class.record_dog_birth(self) # -> self is dog instance. Same as above line 
  end

  def do_this_then_that(this,that)
    self.send(this)
    send(that)
  end

  def do_this_with_args(this,*args)
    self.send(this,*args)
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

  def self.create_tricks(*trick_names)
    # self -> the class
    trick_names.each do |trick_name|
      # self -> the class
      define_method(trick_name) do |num = 1|
        # self -> the instance
        num.times do
          puts "#{trick_name}ing!"
        end
      end
    end
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