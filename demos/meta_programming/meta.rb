require 'byebug'
class Pet 

  def self.record_pet_birth
    @@pet_count ||= 0
    @@pet_count += 1
  end

  def initialize(name)
    @name = name 
    # Pet.record_pet_birth
    self.class.record_pet_birth
  end 

end 

class Dog < Pet

  def self.learn_paw
    define_method(:paw) do 
      puts "#{@name} is giving paw"
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

  def method_missing(method_name,*args)
    puts "sorry #{@name} doesn't know how to #{method_name}, especially with #{args}"
    puts "... but lets give it a try anyway"
    self.class.learn_tricks(method_name)
    self.send(method_name,args.first)
  end

  def self.record_dog_birth
    @dog_count ||= 0
    @dog_count += 1
  end

  def self.dog_count 
    @dog_count || 0 
  end

  def self.print_stats
    puts "Dogs:#{@dog_count} | all pets: #{@@pet_count}"
  end

  learn_tricks :fetch,:roll_over,:play_dead

  def initialize(name)
    super(name)
    @secret = "i'm a goat in disguise"
    self.class.record_dog_birth
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
