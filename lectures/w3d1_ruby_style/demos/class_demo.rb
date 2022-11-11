
class Fish
  attr_reader :name
  attr_writer :name

  @@all_fish = []

  # Class Methods 
  # - Provide functionality affecting class variables (shared properties of the class)
  # - Used to create new instances of the class (Factory Methods)
  # - Not tied to the attributes of a specific instance
  
  def self.all_fish
    @@all_fish
  end

  def self.lost_fish
    @@all_fish.select {|fish| fish.lost?}
  end

  def self.random_state_of_being
    [true, false].sample
  end

  def self.make_nemo
    self.new("nemo", self.random_state_of_being) 
  end

  def self.make_random_fish(length=5)
    name = ""
    length.times do
      name << ('a'..'z').to_a.sample
    end

    self.new(name, self.random_state_of_being)
  end

  def initialize(name, lost)
    @name = name
    @lost = lost

    @@all_fish << self
  end

  def lost?
    @lost
  end

  def find
    @lost = false
  end
end

# p Fish.useless
# p nemo = Fish.new('nemo', Fish.random_state_of_being)
# p rover = Fish.new('rover', Fish.random_state_of_being)
# p dory = Fish.new('dory', Fish.random_state_of_being)

# p fish_1 = Fish.make_nemo
# p fish_2 = Fish.make_nemo
# p fish_3 = Fish.make_nemo
# fish_1 = Fish.make_random_fish
# fish_2 = Fish.make_random_fish
# fish_3 = Fish.make_random_fish
p "All
fish"
# p Fish.all_fish
# puts
# puts "Lost fish"
# p Fish.lost_fish
