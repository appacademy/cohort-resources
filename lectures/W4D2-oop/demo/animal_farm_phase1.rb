require "byebug"

# def move(name, animal_type, old_pos, distance)
#   new_pos = old_pos + distance
#   verb = case animal_type
#   when "puppy"
#     "scramble"
#   when "Bear"
#     "juggles and rides motorcycle"
#   end
#   puts "#{name} #{verb} from #{old_pos} to #{new_pos}"
# end

# def make_noise(name, animal_type)
#   verb = case animal_type
#   when "Puppy"
#     "yelps"
#   when "Bear"
#     "motorcycles"
#   end


#   puts "#{name} #{verb}"
# end

# puppy_name = "goodest doggo"
# animal_1_type = "Puppy"
# old_pos = 0 
# distance = 10 #miles

# bear_name = "Misha"
# animal_2_type = "Bear"
# old_pos1 = 0 
# distance1 = 30

# move(puppy_name,animal_1_type,old_pos,distance)
# move(bear_name,animal_2_type,old_pos1,distance1)
# make_noise(bear_name, animal_2_type)

class Puppy 

  def initialize(name, pos)
    @name = name 
    @pos = pos
  end

  def yelp 
    puts "#{name} yelps"
  end

  def scrambles(new_pos)
    puts "#{name} scrambles from #{pos} to #{new_pos}"
  end

  def greet(other_pup)
    puts "#{name} and #{other_pup.name} sniff and tackle"
  end

  protected # allows for explicit receiver in the class definition
  attr_reader :name

  private # does not allow for a explicit receiver, may only be called using implicit self
  attr_reader :pos

end

class Bear 

  def initialize(name, pos)
    @name = name
    @pos = pos
  end

  def roars 
    puts "#{name} roars"
  end

  def motorcycles(new_pos)
    puts "#{name} motorcycles from #{pos} to #{new_pos}"
  end

  private # does not allow for a explicit receiver, may only be called using implicit self
  attr_reader :name, :pos

  def fur 
    "brown"
  end

end

snoop = Puppy.new("Snoop", 0)
# snoop.yelp 
# snoop.scrambles(18)
# p snoop.name

mocha = Puppy.new("Mocha", 0)

snoop.greet(mocha)
p mocha.name

alvin = Bear.new("Alvin", 0)
# alvin.roars
# alvin.motorcycles(46)
# p alvin.pos