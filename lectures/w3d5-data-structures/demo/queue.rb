class MyQueue
    attr_accessor :size
    def initialize
        @inner_array = []
        @size = 0
    end

    def enqueue(ele)
        self.size += 1
        inner_array.unshift(ele)
        self
    end

    def dequeue
        self.size -= 1
        inner_array.pop
    end

    def empty?
        size == 0
    end

    def show
        inner_array.dup
    end

    private
    attr_reader :inner_array
end

mq = MyQueue.new
mq.enqueue(5)
# mq.inner_array