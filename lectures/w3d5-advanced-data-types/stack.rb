class Stack
    def initialize
        @store = []
    end

    def push(value)
        store.unshift(value)
        nil
    end

    def pop
        store.shift
    end

    def peek
        store.first
    end

    def size
        store.length
    end

    def empty?
        store.empty?
    end

    private
    attr_accessor :store
end