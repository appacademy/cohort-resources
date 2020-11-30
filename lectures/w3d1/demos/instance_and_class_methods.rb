require "byebug"
class Fish 
  attr_accessor :name
  @@all_fish = [] #keep track of all the fishes that we make

  def self.random_state_of_being 
    [true,false].sample 
  end

  def self.all_fish
    @@all_fish
  end

  def self.create_nemo
    # debugger
    self.new("Nemo", self.random_state_of_being)
    # Fish.new("Nemo", Fish.random_state_of_being)
  end

  def initialize(name, lost)
    debugger
    @name = name 
    @lost = lost 
    
    @@all_fish << self
  end

  # def name 
  #   @name
  # end

  def lost?
    debugger
    @lost #@lost is a boolean 
  end

  def find 
    @lost = false
  end
end

nemo1 = Fish.create_nemo
nemo1.lost?
# nemo2 = Fish.create_nemo
# nemo3 = Fish.create_nemo
# nemo4 = Fish.create_nemo
debugger
s = "s"