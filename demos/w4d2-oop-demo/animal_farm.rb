​def move(name, animal_type, old_pos, distance)
  new_pos = old_pos + distance
  verb = case animal_type
  when 'horse'
    'gallops'
  when 'pig'
    'trots'
  when 'dog'
    'runs'
  end
​
  puts "#{name} #{verb} from #{old_pos} to #{new_pos}."
  new_pos
end
​
def make_noise(name, animal_type)
  verb = case animal_type
  when 'horse'
    'neighs'
  when 'pig'
    'oinks'
  when 'dog'
    'barks'
  end
​
  puts "#{name} #{verb}."
end
​
​
boxer_pos = 0
clover_pos = 3
jessie_pos = 1
snowball_pos = 2
napolean_pos = 6
​
snowball_pos = move('Snowball', 'pig', snowball_pos, -3)
clover_pos = move('Clover', 'horse', clover_pos, -2)
make_noise('Jessie', 'dog')
jessie_pos = move('Jessie', 'dog', jessie_pos, -2)
make_noise('Snowball', 'pig')
snowball_pos = move('Snowball', 'pig', snowball_pos, -1)
make_noise('Napolean', 'pig')
napolean_pos = move('Napolean', 'pig', napolean_pos, 4)