class MyQueue

    def initialize 
        @store = [] # front [ ......... ] back
    end

    def enqueue(el)
        # front [ ......... ] back
        store.push(el)
        # back [ ......... ] front
        # store.unshift(el)

        self
    end

    def dequeue
        # front [ ......... ] back
        store.shift
        # back [ ......... ] front
        # store.pop
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

    # private

    attr_reader :store
end