require_relative "./dog.rb"
require_relative "dog.rb"

class Person
    def initialize 
        @dog =  Dog.new("Fox", "black")
    end
end