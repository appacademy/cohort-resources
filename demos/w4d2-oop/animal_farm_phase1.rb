require "byebug"

class Farm

    attr_accessor :animals

    def initialize(*animals)
        @animals = animals
    end

    def each(&blk) #this is a method defined in the farm class
        #animals is an array
        animals.each {|animal| blk.call(animal)}
    end

end

class Horse     
    def initialize(name,position)
        @name = name 
        @position = position # ta da
    end
    
    def move(distance) 
        new_pos = position + distance #self.position will not work because of private
        puts "#{name} gallops from #{position} to #{new_pos}"
        self.position = new_pos #position = new_pos will create a local variable
    end
    
    def make_noise
        puts "#{name} neighs"
    end

    protected
    attr_accessor :name, :position 
end

class Dog
    def initialize(name,position)
        @name = name 
        @position = position # ta da
    end
    
    def move(distance) 
        new_pos = position + distance #self.position will not work because of private
        puts "#{name} runs from #{position} to #{new_pos}"
        self.position = new_pos #position = new_pos will create a local variable
    end
    
    def make_noise
        puts "#{name} barks"
    end

    def greet(animal)
        debugger
        puts "#{name} and #{animal.name} wag their tails"
    end

    protected
    attr_accessor :name, :position 
end

boxer = Horse.new("Boxer",3)
fido = Dog.new("Fido",1)
betty = Dog.new("Betty",1)
stable = Farm.new(boxer,fido,betty)

stable.each {|animal| animal.move(4)}

# boxer.gallop(7)
# boxer.neigh

# fido.run(9)
# fido.bark
# fido.greet(boxer)