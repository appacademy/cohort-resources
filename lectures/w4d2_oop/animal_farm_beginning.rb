require "byebug"

def move(name, animal_type, old_pos, distance)
  new_pos = old_pos + distance
  verb = case animal_type
  when "puppy"
    "scramble"
  when "Bear"
    "juggles and rides motorcycle"
  end
  puts "#{name} #{verb} from #{old_pos} to #{new_pos}"
end

def make_noise(name, animal_type)
  verb = case animal_type
  when "puppy"
    "yelp"
  end

  puts "#{name} #{verb}"
end

puppy_name = "goodest doggo"
animal_1_type = "puppy"
old_pos = 0 
distance = 10 #miles

bear_name = "Misha"
animal_2_type = "Bear"
old_pos1 = 0 
distance1 = 30

# move(puppy_name,animal_1_type,old_pos,distance)
# move(bear_name,animal_2_type,old_pos1,distance1)

#puppy 
#bear 
#pangolin

