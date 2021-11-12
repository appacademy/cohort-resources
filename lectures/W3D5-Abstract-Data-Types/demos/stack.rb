class Stack

    def initialize 
        @store = []
    end

    def push(el)
        store << el
        # need the self here so that the actual array isn't returned when we add
        # a new element
        self
    end

    # def reset
    #     self.stare = []
    # end

    def pop
        store.pop
    end

    def peek
        store.last
    end

    def size
        store.length
    end

    def empty?
        store.empty?
    end

    def inspect
        "#<Stack:#{self.object_id}>"
    end


    private

    attr_reader :store
    # attr_writer :store
end 