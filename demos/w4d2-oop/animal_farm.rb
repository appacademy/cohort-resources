require 'singleton'
#!/usr/bin/env ruby

## Procedural Code

module MyEnumerable
  def each(&prc)
    @animals.each { |animal| prc.call(animal) }
  end

end

class Farm
  include MyEnumerable

  def initialize(animals)
    @animals = animals
  end

  # def each(&prc)
  #   @animals.each { |animal| prc.call(animal) }
  # end
end

class Animal
  def initialize(name = '', pos = 0)
    @name = name
    @pos = pos
  end

  def move(distance)
    new_pos = pos + distance
    print "#{name} #{movement} from #{pos} to #{new_pos}"
    self.pos = new_pos
  end

  def make_noise
    puts "#{name} #{noise}!!!"
  end

  private
  attr_accessor :name, :pos

  def movement
    'moves'
  end

  def noise
    'makes noise'
  end
end

class NullAnimal < Animal
  include Singleton

  # def initialize
  #   super('', 0)
  # end

  def move(distance)
    '' 
  end

  def make_noise
    '' 
  end
end

class BrokenLegError < StandardError ; end

class Horse < Animal

  # def move(distance)
  #   new_pos = pos + distance
  #   puts "#{name} gallops from #{pos} to #{new_pos}."
  #   self.pos = new_pos # ruby thinks we are creating a new local variable 
  #                      # (if not using explicit self)
  #                      # can use explicit self for writers only (if private)
  # end
  def initialize(name, pos)
    super
    @broken = false
  end

  def break_leg
    puts "#{name} didn't see that hole coming."
    self.broken = true
  end

  def heal_leg
    puts "Thank goodness for modern medicine!"
    self.broken = false
  end

  def move(distance)
    begin
      raise BrokenLegError if broken
      super # <= same as super(distance)
      puts ", quickly!"
    rescue BrokenLegError
      heal_leg
      retry
    ensure
      make_noise
    end
  end

  private
  attr_accessor :name, :pos, :broken # cannot call these methods with explicit self; 
                            # ex: self.pos
  def movement
    'gallops'
  end

  def noise
    'neighs'
  end
end

class Dog < Animal

  # def move(distance)
  #   new_pos = pos + distance
  #   puts "#{name} runs from #{pos} to #{new_pos}."
  #   self.pos = new_pos # ruby thinks we are creating a new local variable 
  #                      # (if not using explicit self)
  #                      # can use explicit self for writers only (if private)
  # end

  # def greet(other_dog)
  #   puts "#{name} and #{other_dog.name} lick each other."
  # end

  def move(distance)
    super
    puts '.'
  end

  protected
  attr_accessor :name, :pos # cannot call these methods with explicit self; 
                            # ex: self.pos

  def movement
    'runs'
  end

  def noise
    'barks'
  end
end

clover = Horse.new('Clover', 3)
jesse = Dog.new('Jesse', 1)
bingo = Dog.new('Bingo', 0)
null1 = NullAnimal.instance # #instance does not take in arguments
null2 = NullAnimal.instance # #instance does not take in arguments
# p null1 == null2 # returns true, all point to same instance of NullAnimal
stable = Array.new(5) { NullAnimal.instance }
# p stable[0] == NullAnimal.instance # returns true
stable[0] = clover # element at idx(0) is reassigned, all other idx still point to NullAnimal instance
farm = Farm.new(stable)
clover.break_leg
# farm.each(&:make_noise) 
farm.each { |animal| animal.move(4) } 
# clover.move(5)


# clover.gallop(-2)
# clover.neigh
# clover.name = "B0b" # cannot do when accessor is private, 
                      # trying to access name outside of the class
# jesse.run(4)
# jesse.bark
# jesse.greet(bingo)







# def move(name, animal_type, old_pos, distance)
#   new_pos = old_pos + distance
#   verb = case animal_type
#   when 'horse'
#     'gallops'
#   when 'pig'
#     'trots'
#   when 'dog'
#     'runs'
#   end

#   puts "#{name} #{verb} from #{old_pos} to #{new_pos}."
#   new_pos
# end

# def make_noise(name, animal_type)
#   verb = case animal_type
#   when 'horse'
#     'neighs'
#   when 'pig'
#     'oinks'
#   when 'dog'
#     'barks'
#   end

#   puts "#{name} #{verb}."
# end


# boxer_pos = 0
# clover_pos = 3
# jessie_pos = 1
# snowball_pos = 2
# napolean_pos = 6

# snowball_pos = move('Snowball', 'pig', snowball_pos, -3)
# clover_pos = move('Clover', 'horse', clover_pos, -2)
# make_noise('Jessie', 'dog')
# jessie_pos = move('Jessie', 'dog', jessie_pos, -2)
# make_noise('Snowball', 'pig')
# snowball_pos = move('Snowball', 'pig', snowball_pos, -1)
# make_noise('Napolean', 'pig')
# napolean_pos = move('Napolean', 'pig', napolean_pos, 4)
