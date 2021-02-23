require 'byebug'

class Pet
  def self.add_pet
    @@total_pets ||= 0
    @@total_pets += 1
  end

  def self.total_pets
    @@total_pets
  end

  def initialize(name)
    @name = name
  end
end

class Dog < Pet
  # puts self
  attr_reader :name

  # define_singleton_method
  def self.create_tricks(*trick_names) 
    #self1
    trick_names.each do |trick_name|
      #self2
      define_method(trick_name) do |num = 1|
        #self3
        num.times do 
          puts "#{self.name } is #{trick_name}ing!"
        end
      end
    end
  end

  def self.record_dog_birth(dog)
    @all_dogs ||= []
    add_pet
    @all_dogs << dog
  end

  def self.all
    @all_dogs.each { |dog| puts dog.name }
    true
  end

  def self.doggie_things
    puts self
  end

  def who_am_i?
    puts self
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
    self.class.record_dog_birth(self)
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

  
  # def juggle(thing, num)
  #   num.times do
  #     puts "juggling #{thing}!"
  #   end
  # end

  # def trick
  #   puts "BACK FLIP!!"
  # end
  
  private
  
  attr_reader :secret

  def tell_secret
    puts "My secret is: #{@secret}"
  end
end

# def self.create_tricks(*trick_names) 
#     #self1
#     trick_names.each do |trick_name|
#       #self2
#       define_method(trick_name) do |num = 1|
#         #self3
#         num.times do 
#           puts "#{self.name } is #{trick_name}ing!"
#         end
#       end
#     end
# end


# phase 0 of project
def self.my_attr_reader(*method_names)
  #for each method name . .  .
  #def ine a getter for that name that
  # grabs the value of that instance variable with that name
end