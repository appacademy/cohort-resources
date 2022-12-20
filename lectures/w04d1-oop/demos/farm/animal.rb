class Animal

    def initialize(name)
        @name = name
        walk #by the time this line runs, module was included in child class
        eat("treat")
    end
    
    def eat(food)
        puts "#{name} eats the #{food}"
    end

    # def walk
    #     puts "#{name} is walking"
    # end

    def learn_trick
        puts "#{name} learned to do a but will forget about it soon"
    end

    protected

    def name
        @name
    end
end


# class Dog < Animal
#     attr_reader :tricks, :breed

#     def initialize(name, breed)
#         super(name)
#         # @name = name
#         @breed = breed
#         @tricks = []
#     end

#     def introduce
#         puts "#{name} bork bork"
#     end

#     def fetch(item)
#         puts "#{name} excitedly fetches #{item} and wants you to throw it again"
#     end

#     def sniff(other_dog)
#         puts "#{name} sniffs #{other_dog.name}'s butt. interesting."
#     end

#     def learn_trick(trick1, trick2)
#         super()
#         tricks << trick2
#     end
# end

# rocky = Dog.new("Rocky", "lab")
# p rocky.name
# p rocky.breed
# rocky.introduce
# rocky.learn_trick("backflip", "roll")
# p rocky.tricks
# p rocky.tricks

# fido = Dog.new("Fido", "husky")
# rocky.sniff(fido)