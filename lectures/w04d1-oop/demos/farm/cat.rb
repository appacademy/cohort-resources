require_relative "animal"
require "../modules"

class Cat < Animal
    include Walkable
    attr_reader :tricks, :breed

    def initialize(name, color)
        super(name)
        # @name = name
        @color = color
        @tricks = []
    end

    def meow
        puts "#{name} meow meow"
    end

    def fetch(item)
        puts "#{name} excitedly fetches #{item} and wants you to throw it again"
    end

    def sniff(other_cat)
        puts "#{name} sniffs #{other_cat.name}"
    end

end

drogo = Cat.new("Drogo", "tux")
drogo.walk