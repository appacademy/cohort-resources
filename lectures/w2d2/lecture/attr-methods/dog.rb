class Dog

    def initialize(name)
        @name = name 
    end

    def name 
        @name
    end

    def name=(name)
        @name = name
    end

    
end

dog1 = Dog.new("Max")
# p dog1.name
# dog1.name = "Boby"
# p dog1.name
