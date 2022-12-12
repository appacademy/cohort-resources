require "byebug"

class Fish
    # attr_reader :lost
    # attr_writer :lost
    attr_accessor :lost #does both

    # ALL_FISHED = [] # we should use class variables if data changes/ is expected to change
    @@all_fish = []

    # p self

    def self.random_state_of_being
        [true, false].sample
    end

    def self.all_fish
        @@all_fish
    end

    def self.make_nemo
        Fish.new("Nemo", self.random_state_of_being)
    end

    def self.make_random_fish
        name = ""
        5.times do 
            name += ("a".."z").to_a.sample
        end
        self.new(name, self.random_state_of_being)
    end

    def initialize(name, lost)
        @name = name
        @lost = lost
        @@all_fish << self
        # debugger
    end

    def find
        @lost = false
    end

    # def lost=(val)
    #     @lost = val
    # end

    # def lost #reader
    #     @lost
    # end

    def lost? #custom reader
        @lost
    end

end

nemo = Fish.new("Nemo", true)