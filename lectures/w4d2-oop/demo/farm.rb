require 'singleton'

module MyEnumerable

  def my_any(&prc)
    self.my_each do |el|
      return true if prc.call(el)
    end
    false
  end

  def my_each(&prc)
    raise "Including class needs a my_each method!"
  end

end

class Farm 

  include MyEnumerable

  # attr_reader :a1
  def initialize(animals)
    # @a1, @a2, @a3, @a4, @a5 = animals
    @animals = animals
  end

  def my_each(&blk)
    # yield @a1
    # yield @a2
    # yield @a3
    # yield @a4
    # yield @a5
    @animals.each(&blk)
  end

end

class Animal 

  attr_reader :name, :pos

  def initialize(name, pos)
    @name = name
    @pos = pos
  end

  def move(distance)
    new_pos = pos + distance

    puts "#{name} #{movement} from #{pos} to #{new_pos}."
    @pos = new_pos
  end

  def make_noise
    puts "#{name} #{noise}."
  end

  def movement
    'moves'
  end

  def noise
    'speaks'
  end

end


class Horse < Animal

  def initialize(name, pos)
    super(name, pos)
  end

  def movement
    'gallops'
  end
  
  def noise
    'neighs'
  end
  
end

class Pig < Animal

  def initialize(name, pos)
    super
  end
  
  def movement
   'trots'
  end

  def noise
    'oinks'
  end
 
end

class Dog < Animal
  attr_reader :breed
  def initialize(name, pos, breed)
    super(name, pos)
    @breed = breed
  end

  def movement
    'runs'
  end
  
  def noise
    'barks'
  end
end

class Duck < Animal

  def move(distance)
    print 'Slowly, '
    super 
    #calls the parent's version of move
    #implicitly passes up all args
  end 

  def movement
    'waddles'
  end

  def noise
    'quacks'
  end
end

class NullAnimal < Animal

  include Singleton

  def initialize; end

  def move(distance)
    puts ' '
  end

  def make_noise
    puts ' '
  end

end

# def move(name, animal_type, old_pos, distance)
#   new_pos = old_pos + distance

#   verb = case animal_type
#     when 'horse'
#       'gallops'
#     when 'pig'
#       'trots'
#     when 'dog'
#       'runs'
#     end
    
#     puts "#{name} #{verb} from #{old_pos} to #{new_pos}."
#     new_pos
# end

# def make_noise(name, animal_type)
#   verb = case animal_type
#     when 'horse'
#       'neighs'
#     when 'pig'
#       'oinks'
#     when 'dog'
#       'barks'
#     end

#     puts "#{name} #{verb}"
# end


# boxer_pos = 0
# clover_pos = 3
# jessie_pos = 1
# snowball_pos = 2

# snowball_pos = move('Snowball', 'pig', snowball_pos, -3)
# clover_pos = move('Clover', 'horse', clover_pos, -2)
# make_noise('Jessie', 'dog')
# jessie_pos = move("Jessie", 'dog', jessie_pos, 3)
# make_noise('Snowball', 'pig')
# snowball_pos = move('Snowball', 'pig', snowball_pos, -1)

boxer = Horse.new('Boxer', 0)
clover = Horse.new('Clover', 3)
jessie = Dog.new('Jessie', 1, 'Border Collie')
snowball = Pig.new('Snowball', 2)
napoleon = Pig.new('Napoleon', 4)
ranimal = Animal.new('Rando', 5)
daffy = Duck.new('Daffy', 6)
null = NullAnimal.instance
# test_horse = Horse.instance('Joe', 7)

snowball.move(-3)
clover.move(-2)
jessie.make_noise
jessie.move(2)
snowball.make_noise
snowball.move(-1)
napoleon.move(3)
napoleon.make_noise
boxer.make_noise
daffy.move(-2)
daffy.make_noise
ranimal.move(3)
ranimal.make_noise
null.move(7)

puts jessie.breed

puts '-------------------------'

farm = Farm.new([
  boxer,
  clover,
  jessie,
  null,
  snowball,
  napoleon,
  daffy,
  ranimal
])

farm.my_each(&:make_noise)

p farm.my_any { |animal| animal.name == "Boxer" }

# puts farm.a1

# farm.each do |animal|
#   case animal
#   when Horse
#     animal.neigh
#   when Pig
#     animal.oink
#   when Dog
#     animal.bark
#   when Duck
#     animal.quack
#   end
# end