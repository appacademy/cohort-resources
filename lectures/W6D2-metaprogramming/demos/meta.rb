require 'byebug'

class Pet
  attr_reader :name

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

end

class Dog < Pet
  puts self # Dog

  def self.doggie_things
    puts self  # Dog
  end

  def who_am_i?
    puts self # Dog instance
  end

  def self.record_dog_birth(dog)
    @all_dogs ||= []
    add_pet
    @all_dogs << dog
  end

  def self.all
    @all_dogs.each { |dog| puts dog.name }
  end

  def initialize(name)
    super(name)
    self.class.record_dog_birth(self)
    @secret = "I'm a goat in disguise"
  end

  def do_this_then_that(this, that)
    self.send(this)
    self.send(that)
  end

  def do_this_with_args(this, *args)
    self.send(this, *args)
  end

  def do_this_on_class(this)
    Dog.send(this)
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

  # def self.create_tricks(*trick_names)
  #   puts self # Dog class
  #   trick_names.each do |trick_name|
  #     puts self # Dog class
  #     define_method(trick_name) do |num = 1|
  #       puts self # Dog instance
  #       num.times do
  #         puts "#{trick_name}ing!!!"
  #       end
  #     end
  #   end
  # end

  def method_missing(method_name, *args)
    self.send(:define_method, method_name) do |*arguments|
      arguments[0].times do
        puts "#{method_name}ing!"
      end
      puts arguments[1]
    end
    self.send(method_name, *args)
  end

  def self.my_attr_reader(*method_names)
    # Iterate over method names
    # define methods with those names
    # grab instance variables of that name
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