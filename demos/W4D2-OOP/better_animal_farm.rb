class Farm
    def initialize(animals)
        # @animal1, @animal2, @animal3, @animal4, @animal5 = animals
        @animals = animals
    end

    def each(&blk)
        @animals.each(&blk)
    end
    
    # yield is equivalent to blk.call

    # def each
    #     yield(@animal1)
    #     yield(@animal2)
    #     yield(@animal3)
    #     yield(@animal4)
    #     yield(@animal5)
    # end
end


class Horse
  def initialize(name, pos)
    @name = name
    @pos = pos
  end

  def move(distance)
    new_pos = @pos + distance
    puts "#{@name} gallops from #{@pos} to #{new_pos}."
    @pos = new_pos
  end

  def make_noise
    puts "#{@name} neighs."
  end
end


class Pig
  def initialize(name, pos)
    @name = name
    @pos = pos
  end

  def move(distance)
    new_pos = @pos + distance
    puts "#{@name} trots from #{@pos} to #{new_pos}."
    @pos = new_pos
  end

  def make_noise
    puts "#{@name} oinks."
  end
end


class Dog
  def initialize(name, pos)
    @name = name
    @pos = pos
  end

  def move(distance)
    new_pos = @pos + distance
    puts "#{@name} runs from #{@pos} to #{new_pos}."
    @pos = new_pos
  end

  def make_noise
    puts "#{@name} barks."
  end
end


boxer = Horse.new('Boxer', 0)
clover = Horse.new('Clover', 3)
jessie = Dog.new('Jessie', 1)
snowball = Pig.new('Snowball', 2)
napoleon = Pig.new('Napoleon', 4)

snowball.move(-3)
clover.move(-2)
jessie.make_noise
jessie.move(-2)
snowball.make_noise
snowball.move(-1)
napoleon.move(-2)
napoleon.make_noise

puts "----------------------"

my_farm = Farm.new([snowball, clover, jessie, napoleon, boxer])
my_farm.each(&:make_noise)

# my_farm.each do |animal|
#     animal.make_noise #no more type-checking logic
# end
