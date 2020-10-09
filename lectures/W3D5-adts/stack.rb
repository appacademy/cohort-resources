class Stack
    def initialize
        @store = []
    end

    def push(el)
        store.unshift(el)
        # store << el
        # store.push(el)
        self
    end

    def pop
        store.shift
        # store.pop
    end

    def peek
        store.first
        # store.last
    end

    def size
        store.length
    end

    def empty?
        store.empty?
    end 

    private

    attr_reader :store
end