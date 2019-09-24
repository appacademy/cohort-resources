require 'byebug'

class Pet 

  def initialize(name)
    @name = name
    @secret = 'im a tiger'
    self.class.record_pet_birth 
  end
  
  def self.record_pet_birth
    @@pet_count ||= 0
    @@pet_count += 1
  end

end 

class Dog < Pet

  def initialize(name)
    super(name)
    @secret = "i'm a goat in disguise"
    self.class.record_dog_birth 
  end
  
  def self.record_dog_birth
    @dog_count ||= 0
    @dog_count += 1
  end

  def self.dog_count
    @dog_count
  end

  def self.print_stats
    puts "dogs: #{@dog_count} | all pets: #{@@pet_count}"
  end

  def self.learn_paw
    define_method(:paw) do 
      puts 'giving paw'
    end
  end

  def self.learn_tricks(*tricks) 
    tricks.each do |trick|
      define_method(trick) do |num_times = 1|
        num_times.times do
          puts "#{@name} is #{trick}ing"
        end
      end
    end
  end

  learn_tricks :playdead, :fetch, :rollover 
  # tricks = [:playdead, :fetch, :rollover]

  # def playdead(num_times = 1)
  #  puts 'stuff'
  # end

  def method_missing(method_name)
    puts "Sorry, #{@name} doesn't know how to #{method_name}"
    puts "But... let's give it a try anyways"
    self.class.learn_tricks(method_name)
    # Dog.learn_tricks(method_name)
    self.send(method_name) # <- use this one
    # self.method_name <- does not evaluate to the method_name being passed in as argument
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

  attr_reader :secret

  def tell_secret 
    puts "My secret is: #{ @secret }"
  end 

end 
