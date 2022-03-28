class Pet
  def initialize(name)
    @name = name
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
