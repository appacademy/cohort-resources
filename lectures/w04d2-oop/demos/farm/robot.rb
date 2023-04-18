require_relative "walkable.rb"

class AI
    def initialize(name)
        @name = name
    end
    
    def walk
        puts "I SHALL WALK FOREVER AND TAKE OVER YOU AND YOUR FAMILY"
    end
end

# class Robot < AI # TO BREAK RUBY
class Robot < AI
    include Walkable


    def say_my_name
        puts "I want you to call me #{name}"
    end
    
    attr_reader :name
    def initialize(name)
        @name = name
    end
    
    # WATCH OUT FOR USING MODULE METHOD WITH SUPER
    def walk
        # super #BREAKS RUBY
        puts "I SHALL NOT WALK"
    end
    
end

r2d2 = Robot.new("R2D2COW")
r2d2.walk