require 'byebug'

class Pet 

  def initialize(name)
    @name = name 
  end 

end 

class Dog < Pet
  # debugger
  # def self.learn_paw
  #   debugger
  #   define_method(:paw) do
  #     debugger
  #     puts 'giving paw'
  #   end
  # end

  def self.learn_tricks(*tricks)
    tricks.each do |trick|
      define_method(trick) do 
        puts "#{ @name } is #{ trick }ing!"
      end
    end
  end

  learn_tricks :paw, :fetch, :play_dead

  def method_missing(method_name)
    puts "Sorry, #{@name} does not know how to #{method_name}"
    puts "Let's give it a try anyways"
    self.class.learn_tricks(method_name)
    # debugger
    self.send(method_name)
  end

  def initialize(name)
    super(name)
    # @name = name
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