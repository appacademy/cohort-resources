require "byebug"
module MyEnumerable
    def each 
        raise NoMethodError
    end 

    def all?(&blk)
        self.each {|el| return false if !blk.call(el)}
        true
    end
end

class Farm
    attr_accessor :animals
    
    def initialize(*animals)
        @animals = animals
    end
    
    def each(&blk) #this is a method defined in the farm class
        #animals is an array
        animals.each {|animal| blk.call(animal)}
    end
    
    include MyEnumerable
end

class Animal   
    def initialize(name,position)
        debugger
        @name = name 
        @position = position # ta da
        @verb = "moves"
        @noise = "makes noise"
    end
    
    def move(distance) 
        new_pos = position + distance #self.position will not work because of private
        puts "#{name} #{verb} from #{position} to #{new_pos}"
        self.position = new_pos #position = new_pos will create a local variable
    end
    
    def make_noise
        puts "#{name} #{noise}"
    end

    protected
    attr_accessor :name, :position, :verb, :noise 
end

class BrokenLeg < StandardError ; end

class Horse < Animal
    attr_accessor :broken

    def initialize(name,position)
        debugger
        super
        @verb = "gallops"
        @noise = "neighs"
        @broken = false
    end
    
    def move(distance) 
        debugger
        raise BrokenLeg if @broken

        rescue BrokenLeg
            p "thank goodness for modern medicine"
            @broken = false
            retry
        ensure
            p "wht it is"
            self.make_noise
        super
    end
    
    def make_noise
        super
    end

    protected
    attr_accessor :name, :position 
end

class Dog < Animal
    def initialize(name,position)
        super
        @verb = "runs"
        @noise = "barks"
    end
    
    def move(distance) 
        super
    end
    
    def make_noise
        super
    end

    protected
    attr_accessor :name, :position 
end

boxer = Horse.new("Boxer",3)
boxer.broken = true
fido = Dog.new("Fido",1)
betty = Dog.new("Betty",1)
stable = Farm.new(boxer,fido,betty)

stable.each {|animal| animal.move(3)}
# p stable.all? {|el| el.is_a?(Dog)}
# boxer.gallop(7)
# boxer.neigh

# fido.run(9)
# fido.bark
# fido.greet(boxer)

