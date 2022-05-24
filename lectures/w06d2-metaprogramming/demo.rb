require 'byebug'

class Pet
  @@total_pets = 0

  def self.add_pet
    # @total_pets ||= 0
    # @total_pets += 1
    @@total_pets += 1
  end

  def self.total_pets
    # @total_pets
    @@total_pets
  end


  def initialize(name)
    @name = name
  end
end

class Dog < Pet
  puts self # 1 => Dog

  def self.doggie_things
    puts self # 2 => Dog
  end

  def self.create_tricks(*trick_names)
    p self # 1 Dog
    trick_names.each do |trick_name|
      p self # 2 Dog
      define_method(trick_name) do |num = 1|
        p self # 3 instance
        num.times do
          puts "#{trick_name}ing!"
        end
      end
    end
  end

  def who_am_i?
    puts self # 3 => dog instance
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    self.class.add_pet
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

# today's project:

# def self.my_attr_reader(*name)
#   # iterate through the names
#   # define a method for each name
#   # return an instance variable with that name
# end