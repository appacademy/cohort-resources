require_relative 'animal'

class Cat < Animal
    def initialize(name, fur_color)
        super(name)
        @fur_color = fur_color
    end

    def introduce
        puts "#{name} meow"
    end

    # def eat(food)
    #     puts "*#{name} eats the #{food}*"
    # end

    private
    attr_reader :name
end