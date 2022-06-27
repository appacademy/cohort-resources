class Fish
  # class_variable
  @@all_fish = []
  # attr_reader :name
  # attr_writer :name
  attr_accessor :name # creates a getter and a setter

  def self.all_fish
    @@all_fish
  end

  def self.random_state_of_being
    [true, false].sample # randomly returns one of these values
  end

  # factory method
  def self.make_nemo
    # puts self # context or receiver of the method
    Fish.new("nemo", self.random_state_of_being) # Fish and self are the same in this method
  end

  # factory method for randomly named fish
  def self.make_random_fish
    name = ""
    5.times do 
      name << ('a'..'z').to_a.sample
    end

    Fish.new(name, self.random_state_of_being)
  end

  # def self.new(*someargs)
  #   # some code that creates an instance
  #   instance.initialize(*someargs)
  # end

  def initialize(name, lost = Fish.random_state_of_being)
    puts self
    @name = name
    @lost = lost # boolean
    @@all_fish << self
  end

  def lost? # ruby style denotes that you should have a question mark on boolean methods
    # puts self
    @lost
  end

  def find
    @lost = false
  end

  # this is what attr_reader does
  # def name
  #   @name
  # end

  # attr_writer
  # def name=(name)
  #   @name = name
  # end

  
end
