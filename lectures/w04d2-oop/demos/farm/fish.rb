require_relative "farm"

class Fish < Animal
    def initialize(name, nickname)
        @name = name
        @nickname = nickname
    end

    def swim
        puts "#{this.name} is swimming"
    end
end

