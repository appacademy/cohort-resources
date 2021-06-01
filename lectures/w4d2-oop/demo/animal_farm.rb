#!/usr/bin/env ruby

class Farm
  def initialize(animals)
    # expecting an array of animals
    @animals = animals
    # @a1, @a2, @a3 = animals
  end

  def each(&blk)
    # yield @a1
    # yield @a2
    # yield @a3
    @animals.each(&blk)
  end
end

class Animal
  def initialize(name, pos)
    @name = name
    @pos = pos
  end

  def move(distance)
    new_pos = @pos + distance

    puts "#{@name} #{movement} from #{@pos} to #{new_pos}."
    @pos = new_pos
  end

  def make_noise
    puts "#{@name} #{noise}"
  end
end

class Horse < Animal

  def movement
    "gallops"
  end

  def noise
    "neighs"
  end
end

class Pig < Animal
  def movement
    "trots"
  end

  def noise
    "oinks"
  end
end

class Dog < Animal
  def movement
    "zooms"
  end

  def noise
    "barks"
  end
end

class Duck < Animal
  def movement
    "waddles"
  end

  def noise
    "quacks"
  end
end

class Dinosaur < Animal

  # 1. overwrite(replace) move superclass method
  # 2. do its own thing ex: print loudly
  # 3. call super, to use superclass method
  def move(distance)
    print "Loudly, "
    # super called with no args => implicitly pass distance to superclass move method
    super

    # super called with args => explicity call superclass method with args
    # super(500)

    # do your own thing (don't want to puts anything, dont call super)
    # new_pos = @pos + distance
    # @pos = new_pos
  end

  def movement
    "tramples"
  end

  def noise
    "rawrs"
  end
end

# checks if code is being directly run, wont run if required by another file
# if I run ruby animal_farm.rb -- then this shoulod return true
# if I had another file and it require_relative'd this, and ran ruby another_file.rb, it would not run
if $PROGRAM_NAME == __FILE__ 
  mayo = Horse.new("Mayo", 3)
  megahan = Pig.new("Megahan", 2)
  bud = Dog.new("Bud", 1)
  donald = Duck.new("Donald", 4)
  blue = Dinosaur.new("Blue", -100000000)

  mayo.move(-3)
  megahan.move(5)
  bud.move(1)
  donald.move(-45)
  blue.move

  farm = Farm.new([mayo, megahan, bud, donald, blue])

  farm.each(&:make_noise)
end