require 'singleton'

class BrokenLegError < StandardError; end

module MyEnumerable
  def test
    puts 'module'
  end

  def my_any(&prc)
    self.my_each do |ele|
      return true if prc.call(ele)
    end
    false
  end

  def my_each(&prc)
    raise "Class that includes module needs a my_each method!!!"
  end
end

class Farm
  include MyEnumerable
  def initialize(animals)
    # @a1, @a2, @a3, @a4, @a5 = animals
    @animals = animals
  end

  def my_each(&prc)
    # yield @a1
    # yield @a2
    # yield @a3
    # yield @a4
    # yield @a5
    @animals.each(&prc)
  end

end

class Animal
  include MyEnumerable
  attr_reader :name
  def self.eat
    puts 'Tummy full'
  end

  def initialize(name, pos)
    @name = name
    @pos = pos
  end

  def move(distance)
    new_pos = @pos + distance
    puts "#{@name} #{self.movement} from #{@pos} to #{new_pos}"
    @pos = new_pos
  end

  def movement
    'moves'
  end

  def make_noise
    puts "#{@name} #{noise}"
  end

  # def test
  #   puts 'Class'
  # end

end

class Horse < Animal
  # include MyEnumerable

  def initialize(name, pos)
    super(name, pos)
    @broken_leg = false
  end

  def movement
    'gallops'
  end

  def noise
    'neighs'
  end

  def break_leg
    @broken_leg = true
    puts "#{@name} didn't see that hole coming!"
  end

  def heal_leg
    @broken_leg = false
    puts "Thank goodness for modern medicine!"
  end

  def move(distance)
    raise BrokenLegError, "#{@name}'s leg is broken" if @broken_leg
    super(distance)
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
    "oinks"
  end
end


class Dog < Animal
  def initialize(name, pos)
    super(name, pos)
    # super()
  end

  def movement
    'runs'
  end

  def noise
    'barks'
  end
end

class Duck < Animal

  def movement
    'waddles'
  end

  def noise
    'quacks'
  end
end

class Goat < Animal

  def movement
    'wanders'
  end

  def noise
    'bleets'
  end
end

class NullAnimal < Animal
  include Singleton
  def initialize(name = '', pos = nil)
    super
  end

  def move(distance)
    puts ''
  end

  def movement
    ''
  end

  def noise
    ''
  end
end


if $PROGRAM_NAME == __FILE__
  boxer = Horse.new('Boxer', 0)
  clover = Horse.new('Clover', 3)
  jessie = Dog.new('Jessie', 1)
  snowball = Pig.new('Snowball', 2)
  napoleon = Pig.new('Napolean', 4)
  daffy = Duck.new('Daffy', 5)
  muriel = Goat.new('Muriel', 3)

  boxer.break_leg
  begin
    boxer.move(2)
  rescue BrokenLegError => err
    # puts err.message
    boxer.heal_leg
    retry
  ensure
    boxer.make_noise
  end
  # boxer.heal_leg

  # p muriel.class

  # snowball.move(-3)
  # clover.move(-2)
  # jessie.make_noise
  # jessie.move(-2)
  # snowball.make_noise
  # snowball.move(-1)
  # napoleon.move(-2)
  # napoleon.make_noise
  # muriel.move(2)

  puts '----------------'

  # farm = Farm.new([
  #   boxer, clover, jessie, snowball, napoleon, daffy, muriel
  # ])

  stable = Array.new(10) { NullAnimal.instance }
  stable[0] = clover
  stable[7] = napoleon

  farm = Farm.new(stable)
  # farm.my_each do |animal|
  #   puts animal.object_id
  # end

  # farm.my_each(&:make_noise)

  # boxer.test

  # p farm.my_any { |animal| animal.name == "Clover" }

  # Animal.eat
  # Horse.eat
end