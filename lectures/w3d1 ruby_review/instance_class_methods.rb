require 'byebug'
class Fish
  @@all_fish = [] #collect all the fishes 

  def self.all_fish
    @@all_fish
  end

  def self.make_random_fish
    name = ""

    5.times do 
      name << ('a'..'z').to_a.sample
    end

    self.new(name, self.random_state_of_being)
    #within a class method
    #self == Fish
  end

  def self.make_nemo(name = 'nemo') #factory method 
    Fish.new(name, self.random_state_of_being)
  end

  def self.random_state_of_being #class method 
    [true, false].sample
  end

  attr_accessor :name
  # attr_reader :lost 
  def initialize(name, lost)
    @name = name 
    @lost = lost 

    @@all_fish << self 
    #instance of fish 
  end

  # def name 
  #   @name
  # end

  # def name=(name)
  #   @name = name
  # end

  def lost?
    @lost
  end

  def find 
    @lost = false
  end

end



