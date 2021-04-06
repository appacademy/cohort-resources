require 'byebug'
# Inheritance

class Animal 

    def initialize(name, pos)
        # debugger
        @name = name
        @pos = pos
    end

    def make_noise
        puts "#{name} #{noise}" 
    end

    def moves(new_pos)
        debugger
        puts "#{name} #{movement} from #{pos} to #{new_pos}"
    end

end

class Puppy < Animal

  def initialize(name, pos, coat_color)
    # @name = name 
    # @pos = pos
    # debugger
    # super() doesn't work in this case
    super(name, pos)
    # debugger
    @coat_color = coat_color
  end

  def noise 
    "yelps"
  end 

  def movement
    debugger
    "scrambles"
  end

#   def yelp 
#     puts "#{name} yelps"
#   end

#   def make_noise 
#     puts "#{name} yelps"
#   end

#   def scrambles(new_pos)
#     puts "#{name} scrambles from #{pos} to #{new_pos}"
#   end

#   def moves(new_pos)
#     puts "#{name} scrambles from #{pos} to #{new_pos}"
#   end

  def greet(other_pup)
    puts "#{name} and #{other_pup.name} sniff and tackle"
  end

  protected # allows for explicit receiver in the class definition
  attr_reader :name

  private # does not allow for a explicit receiver, may only be called using implicit self
  attr_reader :pos

end

class Bear < Animal

  def initialize(name, pos)
    # @name = name
    # @pos = pos
    # debugger
    super
    # debugger
  end

  def noise
    "roars"
  end

  def movement
    "motorcycles"
  end

#   def roars 
#     puts "#{name} roars"
#   end

#   def make_noise 
#     puts "#{name} roars"
#   end


#   def motorcycles(new_pos)
#     puts "#{name} motorcycles from #{pos} to #{new_pos}"
#   end

#   def moves(new_pos) 
#     puts "#{name} motorcycles from #{pos} to #{new_pos}"
#   end


  private # does not allow for a explicit receiver, may only be called using implicit self
  attr_reader :name, :pos

  def fur 
    "brown"
  end

end

class Farm 

  def initialize(animals)
    @animals = animals 
    # @a1, @a2, @a3 = animals
  end

  def each_animals(&blk)
    @animals.each(&blk)
    # yield @a1
    # yield @a2
    # yield @a3
  end

end 

alvin = Bear.new("Alvin", 0)
# alvin.roars
# alvin.motorcycles(46)
# p alvin.pos

snoop = Puppy.new("Snoop", 0, "caramel")
# snoop.yelp 
# snoop.scrambles(18)
# p snoop.name

mocha = Puppy.new("Mocha", 0, "brown")

# snoop.greet(mocha)
# p mocha.name


farm = Farm.new([snoop, mocha, alvin])
farm.each_animals do |animal|
#   case animal
#   when Puppy 
#     animal.yelp
#   when Bear
#     animal.roars
#   end
    animal.make_noise
    animal.moves(27)
end