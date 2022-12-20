require_relative "animal"
require "../modules"

class Dog < Animal
    attr_reader :tricks, :breed

    def initialize(name, breed)
        super(name)
        @name = name
        @breed = breed
        @tricks = []
    end

    def introduce
        puts "#{name} bork bork"
    end

    def fetch(item)
        puts "#{name} excitedly fetches #{item} and wants you to throw it again"
    end

    def sniff(other_dog)
        puts "#{name} sniffs #{other_dog.name}'s butt. interesting."
    end

    def learn_trick(trick1, trick2)
        super()
        tricks << trick2
    end
end

fido = Dog.new("Fido", "Beagle")
fido.introduce