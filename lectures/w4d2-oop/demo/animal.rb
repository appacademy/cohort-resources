class Animal
    protected # no access from outiside the class definition
    attr_reader :name, :pos
    attr_writer :pos

    public
    def initialize(name, pos = 0)
        @name = name
        @pos = pos
        @sound = ''
        @move = ''
    end

    def sound(verb)
        puts "#{self.name} #{verb}s"
    end

    def move(dist)
        puts "#{name} #{@move}s from #{pos} to #{pos + dist}"
        self.pos = pos + dist
    end
end

