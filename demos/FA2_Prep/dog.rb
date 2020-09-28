require "byebug"
class Dog  
    def initialize(name, breed) 
        @breed = breed 
        @name = name
    end

    def walks 
        puts @name + ' walks'
    end

    def self.runs 
        p "I run"
    end
end