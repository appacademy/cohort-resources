class Dog
    def initialize(name)
        @name = name
    end

    def introduce
        puts "*#{name} bork bork*"
    end

    def fetch(item)
        puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
    end

    def eat(food)
        puts "*#{self.name} eats the #{food}*"
    end

    def sniff(other_dog)
        puts "*#{name} sniffs #{other_dog.name}'s butt. interesting.*"
    end

    private

    def name
        @name
    end

    # attr_accessor :name

end

fido = Dog.new("Fido")
rocky = Dog.new("Rocky")

fido.introduce
fido.fetch("ball")
fido.eat("treat")
# fido.sniff(rocky)

fido.name # will not work with private or protected
