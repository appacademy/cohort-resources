# 1) How do I call the meow method from the walks method?
# 2) What is the difference between calling @name and name inside the walks method?
# 3) How to differentiate between instance and class methods in the spec file?
# 4)  Distinct empty arrays

class Cat 
    def initialize(name, color)
        @name = name 
        @color = color 
    end

    def name 
        @name 
    end

    def color 
        @color 
    end

    def self.meow 
        "MEOW"
    end

    def walks
        @name + " is walking"
    end

end

hash = Hash.new([])
hash[:a] << 1
p hash[:a]
hash[:b] << 3
p hash[:a]
p hash[:b]