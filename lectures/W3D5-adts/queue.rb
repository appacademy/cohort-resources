class Queue
    def initialize
        @store = []
    end

    def enqueue(el)
        # enqueue from the left
        store.unshift(el)
        self
    end

    def dequeue
        # dequeue from the right
        store.pop
    end

    def show
        store.dup
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
