require 'byebug'

class Dog
    attr_reader :name, :age
    TRICKS = [:run, :fetch, :roll, :bite, :woof]

    def self.learn_trick(trick)
        define_method(trick) do |num|
            puts "#{name} is #{trick}ing #{num} times."
        end
    end

    def initialize(name, age)
        @name = name
        @age = age
    end

    def method_missing(method_name, *args)
        if TRICKS.include?(method_name)
            self.class.learn_trick(method_name)
            self.send(method_name, *args)
        else
            super
        end
    end
end

# define_method(trick) { |num| stuff } == def trick(num); stuff; end

fido = Dog.new('Fido', 4)
Dog.learn_trick('jump')
fido.jump(4)
fido.roll(2)
fido.roll(3)
fido.banana(10)