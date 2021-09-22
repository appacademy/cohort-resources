require_relative "animal"

class Cat < Animal
    attr_reader :fur_color
    
    def initialize(name, fur_color)
        super(name)
        @fur_color = fur_color
    end


end

c = Cat.new("Drogo", "tuxedo")
p c.fur_color
c.eat("fish")

