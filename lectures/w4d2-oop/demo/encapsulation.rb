# require "byebug"

# def move(name, animal_type, old_pos, distance)
#   new_pos = old_pos + distance
#   verb = case animal_type
#   when "Puppy" # if animal_type == "Puppy"
#     "scramble"
#   when "Bear" # elsif animal_type == "Bear"
#     "juggles and rides motorcycle"
#   end
#   puts "#{name} #{verb} from #{old_pos} to #{new_pos}"
# end

# def make_noise(name, animal_type)
#   verb = case animal_type
#   when "Puppy"
#     "yelps"
#   when "Bear"
#     "roar"
#   end

#   puts "#{name} #{verb}"
# end

# puppy_name = "Lola"
# animal_1_type = "Puppy"
# old_pos = 0 
# distance = 10 #miles

# bear_name = "Misha"
# animal_2_type = "Bear"
# old_pos1 = 0 
# distance1 = 30

# tiger_name = 'Sher Kahn'
# animal_3_type = "Tiger"
# old_pos2 = 0
# distance2 = 100

# move(puppy_name,animal_1_type,old_pos,distance)
# move(bear_name,animal_2_type,old_pos1,distance1)
# make_noise(bear_name, animal_2_type)

class Puppy
    def initialize(name, pos = 0)
        @name = name
        @pos = pos
    end

    def bark
        puts "#{self.name} barks"
    end

    def scramble(dist)
        puts "#{name} scrambles from #{pos} to #{pos + dist}"
        self.pos = pos + dist
    end

    def greet(other_pup)
        puts "#{name} and #{other_pup.name} sniff and wag tails"
        # other_pup.pos = 56
    end

    # private # no access from outside the class definition, also prevents calling with explicit receiver (except writers - has to be explicit self)
    protected # no access from outiside the class definition
    attr_reader :name, :pos
    attr_writer :pos
end

toula = Puppy.new("Toula")
phoebe = Puppy.new("Phoebe")
toula.bark
toula.scramble(15)
toula.greet(phoebe)
# toula.name

# def do_something(val)
#     case val
#     when (0..9)
#         p "I'm one digit"
#     when (10..99)
#         p "I'm two digits"
#     end
# end