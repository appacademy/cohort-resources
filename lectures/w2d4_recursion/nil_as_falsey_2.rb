class Restaurant 
 
    attr_accessor :name, :chefs, :menu 
    def initialize(name, chefs )
        @name = name 
        @chefs = chefs  
        # @menu = ["sammies", "big ol' cookies", "bean blankies", "chicky catch", "super water"]
    end
     
 
    def menu 
        @menu ||= ["sammies", "big ol' cookies", "bean blankies", "chicky catch", "super water"]
    end
     
 
end

five_star_restaurant = Restaurant.new("Appetizer Academy", ["Marta", "Jon", "Soon-Mi"])
# p five_star_restaurant
# p five_star_restaurant.menu 

# five_star_restaurant.menu << "pizza"
# p five_star_restaurant.menu