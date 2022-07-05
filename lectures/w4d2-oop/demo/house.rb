require_relative 'kitten.rb'
require_relative 'puppy.rb'
require_relative 'null_animal.rb'

class House
    include Enumerable
    def initialize(*pets)
        @pets = pets
    end

    def each(&prc)
        @pets.each {|pet| prc.call(pet)}
        # @pets.each do |pet|
            # pet.sound
            # pet.sound
            # case pet
            # when Kitten
            #     pet.meow
            # when Puppy
            #     pet.bark
            # end
        # end
    end
end

toula = Puppy.new('blue', 'bark', 'run', 'Toula', 0)
phoebe = Puppy.new('black', 'howl', 'roll', "Phoebe", 0)
# whiskers = Kitten.new("Mr. Whiskers")
# olga = Kitten.new("Olga")

h = House.new(toula, phoebe, NullAnimal.instance, NullAnimal.instance)
# p h.any? {|pet| pet.is_a?(Puppy)}
h.each {|pet| p pet.object_id}
# p h.sum(0) {|pet| pet.pos}