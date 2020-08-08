class Dog 
    attr_reader :name 
    
    def initialize(name, color)
        @name = name 
        @color = color 
    end

    def self.walks 
        p "Dog is walking"
    end

    def runs
        # instance of dog
        # self.walks 
        p self.name + ' runs'
    end

    def self.runs 
        # self
        self.walks
        p "Dog is running"
    end

    def walks 
        p self.name + ' walks'
    end

end

fox = Dog.new("Fox", "Black")
# p fox 
# Dog.walks 
fox.runs
fox.walks
# Dog.runs  