class Fish

  attr_accessor :name

  @@all_fish = []

  def self.all_fish
    @@all_fish
  end

  def self.random_state_of_being
    [true, false].sample
  end

  def self.make_nemo
    Fish.new("Nemo")
  end
  
  def self.make_random_fish
    name = ""
    name << ('a'..'z').to_a.sample
    name << ('a'..'z').to_a.sample
    name << ('aeoiu').split("").sample
    Fish.new(name)
  end

  def initialize(name)
    @name = name
    @lost = Fish.random_state_of_being
    @@all_fish << self
    
    # (conditional) ? (code to execute if true) : (code to execute if false)
    # @lost ? (p "#{name} is lost") : (p "#{name} is not lost!")
    # p "#{name} is #{@lost ? "lost" : "not lost"}"
  end
  
  def lost?
    @lost
  end

  def find
    @lost = false
  end
  
end