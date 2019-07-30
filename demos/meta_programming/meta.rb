require 'byebug'

class Pet 

  def initialize(name)
    @name = name 
  end 

end 

class Dog < Pet

  def initialize(name)
    super(name)
    @secret = "i'm a goat in disguise"
  end 

  def sleep 
    puts 'sleeping'
  end 

  def eat
    puts 'eating'
  end

  def drink 
    puts 'drinking'
  end 

  def juggle(thing, num)
    num.times do 
      puts "juggling #{ thing }"
    end 
  end 

  private 

  def tell_secret 
    puts "My secret is: #{ @secret }"
  end 

end 
