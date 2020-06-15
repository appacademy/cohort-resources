class Fish

    @@all_fish = []
    # attr_reader :name, :lost
    # attr_writer :name, :lost

    attr_accessor :name

    def initialize(name, lost)
        @name = name
        @lost = lost

        @@all_fish << self
    end

    def self.all_fish
        @@all_fish
    end

    def self.random_state_of_being
        [true, false].sample
    end

    def self.make_nemo
        # p self
        Fish.new('nemo', self.random_state_of_being)
    end

    def self.make_random_fish
        name = ""
        5.times do
            name << ('a'..'z').to_a.sample
        end
        self.new(name, self.random_state_of_being)
    end

    # def name
    #     @name
    # end

    def lost?
        @lost
    end
    
    # def lost
    #     @lost
    # end
    # def name=(new_name)
    #     @name = new_name
    # end

    def found
        @lost = false
    end
end