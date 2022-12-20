class Animal

    def initialize
        @name = "test"
    end

    def rename(new_name)
        self.name = new_name
    end

    def greet(other_animal)
        p "#{self.name} says hi to #{other_animal.name}"
    end

    # private

    protected

    attr_accessor :name

    # def most_private_method
    #     puts "I'm very private"
    #     puts self.name
    # end

end

a = Animal.new
b = Animal.new

#private
# a.rename("sarah") # private method is called inside of the class definition -> OK!
# a.name = "fail" # private method is called outside of class definition -> NOPE!
# a.greet(b) # private method `name' called for other instance -> Nope!
# p a
# p a.name

#protected
a.rename("sarah") # protected method is called inside of the class definition -> OK!
# a.name = "fail" # protected method is called outside of class definition -> NOPE!
a.greet(b) # protected method is called within to another instance, within the class definition -> OK!
# p a


# class Dog
#     def initialize(name)
#         @name = name
#     end

#     def introduce
#         puts "#{name} bork bork"
#     end

#     def fetch(item)
#         puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
#     end

#     def eat(food)
#         puts "*#{self.name} eats the #{food}*"
#     end

#     def sniff(other_dog)
#         puts "*#{name} sniffs #{other_dog.name}'s butt. interesting.*"
#     end

#     private
#     attr_accessor :name

# end

# rocky = Dog.new("Rocky")
# # rocky.introduce
# # rocky.fetch("ball")
# # rocky.eat("bone")

# goofy = Dog.new("Goofy")
# # rocky.sniff(goofy)

# class Cat
#     def initialize(name)
#         @name = name
#     end

#     def introduce
#         puts "#{name} meow"
#     end

#     def eat(food)
#         puts "*#{name} eats the #{food}*"
#     end

#     private
#     attr_reader :name
# end


# drogo = Cat.new("Drogo")
# drogo.eat("treat")


