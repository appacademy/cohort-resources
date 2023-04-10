class Fish
    
    @@all_fish = []

    def self.all
        @@all_fish
    end

    def self.random_state_of_being
        [true, false].sample
    end

    def self.random_name
        ["Thomas", "Nitty", "Rocco", "Misha"].sample
    end

    def self.make_more
        self.new(self.random_name, self.random_state_of_being)
    end

    def self.make_all
        99.times do 
            name = ""
            5.times do
                name += ('a'..'z').to_a.sample
            end
            Fish.new(name, self.random_state_of_being)
        end
        self.all
    end

    # attr_reader :name
    # attr_writer :name
    attr_accessor :name

    def initialize(name, lost)
        @name = name
        @lost = lost
        @@all_fish << self
    end
    
    def lost?
        @lost
    end

end

rant = "You could write really, really, really long lines in Ruby but that is bad code style should be avoided.
 Do not have more than 80 characters on one line."




