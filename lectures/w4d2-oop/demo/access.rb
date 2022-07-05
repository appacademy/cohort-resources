class Bug
    def initialize(name)
        @name = name
    end
    
    def implicit_test_function
        name
    end

    def explicit_test_function
        self.name
    end

    def spray_pheromones(other_bug)
        "Greetings, #{other_bug.name}"
    end

    # private
    # protected
    attr_reader :name
end

f = Bug.new('Flik')
h = Bug.new('Hopper')
p f.implicit_test_function
p f.explicit_test_function
p f.name
p f.spray_pheromones(h)

class BabyBug < Bug
    def initialize(name)
        super
    end
end

d = BabyBug.new('Dot')
s = BabyBug.new('Slim')
p d.implicit_test_function
p d.explicit_test_function
p d.name
p d.spray_pheromones(s)