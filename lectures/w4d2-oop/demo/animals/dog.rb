#Abstraction Encapsulation Inheritance Polymorphism

require_relative "animal"


class Dog < Animal


    def introduce
        puts "#{name} bork bork"
    end

    def fetch(item)
        puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
    end

    def sniff(other_dog)
        puts "*#{name} sniffs #{other_dog.name}'s butt. interesting.*"
    end

    
end



d = Dog.new("Shiloh")
d.eat("leftovers")
d.walk

