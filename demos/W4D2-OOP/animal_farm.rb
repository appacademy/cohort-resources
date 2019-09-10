class Farm
    def initialize(animals)
        @animal1, @animal2, @animal3, @animal4, @animal5 = animals
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

  def gallop(distance)
    new_pos = @pos + distance
    puts "#{@name} gallops from #{@pos} to #{new_pos}."
    @pos = new_pos
  end

  def neigh
    puts "#{@name} neighs."
  end
end


class Pig
  def initialize(name, pos)
    @name = name
    @pos = pos
  end

  def trot(distance)
    new_pos = @pos + distance
    puts "#{@name} trots from #{@pos} to #{new_pos}."
    @pos = new_pos
  end

  def oink
    puts "#{@name} oinks."
  end
end


class Dog
  def initialize(name, pos)
    @name = name
    @pos = pos
  end

  def run(distance)
    new_pos = @pos + distance
    puts "#{@name} runs from #{@pos} to #{new_pos}."
    @pos = new_pos
  end

  def bark
    puts "#{@name} barks."
  end
end



boxer = Horse.new('Boxer', 0)
clover = Horse.new('Clover', 3)
jessie = Dog.new('Jessie', 1)
snowball = Pig.new('Snowball', 2)
napoleon = Pig.new('Napoleon', 4)

snowball.trot(-3)
clover.gallop(-2)
jessie.bark
jessie.run(-2)
snowball.oink
snowball.trot(-1)
napoleon.trot(-2)
napoleon.oink

puts "----------------------"

my_farm = Farm.new([snowball, clover, jessie, napoleon, boxer])
my_farm.each do |animal|
    case animal
    when Horse
        animal.neigh
    when Pig
        animal.oink
    when Dog
        animal.bark
    end
end