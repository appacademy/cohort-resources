class MyQueue 
    def initialize 
        @inner_array = []
    end

    def enqueue(ele)
        # inner_array.unshift(ele)
        inner_array.push(ele)
        self 
    end

    def dequeue 
        #inner_array.pop
        inner_array.shift
    end

    def show 
        inner_array.dup
    end

    def size 
        inner_array.length
    end

    def empty?
        if inner_array.length == 0 
            return true 
        else
            false
        end
    end

    private 
    attr_reader :inner_array
end