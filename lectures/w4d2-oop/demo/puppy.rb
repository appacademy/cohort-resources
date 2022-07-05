require_relative 'animal.rb'

module Cuddleable
    # def name
    #     raise Error.new("implement a #name method you dumbo")
    # end

    def cuddle
        puts "#{name} is so cute!"
    end
end

class Puppy < Animal
    include Cuddleable
    def initialize(color, sound_verb, move_verb, name, pos)
        super(name, pos)
        @color = color
        @sound = sound_verb
        @move = move_verb
    end

    def sound
        super(@sound)
    end

    def name
        super
    end

    def greet(other_pup)
        puts "#{name} and #{other_pup.name} sniff and wag tails"
        # other_pup.pos = 56
    end

    def +(other_puppy)
        pos + other_puppy.pos
    end
end