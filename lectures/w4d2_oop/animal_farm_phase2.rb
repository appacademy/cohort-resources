class Farm
    def initialize(animals)
        @animals = animals
    end

    def each_animal(&blk)
        @animals.each(&blk)
    end
end

class Pig
    def initialize(name,pos)
        @name = name
        @pos = pos
    end

    def trots(distance)
        new_pos = self.pos + distance # explicit receiver of self: self.pos => 
            # won't work because pos is a private method
        # new_pos = pos + distance # implicit self.pos =>
            # will work with private pos method
        puts "#{@name} trots from #{@pos} to #{new_pos}"
    end

    def oinks
        puts "#{@name} oinks!!!"
    end

    def greet(other_pig)
        puts "#{name} and #{other_pig.name} snout boop"
    end

    protected # allows an explicit receiver of the same class type
    attr_reader :name, :pos

    private # does not allow an explicit receiver
    attr_writer :name, :pos
end
  
class Narwal
    def initialize(name,pos)
        @name = name
        @pos = pos
    end

    def swim(distance)
        new_pos = @pos + distance
        puts "#{@name} swims from #{@pos} to #{new_pos}"
    end

    def bloop
        puts "#{@name} bloops!!!"
    end
end

class Ostrich
    def initialize(name,pos)
        @name = name
        @pos = pos
    end

    def charge(distance)
        new_pos = @pos + distance
        puts "#{@name} charges from #{@pos} to #{new_pos}"
    end

    def reeee
        puts "#{@name} reeees!!!"
    end
end

jerry = Ostrich.new('Jerry',0)
# jerry.reeee
# jerry.charge(10)

seacorn = Narwal.new('Seacorn',0)
# seacorn.bloop
# seacorn.swim(10)

porkchop = Pig.new('Porkchop',0)
# porkchop.oinks
# porkchop.trots(10)

napolean = Pig.new('Napolean',2)
# napolean.greet(porkchop)

farm = Farm.new([jerry,seacorn,porkchop,napolean])

farm.each_animal do |animal|
    case animal # obnoxious
    when Ostrich
        animal.reeee
    when Pig
        animal.oinks
    when Narwal
        animal.bloop
    end
end