require 'byebug'
require 'singleton'

class BrokenLegError < StandardError; end


module MyEnumerable
  def my_any?(&prc)
    # debugger
    self.my_each do |ele|
      return true if prc.call(ele)
    end
    false
  end

  def test
    puts 'module'
  end

  def my_each
    raise 'Child class needs a my_each method!'
  end
end

class Farm
  include MyEnumerable

  def initialize(animals)
    # @a1, @a2, @a3, @a4 = animals
    @animals = animals
  end

  def my_each(&prc)
    # super
    # prc.call(@a1)
    # prc.call(@a2)
    # prc.call(@a3)
    # prc.call(@a4)
    @animals.each(&prc)
  end
end

class Animal
  attr_reader :name, :pos

  def initialize(name, pos)
    @name = name
    @pos = pos
    @movement = 'moves'
    @noise = 'makes noise'
  end

  def move(distance)
    new_pos = @pos + distance
    puts "#{@name} #{@movement} from #{@pos} to #{new_pos}."
    @pos = new_pos
  end

  def make_noise
    puts "#{self.name} #{@noise}."
  end

  def test
    puts 'parent'
  end

end


class Horse < Animal
  include MyEnumerable

  def initialize(name, pos, age)
    super(name, pos)
    @movement = 'gallops'
    @noise = 'neighs'
    @age = age
    @broken_leg = false
  end

  def break_leg
    @broken_leg = true
    puts "#{name} didn't see that hole coming!"
  end

  def heal_leg
    @broken_leg = false
    puts "Thank goodness for modern medicine"
  end

  def move(distance)
    raise BrokenLegError, "#{name} cannot run because their leg is broken!" if @broken_leg
    super
  end

  protected
  
  def test
    super
  end

  def other_test
    puts 'hellloooooooo'
  end
  attr_reader :name


end

class Cat < Animal
  def initialize(name, pos)
    super
    @movement = 'sneaks'
    @noise = 'meows'
  end
end

class Dog < Animal
  def initialize(name, pos)
    super
    @movement = 'runs'
    @noise = 'woofs'
  end
end

class Duck < Animal
  def initialize(name, pos)
    super
    @movement = 'waddles'
    @noise = 'quacks'
  end
end

class NullAnimal < Animal
  include Singleton

  def initialize(name = '', pos = nil)
   super
   @movement = ''
   @noise = ''
  end

  def make_noise

  end
end


# puts $PROGRAM_NAME
# puts '-----'
# puts __FILE__

if $PROGRAM_NAME == __FILE__
  # boxer_pos = 0
  # clover_pos = 3
  # jessie_pos = 1
  # snowball_pos = 2
  # fluffy_pos = 4
  # snowball_pos = move('Snowball', 'pig', snowball_pos, -3)
  # clover_pos = move('Clover', 'horse', clover_pos, -2)
  # make_noise('Jessie', 'dog')
  # jessie_pos = move('Jessie', 'dog', jessie_pos, -2)
  # make_noise('Snowball', 'pig')
  # snowball_pos = move('Snowball', 'pig', snowball_pos, -1)
  # fluffy_pos = move('Fluffy', 'cat', fluffy_pos, 4)
  # make_noise('Fluffy', 'cat')


  fluffy = Cat.new("Fluffy", 4)
  clover = Horse.new("Clover", 3, 5)
  scratchy = Cat.new("Scratchy", 2)
  hidalgo = Horse.new("Hidalgo", 1, 4)
  sparky = Dog.new("Sparky", 5)
  ketchup = Duck.new('Ketchup', 0)

  fluffy.move(4)
  fluffy.make_noise
  clover.move(-1)
  clover.make_noise
  # puts clover.name
  clover.break_leg
  begin
    clover.move(5)
  rescue BrokenLegError => err
    # puts err
    clover.heal_leg
    retry
  rescue RunTimeError
  ensure
    clover.make_noise
  end

  puts '---------------'
  stable = Array.new(10) { NullAnimal.instance }
  stable[0] = fluffy
  stable[7] = ketchup

  farm = Farm.new(stable)
  farm.my_each do |animal|
    puts animal.object_id
  end  

  #  bool = farm.my_any? do |animal|
  #   # debugger
  #   animal.class.name == 'Horse'
  # end

  # puts bool

  # hidalgo.other_test
end