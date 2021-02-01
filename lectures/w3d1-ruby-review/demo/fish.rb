class Fish
  FISH_NAMES = ['Oliver', "Larry", 'Wanda', "Dinner", "Coral", 'Dory', 'Fish named Wanda', 'Shark Bait']

  attr_accessor :name
  # attr_reader :lost?

  def self.random_state_of_being
    [true, false].sample
  end

  def self.create_random_fish
    self.new(FISH_NAMES.sample, self.random_state_of_being)
  end 

  def initialize(name, lost)
    @name = name
    @lost = lost
  end

  def find
    @lost = false
  end

  def lost?
    @lost
  end

  # def name
  #   @name
  # end
end


# if word == "banana"
#   return true
# end

# return true if word == 'banana'

# word == 'banana' ? true : false