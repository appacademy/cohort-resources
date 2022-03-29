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
end

class Dog < Pet
  attr_reader :name
  p self # Dog class
  p self.class

  def self.doggie_things
    puts self # Dog class
  end

  def who_am_i?
    puts self # dog instance object
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    Dog.add_pet
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

  # def juggle(thing, num)
  #   num.times do
  #     puts "juggling #{thing}!"
  #   end
  # end

  def do_this_then_that(this, that)
    send(this)
    send(that)
  end

  def do_this_with_args(this, *args)
    self.send(this, *args)
  end

  def self.create_tricks(*trick_names)
    puts self #Dog class
    trick_names.each do |trick_name|
      puts self #Dog class
      self.define_method(trick_name) do |num=1|
        puts self #dog instance
        num.times do
          puts "#{trick_name}ing"
        end
      end
    end
  end

  def self.my_attr_reader(*method_name)
    # for each method name...
    #define a method with that name... do
    #grab the instance variable of that same name
  end
  private

  attr_reader :secret

  def tell_secret
    puts "My secret is: #{@secret}"
  end
end
