class Restaurant 
    # p "analyzing"
    attr_accessor :name, :chefs, :menu

    def initialize(name, chefs)
        @name = name 
        @chefs = chefs 
     
    end
     

    def menu 
        @menu = ["sammies", "big ol' cookies", "bean blankies", "chicky catch", "super water"]
        @menu
    end
     

end

five_star_restaurant = Restaurant.new("Appetizer Academy", ["Marta", "Jon", "Soon-Mi"])
p five_star_restaurant
p five_star_restaurant.menu << "pizza"
p five_star_restaurant
# p five_star_restaurant.menu
# p five_star_restaurant






# p five_star_restaurant
# p five_star_restaurant.menu #=> Even though I have an accessor at the top of my file, we are seeing
# # the result of the method menu because Ruby reads code from top to bottom

# five_star_restaurant.menu << "pizza"
# p five_star_restaurant.menu