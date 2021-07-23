class Stack
    def initialize
        @store = []
    end

    def stack_push(value)
        store << value
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
        "#Stack:#{self.object_id}"
    end

    private

    attr_reader :store
end

s = Stack.new
p s.stack_push(1)
p s.stack_push(2).stack_push(3)
p s.stack_push(4)

4.times { s.pop }

p s.empty?

# p s.size

# p s.pop
# p s

# p s.peek
# p s

