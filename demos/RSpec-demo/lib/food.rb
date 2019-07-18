class Food 

    def initialize(food)
        @type = food
    end

    def to_s 
        @type.to_s
    end

    def bite
        "I just took a bite out of #{@type}"
    end
end