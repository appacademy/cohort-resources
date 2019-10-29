require 'byebug'

class Fish
  # Double @ sign for class variables
  @@all_fish = []

  def self.all_fish
    @@all_fish
  end
  
  attr_accessor :name # defines the reader & writer for this ivar
  # attr_reader :name # allows us to get name
  # attr_writer :name # allows us to set name

  # Equivalent to attr_readers
  # def name
  #   @name
  # end

  def lost?
    @lost
  end

  def self.random_state_of_being
    [true, false].sample
  end

  def self.make_random_fish
    name = ""

    5.times do
      alphabet = ('a'..'z').to_a
      name << alphabet.sample
    end

    self.new(name, random_state_of_being)
  end

  def initialize(name, lost = self.random_state_of_being)
    # debugger
    @@all_fish << self
    debugger
    @name = name
    @lost = lost
    
  end

  def find
    @lost = false
  end
end