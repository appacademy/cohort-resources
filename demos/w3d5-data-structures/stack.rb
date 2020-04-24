class Stack 
    
    def initialize
        # Do not call it @stack to help you differentiate from your class name
        @store = [] 
    end

    # Can also shift and unshift
    def push(ele) 
        store << ele
        self 
    end

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

    # allows you to only call store within our class 
    # anything below it is going to become private
    # cannot call instance && self.
    private
    # gives us better errors
    attr_reader :store
end