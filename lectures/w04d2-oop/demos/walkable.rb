# lets give different classes access to the walk method
module Walkable
    # this method assumes the class it is included in has a name method
    def walk
      puts "#{name} is walking"
    end
end