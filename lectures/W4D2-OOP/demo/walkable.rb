module Walkable
    def name # the functionality of our module depends on the existence of a name method
        raise "Please ensure that your base class has a #name method"
    end

    def walk
        puts "#{name} is walking"
    end
end

# Enumerable is a module