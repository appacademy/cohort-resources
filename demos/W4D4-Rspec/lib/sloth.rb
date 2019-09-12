class Sloth

    attr_reader :name, :foods, :drinks
    
    DIRECTION = %w( north east south west ).freeze

    def initialize(name)
        @name = name
        @foods = []                 # tummy -carlos
        @drinks = Hash.new(0)      # initialize a hash with default value of 0
    end

    def eat(food)
        @foods << food 
        food.bitten
        # debugger
        "I am eating #{food}"
    end

    def run(direction)
        raise ArgumentError unless DIRECTION.include?(direction)

        "I'm running #{direction} at 200mph"
    end


    def drink(bevy, amt) 
        @drinks[bevy] += amt
    end


    def hangry?
        @foods.empty?
    end

    protected

    def secret_sloth
        "shhhhhhh this method is secret"
    end

end

class Food

    attr_reader :food
    
    def initialize(food)
        @food = food
    end

    def to_s 
        @food
    end

    # def bitten 
    #     "AHHHHHHHHH #{food} is being bitten"
    # end

end
