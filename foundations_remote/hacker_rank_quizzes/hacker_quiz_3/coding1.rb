# Add a Restaurant#seat_customer method to the existing Restaurant class.
#the method hsould accept a string representing a customers name
# the method should add the name to the restauran's @customers if 
# number of @customers is under @capacity
# the method does not need to return a value 

class Restaurant
    attr_reader :name, :location, :customers

    def initialize(name, location, capacity)
        @name = name
        @location = location
        @capacity = capacity
        @customers = []
    end
end

restaurant_1 = Restaurant.new("Appetizer Academy", "NY", 3)

restaurant_1 = Restaurant.new("Appetizer Academy", "NY", 3)

restaurant_1.seat_customer("Cynthia")
p restaurant_1.customers        # => ["Cynthia"]
restaurant_1.seat_customer("Oliver")
p restaurant_1.customers        # => ["Cynthia", "Oliver"]
restaurant_1.seat_customer("Simcha")
p restaurant_1.customers        # => ["Cynthia", "Oliver", "Simcha"]
restaurant_1.seat_customer("Ryan")
p restaurant_1.customers        # => ["Cynthia", "Oliver", "Simcha"]

restaurant_2 = Restaurant.new("1x Club", "SF", 1)

restaurant_2.seat_customer("Vanessa")
p restaurant_2.customers        # => ["Vanessa"]
restaurant_2.seat_customer("Eli")
p restaurant_2.customers        # => ["Vanessa"]
restaurant_2.seat_customer("Candace")
p restaurant_2.customers        # => ["Vanessa"]