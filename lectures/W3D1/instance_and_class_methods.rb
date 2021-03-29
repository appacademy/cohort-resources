# Instance and Class Methods
require 'byebug'

class Fish
  # attr_accessor :name, :lost

  @@all_fish = []

  def self.random_state_of_being
    [true, false].sample
  end

  def self.make_nemo
    Fish.new("Nemo", self.random_state_of_being)
  end

  def self.all_fish
    @@all_fish
  end

  def self.make_school(num)
    res = []
    num.times do 
      name = ""
      5.times do
        name << ('a'..'z').to_a.sample
      end
      res << Fish.new(name, Fish.random_state_of_being)
    end
    res
  end
  
  def initialize(name, lost=Fish.random_state_of_being)
    @name = name
    @lost = lost
    @@all_fish << self
  end

  def name
    @name
  end

  def name=(val)
    @name = val
  end

  def lost? # any method that returns a boolean should have a ?
    @lost
  end

  def lost=(val)
    @lost = val
  end

  def find
    @lost = false
  end
end

school = Fish.make_school(10)
nemo = Fish.make_nemo
other_fish = Fish.new("Wally")

# school.each do |el|
#   puts "#{el.name} is swimming!"
# end

p Fish.all_fish