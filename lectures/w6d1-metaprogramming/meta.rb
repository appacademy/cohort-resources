require 'byebug'

# Class variables
# inherited
# accessible in all instances of class
# Class instance variables
# value is not inherited
# only accessible within this one single instance

class Pet
  # @@num_pets = 0 # class variable
  @test = 'hello' # class instance variable

  def self.add_pet
    @@num_pets ||= 0
    @@num_pets += 1
  end

  def self.num_pets
    @@num_pets
  end

  def initialize(name)
    @name = name # instance variable
  end

  # def method_missing(method_name, *args)
  #   # debugger
  #   self.class.define_method(method_name.to_sym) do |*args|
  #     # debugger
  #     puts method_name.to_s + 'ing'
  #   end

  #   send(method_name)
  # end

  def self.my_attr_writer(*args)
    args.each do |el|
      define_method("#{el}=".to_sym) do |new_value|
        instance_variable_set("@#{el}", new_value)
      end
    end
  end
end

class Dog < Pet
  # p @num_pets
  # puts self # Dog ✅

  def self.doggie_things
    # puts self # Dog ✅
  end

  def initialize(name)
    super
    self.class.add_pet
    @secret = "I'm a goat in disguise"
  end

  def who_am_i?
    # puts self # instance of Dog class
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

  def do_this_and_that(this, that)
    self.send(this)
    self.send(that)
  end

  def how_many_siblings_do_i_have
    p @@num_pets
  end

  private
  attr_reader :secret
  my_attr_writer :secret, :name

  def tell_secret
    puts "My secret is: #{@secret}"
  end

  def tell_secret_with_args(*args)
    p args
    puts "My secret is: #{@secret}"
  end
end

if $PROGRAM_NAME == __FILE__
  d = Dog.new("Fido")
  # p Dog.num_pets
  # p Pet.num_pets
  # d.tell_secret
  # Dog.doggie_things
  # d.who_am_i?

  # p d.secret
  # p d.instance_variable_get(:@secret)
  # d.instance_variable_set(:@secret, 'I\'m a cat in disguise!')
  # p d.instance_variable_get(:@secret)
  # p d.how_many_siblings_do_i_have
  # p d.send(:secret)
  # d.send(:tell_secret)
  # d.send(:tell_secret_with_args, 5,4,'banana')
  # d.do_this_and_that(:drive, :clean)
  # d.drive
  # d.clean
  # d.fly_a_spaceship
  # d.scubadive
  # d.fly_a_spaceship
  d.name = 'Captain Fido'
  d.secret = 'I\'m actually a spaceship pilot'
  p d
end