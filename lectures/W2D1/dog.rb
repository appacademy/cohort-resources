class Dog 
    @@color = "black"

    def initialize(name, breed)
        @name = name 
        @breed = breed 
    end

    def self.change_colors 
        @@color = "white"
    end

    def color 
        @@color
    end

    def woof 
        p self 
        # Dog.change_colors
    end

    # def self.woof 
    #     p self 
    # end

    # def self.has_four_feet 
    #     p self
    # end
end

spot = Dog.new("Spot", "Lab")
p spot.color 
Dog.change_colors
p spot.color

brownie = Dog.new("Brownie", "Doodle")
# spot.woof
# Dog.woof
# Dog.has_four_feet
# spot.has_four_feet
