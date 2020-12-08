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
#   when "puppy"
#     "yelp"
#   end

#   puts "#{name} #{verb}"
# end

# puppy_name = "goodest doggo"
# animal_1_type = "puppy"
# old_pos = 0 
# distance = 10 #miles

# bear_name = "Misha"
# animal_2_type = "Bear"
# old_pos1 = 0 
# distance1 = 30

# # move(puppy_name,animal_1_type,old_pos,distance)
# # move(bear_name,animal_2_type,old_pos1,distance1)

# #puppy 
# #bear 
# #pangolin

#Object Oriented 

class Farm 
  def initialize(animals)
    @animals = animals
  end

  def each_animal(&blk)
    @animals.each(&blk)
  end
end

class Puppy
  def initialize(name,pos)
    @name = name
    @pos = pos
  end

  def yelp
    puts "#{@name} Yelps"
  end

  def scrambles
    puts "#{@name} Scrambles"
  end

  def greet(other_pup)
    puts "#{name} and #{other_pup.name} snif and tackle"
  end

  def change_name_at_adoption 
    #we change the name of the puppy 
  end

  protected # allows an explicit receiver of the same class type
  attr_reader :pos, :name

  private # does not allow an explicit receiver
  attr_writer :name, :pos

end

class Bear 
  def initialize(name,pos)
    @name = name 
    @pos = pos
  end

  def roars 
    puts "#{@name} Roars"
  end

  def motorcycles
    puts "#{@name} motorcycles"
  end

end

# titus = Puppy.new("Titus", 0)
# titus.yelp
# titus.scrambles

# misha = Bear.new("Misha", 0)
# misha.roars
# misha.motorcycles

titus = Puppy.new("Titus", 0)
obi = Puppy.new("Obi", 0)
misha = Bear.new("Misha", 0)

farm = Farm.new([titus,obi,misha])

farm.each_animal do |animal|
  case animal
  when Puppy
    animal.yelp
  when Bear
    animal.roars
  end
end



