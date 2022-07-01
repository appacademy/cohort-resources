class MyStack
    def initialize
        @store = []
        @size = 0

    end

    def push(ele)
        @store.unshift(ele)
        @size += 1
    end

    def pop
        @store.shift
        @size -= 1 unless @size == 0
    end

    def peek
        @store.first
    end

    def empty?
        @size == 0
    end

    def inspect
        # "haha got you"
        "#<Stack:#{self.object_id}>"
    end
end

ms = MyStack.new
ms.push(1)
ms.push(5)
ms.push(3)
p ms

# p: calls inspect && adds a new line
# puts: calls to_s && adds a new line
# print: calls to_s