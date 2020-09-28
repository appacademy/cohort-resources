require_relative "./dog.rb"

class Person 
    def initialize(name, age)
        @name = name 
        @age = age 
        @dog = Dog.new("Fox", "Labrador")
    end
end