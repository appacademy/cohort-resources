# public methods:
#   explicit receiver? yes
#   implicit receiver? yes

# private methods:
#   explicit receiver? NO (except for attr_writer)
#   implicit receiver? yes

#protected methods:
#   explicit receiver? yes, but only from within the class definition
#       or any children classes
#   implicit receiver? yes

require 'singleton'

class BrokenLegError < StandardError ; end

module MyEnumerable
    def my_each
        raise MyError, "Fix me!"
    end

    def my_any?(&blk)
        self.my_each do |el|
            return true if blk.call(el)
        end
        false
    end
end

class Farm
    include MyEnumerable # all methods added by Enumerable rely upon the existince of an #each method
    
    def initialize(animals)
        @animals = animals
    end
    
    def my_each(&blk)
        @animals.each(&blk)
    end
    
end

class Animal
    attr_reader :name, :pos, :movement, :noise

    def initialize(name, pos)
        @name = name
        @pos = pos
        @movement = "moves"
        @noise = "noises"
    end

    def move(distance)
        new_pos = pos + distance
        puts "#{name} #{movement} from #{pos} to #{new_pos}"
        self.pos = new_pos
    end

    def make_noise
        puts "#{name} #{noise}!"
    end

    def greet(animal)
        puts "#{name} greets #{animal.name}"
    end

    private
    attr_writer :pos
end

class Horse < Animal
    def initialize(name, pos)
        super
        @movement = "gallops"
        @noise = "neighs"
        @broken_leg = false
    end

    def move(distance, adverb="")
        raise BrokenLegError, "uh oh" if @broken_leg # will default to raising a runtime error
        print adverb
        super(distance)
    end

    def break_leg
        @broken_leg = true
        puts "Didn't see that hole coming..."
    end

    def heal_leg
        @broken_leg = false
        puts "THank goodness for modern medicine."
    end

    def rename(new_name)
        self.name = new_name if new_name.length > 10
        # we just invoked a private method with an explicit receiver...
        # ruby assumes we are creating a new local variable
    end

    def what_is_test
        self.test
    end

    # protected
    # attr_reader :name
    private
    attr_writer :name, :pos
end

class Dog < Animal
    def initialize(name, pos)
        super
        @movement = "runs"
        @noise = "barks"
    end

    # protected
    # attr_reader :name
end

class NullAnimal < Animal
    include Singleton

    def initialize(name="", pos="")
        super
        @movement = ""
        @noise = ""
    end

    def make_noise
    end
end

if $PROGRAM_NAME == __FILE__
    boxer = Horse.new("Boxer", 0)
    clover = Horse.new("Clover", 1)
    jessie = Dog.new("Jessie", 3)

    # boxer.gallop(4)
    # boxer.neigh
    # clover.neigh
    # jessie.run(2)
    # jessie.bark

    # p boxer.name
    # boxer -> explicit receiver
    # name # implicit receiver
    # boxer.rename("Bobobobobobobob")
    # p boxer.name
    # p boxer.what_is_test

    # clover.greet(boxer)
    # boxer.greet(5)
    # clover.name

    stable = Array.new(10) { NullAnimal.instance }
    # NullAnimal has the exact same interface as an Animal
    stable[0] = boxer
    stable[1] = clover
    stable[7] = jessie
    my_farm = Farm.new(stable)

    # my_farm.my_each(&:make_noise)
    # p my_farm.my_any? { |animal| animal.name == "Joe" }
    # p Horse.ancestors
    # boxer.move(3, "Lazily, ")
    # jessie.move(4)
    # p Horse.instance_methods

    boxer.break_leg
    # p BrokenLegError.instance_methods

    begin
        boxer.move(5, "Lazily, ")
    rescue BrokenLegError => err
        boxer.heal_leg
        retry
    # else

    ensure
        boxer.make_noise
    end
end