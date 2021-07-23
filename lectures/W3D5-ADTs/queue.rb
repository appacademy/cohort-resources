class MyQueue
    def initialize
        @inner_array = []
        # @stuff = "stuff"
        # @thing = "thing"
    end

    def enqueue(el)
        # inner_array.push(el)
        inner_array.unshift(el)
        self
    end

    def dequeue
        inner_array.pop
    end

    def show
        inner_array.to_s
    end

    def empty?
        inner_array.empty?
    end

    def inspect
        "#MyQueue:#{self.object_id}"
    end

    private
    attr_reader :inner_array
end

q = MyQueue.new
p q.enqueue(1)
p q.enqueue(2)
p q.enqueue(3)
p q.enqueue(4).enqueue(5)

p q.empty?
# p q.show

p q.dequeue
p q.dequeue
p q.dequeue
p q.dequeue

p q.empty?
