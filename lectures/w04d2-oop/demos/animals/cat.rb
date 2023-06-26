require_relative 'animal'

class Cat < Animal
    def initialize(greeting, name)
        super(name, greeting)
        # @fur_color = fur_color
    end
    
    def introduce
      super('meow')
    end
  
    private
    attr_reader :name
end