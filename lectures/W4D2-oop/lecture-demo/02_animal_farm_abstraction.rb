class Puppy
  
  def initialize(name, position)
    @name = name
    @position = position
  end

  def yelps
    puts "#{name} yelps"
  end
  
  def scrambles(new_pos)
    puts "#{name} scrambles from #{position} to #{new_pos}"
  end
  
  def greets(other_puppy)
    puts "#{self.name} and #{other_puppy.name} sniff and tackle"
  end
  
  protected
  # protected allows an explicit receiver within the class definition
  # (can be called on implicit OR explicit self, or other isntances)
  attr_accessor :name
  
  private
  # private does NOT allow an explicit receiver, and may only be called
  # using the IMPLICIT self
  attr_accessor :position
end

class Bear

  def initialize(name, position)
    @name = name
    @position = position
  end

  def roars
    puts "#{name} roars"
  end

  def motorcycles(new_pos)
    puts "#{name} motorcycles from #{position} to #{new_pos}"
  end

  private
  attr_reader :name, :position
end

class Duck

  def initialize(name, position)
    @name = name
    @position = position
  end

  def quack
    puts "#{name} quacks"
  end

  def waddles(new_pos)
    puts "#{name} waddles from #{position} to #{new_pos}"
  end

  private
  attr_reader :name, :position
end

class Farm

  def initialize(animals) # an array is still 1 argument
    # @a1, @a2, @a3 = animals
    @animals = animals
  end

  def animals_each(&prc) # accepts a block, converts to a proc
    # yield @a1  # yield calls the block directly
    # yield @a2
    # yield @a3
    # @animals.each do |animal|
    #   yield animal
    # end
    @animals.each(&prc) # converts the proc BACK to a block to send to .each
  end

end

snoopy = Puppy.new("Snoopy", 0)
# snoopy.yelps
# snoopy.scrambles(18)
# p snoopy.name = "Snoop"

lola = Puppy.new("Lola", 0)
# snoopy.greets(lola)

alvin = Bear.new("Alvin", 0)
# alvin.motorcycles(25)

daffy = Duck.new("Daffy", 0)
# daffy.waddles(17)
# daffy.name

farm = Farm.new([snoopy, lola, alvin])
farm.animals_each do |animal|
  case animal
  when Puppy
    animal.yelps
  when Bear
    animal.roars
  end
end