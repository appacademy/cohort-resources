class Fish

  @@all_fish = [] # class variable of fish array

  # attr_reader :name
  # attr_writer :name
  attr_accessor :name 

  def self.all_fish
    @@all_fish
  end

  def self.random_state_of_being # general class method
    [true, false].sample
  end

  def self.make_nemo # factory method
    # p self # Fish
    self.new('nemo', Fish.random_state_of_being)
  end

  def self.make_random_fish(name_length) # another factory method
    name = ""
    name_length.times do
      name << ('a'..'z').to_a.sample
    end

    Fish.new(name, self.random_state_of_being)
  end

  def initialize(name, lost)
    @name = name
    @lost = lost

    @@all_fish << self
  end

  # def name
  #   @name
  # end

  # def name=(new_name)
  #   @name = new_name
  # end

  def lost?
    # p self # <Fish:0x0000563a571860b8 @name="nemo", @lost=true>
    @lost
  end

  def find
    @lost = false
  end
  
end