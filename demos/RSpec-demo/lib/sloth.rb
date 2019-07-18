class Sloth
    attr_reader :name, :foods, :drinks

    DIRECTIONS = ['n', 's', 'e', 'w'].freeze

    def initialize(name)
        @name = name
        @foods = []
        @drinks = Hash.new(0)
    end

    def eat(food)
        foods << food
        "WOOOOOO yum i'm eating #{food}"
    end

    def run(dir)
        raise ArgumentError unless DIRECTIONS.include?(dir)
        "I am running .0000001mph #{dir}"
    end

    private
    def drink(drink, oz)
        drinks[drink] += oz
    end

end