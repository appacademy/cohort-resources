require 'byebug'

class Pet
    def initialize(name)
        @name = name
    end
end

class Dog < Pet
  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
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
end