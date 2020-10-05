class Fish

    @@all_fish = []

    # attr_reader :name, :lost # getter methods
    # attr_writer :name, :lost # setter methods
    attr_accessor :name
    def initialize(name, lost)
        @name = name
        @lost = lost
        # p self
        @@all_fish << self
    end

    def self.all_fish
        @@all_fish
    end

    def self.random_state_of_being
        [true, false].sample
    end

    # factory method to create a specific fish instance
    def self.make_fish_sticks
        Fish.new("fish...sticks", Fish.random_state_of_being)
        # self.new("fish...sticks", self.random_state_of_being)
        # p self
        # new("fish...sticks", random_state_of_being)
        # Fish.new("fish...sticks", random_state_of_being)
    end

    # factory method to create random fish
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

    # def name=(new_name)
    #     @name = new_name
    # end

    def lost?
        @lost
    end

    # def lost=(new_status)
    #     @lost = new_status
    # end

    def find
        @lost = false
    end
end