
class Fish

  attr_accessor :name
  # attr_reader :all_fish # attr_accessors don't work for class variables

  @@all_fish = []

  def self.all_fish
    @@all_fish
  end


  def self.random_state_of_being
    [true, false].sample
  end

  def self.make_nemo
    self.new('Nemo', self.random_state_of_being) # self refers to the Fish class
  end

  def self.make_random_fish
    name = ""

    5.times do
      name << ('a'..'z').to_a.sample
    end

    self.new(name, self.random_state_of_being)
  end


  def initialize(name, lost)
    @name = name
    @lost = lost
    @@all_fish << self # self refers to the instance that was just created
  end

  def lost? # this method returns a boolean, so it gets a ?
    @lost
  end

  def find
    @lost = false
  end

end