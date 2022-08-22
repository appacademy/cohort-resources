class Fish
  # class variable, can access across all instances and by the class itself
  @@all_fish = []

  def self.all_fish
    @@all_fish
  end
  
  # attr_reader :name
  # attr_writer :name

  attr_accessor :name # does both reader and writer

  def initialize(name, lost)
    # can only access from the instance
    @name = name
    @lost = lost

    @@all_fish << self # every time we create a fish, push it into the array
  end

  def self.random_state_of_being # class method
    [true, false].sample
  end

  def self.make_nemo # factory method
    p self # => Fish
    Fish.new("nemo", Fish.random_state_of_being) # create a new instance of the class
  end

  def self.make_random_fish
    name = ""
    5.times do
      name << ('a'..'z').to_a.sample
    end

    Fish.new(name, Fish.random_state_of_being)
  end

  # def name
  #   @name
  # end

  # def name=(new_name)
  #   @name = new_name
  # end

  def lost?
    p self # => #<Fish:0x0000564d3f2fa958 @lost=false, @name="nemo"> for example
    @lost
  end

  def find
    @lost = false
  end
  
end