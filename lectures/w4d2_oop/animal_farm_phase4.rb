class Farm
    def initialize(animals)
        @animals = animals
    end

    def each_animal(&blk)
        @animals.each(&blk)
    end
end

class Animal
    def initialize(name,pos)
        @name = name
        @pos = pos
    end

    def move(distance)
        new_pos = @pos + distance
        puts "#{@name} #{movement} from #{@pos} to #{new_pos}"
    end

    def make_noise
        puts "#{@name} #{noise}!!!"
    end

    def movement
        ''
    end

    def noise
        raise "You need to make this method"
    end
end

class Pig < Animal
    def initialize(name,pos,color)
        super(name,pos)
        # super() => this is how you would do it if you wanted to pass no args to the parent
        @color = color
    end

    def movement
        'trots'
    end

    def noise
        'oinks'
    end

    def greet(other_pig)
        puts "#{name} and #{other_pig.name} snout boop"
    end

    protected # allows an explicit receiver of the same class type
    attr_reader :name, :pos

    private # does not allow an explicit receiver
    attr_writer :name, :pos
end
  
class Narwal < Animal

    def noise
        'bloops'
    end

    def movement
        'swims'
    end

end

class Ostrich < Animal

    def noise
        'reeeee'
    end

    def movement
        'charges'
    end

end

jerry = Ostrich.new('Jerry',0)
# jerry.reeee
# jerry.charge(10)

seacorn = Narwal.new('Seacorn',0)
# seacorn.bloop
# seacorn.swim(10)

porkchop = Pig.new('Porkchop',0,'Purple')
# porkchop.oinks
# porkchop.trots(10)

# napolean = Pig.new('Napolean',2)
# napolean.greet(porkchop)

farm = Farm.new([jerry,seacorn,porkchop])

farm.each_animal do |animal|
    animal.make_noise
end