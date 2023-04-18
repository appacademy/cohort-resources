require_relative "walkable.rb"

class Animal
    include Walkable
    
    attr_reader :name, :job

    def initialize(name)
        @name = name
        puts "an animal was born today"
    end

    def eat
        puts "*#{self.name} eats the food*"
    end

    # def method_with_all_args(*arr)
    #     arr.each do |num|
    #         puts num
    #     end
    # end
end

# a = Animal.new("the animal")