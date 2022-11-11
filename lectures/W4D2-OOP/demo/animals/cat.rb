require_relative 'animal'

# add a @fur_color instance variable and set it during initialization
class Cat < Animal
    def initialize(name, fur_color)
        super(name)
        @fur_color = fur_color
    end

    def introduce
        puts "#{name} meow"
    end
end

if __FILE__ == $PROGRAM_NAME
    nemo = Cat.new("Nemo", "calico")
    nemo.introduce
    nemo.eat("salmon")
    nemo.walk
    p nemo
end