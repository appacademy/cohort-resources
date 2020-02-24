require 'byebug'

class Fish
  attr_accessor :name

  @@all_fish = []

  def self.all_fish
    @@all_fish
  end

  def self.capitalize_all_names
    self.all_fish.each do |fish|
      fish.name = fish.name.upcase
    end
  end

  def self.vowelless_fish
    vowels = ['a', 'e', 'i', 'o', 'u']

    @@all_fish.reject { |fish| fish.name.chars.any? { |char| vowels.include?(char) } }
  end

  def self.random_state_of_being
    [true, false].sample
  end
  
  def self.make_random_fish # factory method
    name = ""
    5.times { name << ('a'..'z').to_a.sample }
    # self refers to the Fish class in here | Fish == self
    Fish.new(name, random_state_of_being)
  end

  def initialize(name, lost)
    @name = name
    @lost = lost

    # have access to class variables in instance methods
    @@all_fish << self
  end

  def lost?
    @lost
  end

  def find
    @lost = false
  end

  def lose
    @lost = true
  end
end