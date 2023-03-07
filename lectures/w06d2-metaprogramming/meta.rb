require 'byebug'

class Class
  # define_singleton_method()
  
  def my_attr_reader(*vars)
    vars.each do |var|
      define_method(var) do
        instance_variable_get("@#{var}")
      end
    end
  end
end

class Pet
  @@total_pets = 0
  my_attr_reader :name, :secret, :fur_length

    def initialize(name)
        @name = name
    end

    # def name
    #   @name
    # end
end

class Dog < Pet
  @breeds = ['cockapoo', 'golden', 'pit', 'hound'] # class instance variable
  # puts "line 10: #{self}" # Dog class?

  def self.doggie_things
    puts self # Dog class?
    p @@total_pets
  end
  
  # def name=(new_name)
  #   @name = new_name
  # end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise" # instance variable
    @@total_pets += 1
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

  def who_am_i
    puts self # instance of Dog class?
  end

  def do_this_and_that(this, that)
    send(this)
    send(that)
  end

  def self.create_tricks(*tricks)
    puts self
    tricks.each do |trick|
      define_method(trick) do |times=1|
        puts self
        times.times do
          puts "#{trick}ing"
        end
      end
    end
  end

  create_tricks("eat", :drink, :sleep, :play)

  # def instance_variable_get(*args)
  #   puts 'nice try weirdo'
  # end

  private
  # attr_reader :secret

  def tell_secret(num=1)
    num.times do
      puts @secret
    end
  end
end

# puts 'here i am'
fido = Dog.new('Fido')
# Dog.doggie_things
jenny = Dog.new('Jenny')
# Dog.doggie_things
# p fido.name
# p jenny.name
# p fido.instance_variable_get("@secret")
# p jenny.instance_variable_get(:@secret)
fido.instance_variable_set(:@secret, "I am actually a donkey in disguise")
# p fido.instance_variable_get("@secret")

# instance_variable_get
# instance_variable_set

# send(method_name, args)
jenny.eat
# jenny.send("eat")
# fido.tell_secret
# fido.send(:tell_secret, 4) #fido.tell_secret(4)
# jenny.do_this_and_that(:eat, :sleep)

# define_method
# fido.play
# fido.eat
# fido.sleep

# Array.define_method(:hi) {|name| puts "Hi #{name}"}
# [1,2,3].hi('darren')

p fido.name
# fido.instance_variable_set(:@super_secret, "don't tell anybody I'm a platypus")
# p fido.instance_variable_get(:@super_secret)