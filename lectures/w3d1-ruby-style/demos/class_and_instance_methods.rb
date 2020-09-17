class Fish
    @@all_fish = []
    
    def self.all_fish # getters can mutate!, attr_readers aren't an option as they are for INSTANCE variables
        @@all_fish
    end

    # def self.all_fish=(new_all_fish) #setter for a class variable
    #     @@all_fish = new_all_fish
    # end

    def self.random_lost_state
        [true, false].sample # sample pulls out a random element from an array
    end

    def self.make_random_fish # factory method
        name = ""
        6.times do 
            name << ("a".."z").to_a.sample # can range over alphabet, and to_a converts to an array
            # ruby string class can shovel (which is mutative) as well as += (which is reassigning)
        end
        # self #what is self here, in the context of a class method?
        self.new(name, self.random_lost_state) # works with the class name as well, but isn't dynamic for inherited methods (or if you change class names) - a Salmon subclass would only be making a Fish instance, not a Salmon one
    end

    # def self.new
    #     puts "don't do this" # overrides built in new, so will not make a new instance of the class
    # end

    # attr_reader :name # you can MUTATE objects with a reader
    # attr_writer :name # reassigning requires a writer
    attr_accessor :name

    def initialize(name, lost) 
        # what is self here?
        # if self.class.all_fish (...etc) could check name uniqueness before making a new fish
        @name = name
        @lost = lost
        @@all_fish << self # the instance has been created under the hood already, and then initialize is called to set up behavior for the new instance, so that Fish instance already exists in memory
    end

    # def name #replaced with attr_reader or attr_accessor
    #     @name
    # end

    # def name=(new_name) #replaced with attr_writer or attr_accessor
    #     @name = new_name
    # end

    def lost? # ruby style/convention says methods that return booleans should end w/ "?", so can't just use attr_reader/attr_writer/attr_accessor
        @lost
    end

    def find
        @lost = false
    end

end