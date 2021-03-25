class House
    DOOR = true 

    def initialize(bedrooms, bathrooms, pool, sq_feet)
        @bedrooms =bedrooms
        @bathrooms = bathrooms
        @pool = pool
        @sq_feet = sq_feet
    end 

    def door 
        DOOR
    end

    # def remove_door 
    #     DOOR = false 
    # end

    def pool
        @pool
    end

    def bedrooms
        @bedrooms
    end

    def bedrooms=(new_num_bedrooms)
        @bedrooms = new_num_bedrooms
    end

    def bigger_than_500? 
        if @sq_feet >= 500 
            "My house is big enough. It has #{@sq_feet}"
        else
            "Too small"
        end
    end

    def self.big 
        self.pool 
    end


end

la_house = House.new(1, 1, true, 700)
p House.big
# p la_house.bigger_than_500?
# p House::DOOR
# p la_house.door 
# la_house.remove_door
# p la_house.door











# p la_house.bedrooms #1
# la_house.bedrooms=(4)

# p la_house.bedrooms #4
# @bedrooms
# @bedrooms = 3


# p la_house
# p la_house.has_pool?

# sf_house = House.new(2, 2, false)
# p sf_house
