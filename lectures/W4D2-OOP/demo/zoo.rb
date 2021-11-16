require_relative './animals/animals.rb'

class Zoo
    def initialize
        @dog = Dog.new("Fido")
        @cat = Cat.new("Ralph", "calico")
    end

    def view
        p self
    end
end

Zoo.new.view