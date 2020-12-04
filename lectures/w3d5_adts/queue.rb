class MyQueue 
    # queue properties: FIFO principle => enqueue, dequeue, show, size, empty?

    def initialize 
        @inner_array = []
    end

    # Front of the array is the back of the line
    def enqueue(el)
        inner_array.unshift(el)
        self #because we do not want to return inner_array 
    end

    # End of the array is the front of the line
    def dequeue 
        inner_array.pop
    end

    def show 
        # inner_array.dup #Will allow users to not manipulate our original inner_array
        inner_array.dup
    end

    def size 
        inner_array.length
    end

    def empty? 
        inner_array.empty?
    end

    private 
    attr_reader :inner_array 
end

new_queue = MyQueue.new

new_queue.enqueue(4)
new_queue.enqueue(6)
new_queue.enqueue(8)
new_queue.enqueue(7)
new_queue.dequeue
p new_queue.show << "banana"
p new_queue