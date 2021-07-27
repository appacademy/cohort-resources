require "byebug"

# def move(name, animal_type, old_pos, distance)
#   new_pos = old_pos + distance
#   verb = case animal_type
#   when "Puppy"
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


# move(puppy_name,animal_1_type,old_pos,distance)
# move(bear_name,animal_2_type,old_pos1,distance1)
# make_noise(bear_name, animal_2_type)

class Puppy
  
  def initialize(name, position)
    @name = name
    @position = position
  end

  def yelps
    puts "#{name} yelps"
  end
  
  def scrambles(new_pos)
    puts "#{name} scrambles from #{position} to #{new_pos}"
  end
  
  def greets(other_puppy)
    puts "#{self.name} and #{other_puppy.name} sniff and tackle"
  end
  
  protected
  # protected allows an explicit receiver within the class definition
  # (can be called on implicit OR explicit self, or other isntances)
  attr_accessor :name
  
  private
  # private does NOT allow an explicit receiver, and may only be called
  # using the IMPLICIT self
  attr_accessor :position
end

class Bear

  def initialize(name, position)
    @name = name
    @position = position
  end

  def roar
    puts "#{name} roars"
  end

  def motorcycles(new_pos)
    puts "#{name} motorcycles from #{position} to #{new_pos}"
  end

  private
  attr_reader :name, :position
end

class Duck

  def initialize(name, position)
    @name = name
    @position = position
  end

  def quack
    puts "#{name} quacks"
  end

  def waddles(new_pos)
    puts "#{name} waddles from #{position} to #{new_pos}"
  end

  private
  attr_reader :name, :position
end

snoopy = Puppy.new("Snoopy", 0)
# snoopy.yelps
# snoopy.scrambles(18)
# p snoopy.name = "Snoop"

lola = Puppy.new("Lola", 0)
# snoopy.greets(lola)

alvin = Bear.new("Alvin", 0)
alvin.motorcycles(25)

daffy = Duck.new("Daffy", 0)
daffy.waddles(17)
daffy.name