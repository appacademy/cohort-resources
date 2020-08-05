class Dog
    attr_reader :name, :age
    # attr_writer :name, :age
    # attr_accessor will define #name, #name=, #age, #age= methods for us
    # attr_accessor :name, :age
    
    def initialize(name, age, favorite_food)
        @name = name
        @age = age
        @favorite_food = favorite_food
    end
    
    def name
        @name + " the best boy"
    end
end

my_dog = Dog.new("Fido", 2, "pizza")

# p my_dog.age
# my_dog.age = 3
# p my_dog.age

p my_dog.name
# my_dog.name = "M"
# p my_dog.name
