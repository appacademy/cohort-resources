require_relative "animal.rb"

class Chicken < Animal

    def introduce
        puts "#{name} cluck cluck"
    end

    def attack(other_animal)
        puts "#{name} pecks #{other_animal.name}"
    end

    def eat(food)
        super()
        puts "it was not successfull, the item was to big so now it pecks the #{food} and tries to eat it*"
    end

    def walk
        super
        puts "that was a wierd chicken walk"
    end
end

henry = Chicken.new("Henry")
# henry.eat("corn")
p henry.job
