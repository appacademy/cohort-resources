require 'singleton'

class NullAnimal
    include Singleton
    attr_reader :name, :pos
    attr_writer :pos

    def sound
        nil
    end

    def move(dist)
        nil
    end
end