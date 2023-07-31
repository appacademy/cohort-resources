
class Fish
# i'm also typing
  # im typing
  # p self
  # attr_reader :name # syntactic sugar for what is written below
  # attr_writer :lost

  # class variable - accessible to all instances, and the class itself
  @@all_fish = []

  def self.all_fish
    @@all_fish
  end
  
  attr_accessor :name # combining both

  def initialize(name)
    @name = name
    @lost = Fish.random_state_of_being

    @@all_fish << self # self is the newly created fish instance
  end

  def self.random_state_of_being
    # @name # nil - no instance of fish from here
    # p self # this is the Fish class, receiver
    [true, false].sample # randomly pick between the two
  end

  def self.make_nemo # factory method - it makes instances
    nemo = self.new("nemo") # self is Fish -- same as Fish.new
    nemo.lose
    nemo
  end

  def self.make_random_fish # factory method
    name = ""
    5.times do
      name << ('a'..'z').to_a.sample # push a random letter from a to z into name
    end
    Fish.new(name)
  end

  def lost? # define ourselves because its boolean
    p self # -> fish instance, whatever we called .lost? on, receiver
    @lost
  end

  def find
    @lost = false
  end

  def lose
    @lost = true
  end


  # def change_name(val) # basically a setter without an equals sign
  #   @name = val + '!'
  # end

  # def name
  #   @name
  # end

  # def name=(value)
  #   @name = value
  # end
  
end