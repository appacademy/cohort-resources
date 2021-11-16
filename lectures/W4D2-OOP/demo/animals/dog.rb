require_relative 'animal'

class Dog < Animal
    def introduce
      puts "#{name} bork bork"
    end
  
    def fetch(item)
      puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
    end
  
    def sniff(other_dog) # other_dog is a Dog instance
      puts "*#{name} sniffs #{other_dog.name}'s butt. interesting.*"
    end

    protected # any methods defined below will be private
    attr_reader :name # setters must always be called explicitly
end

if __FILE__ == $PROGRAM_NAME
    rocky = Dog.new("Rocky")
    bingo = Dog.new("Bingo")
    rocky.introduce
    rocky.fetch("stick")
    rocky.eat("hotdog")
    rocky.walk
    rocky.sniff(bingo)
    # rocky.rename("Fido")
end