class MyQueue
    def initialize
        @inner_array = []
    end

    def enqueue(ele)
        inner_array << ele
        nil
    end

    def dequeue
        inner_array.shift
    end

    def show
        inner_array.dup
    end

    def size
        inner_array.length
    end

    def empty?
        inner_array.empty?
    end

    private
    attr_accessor :inner_array
end