## Procedural Code
def move(name, animal_type, old_pos, distance)
    new_pos = old_pos + distance
    verb = case animal_type
    when 'pig'
      'trots'
    end
    puts "#{name} #{verb} from #{old_pos} to #{new_pos}."
    new_pos
  end
  def make_noise(name, animal_type)
    verb = case animal_type
    when 'pig'
      'oinks'
    end 
    puts "#{name} #{verb}."
  end
end