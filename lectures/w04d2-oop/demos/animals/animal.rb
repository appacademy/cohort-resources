require_relative 'walkable'

class Animal
    include Walkable
    def initialize(name, greeting)
        @name = name
        # @greeting = greeting
    end

    # def introduce
    #     raise 'I need an introduce method defined'
    # end

    def introduce(greeting)
        puts "#{name} #{greeting}!"
    end

    def eat(food)
        puts "*#{name} eats the #{food}*"
    end

    protected
      attr_reader :name


end