require_relative "animal.rb"

class Dog < Animal
    attr_reader :nickname
    def initialize(name, nickname)
        super(name)
        @nickname = nickname
    end

    def introduce
        puts "#{name} bork bork"
    end

    def fetch(item)
        puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
    end

    def sniff(other_dog)
        puts "*#{name} sniffs #{other_dog.name}'s butt. interesting.*"
    end

    # def method_with_all_args
    #     arg1= 1
    #     arg1= 2
    #     arg1= 3
    #     arg1= 4
    #     arg1= 5
    #     super(1,2,3,4,5)
    # end
end

fido = Dog.new("Fido", "good boi")
# p fido.name
# p fido.nickname
p fido.method_with_all_args