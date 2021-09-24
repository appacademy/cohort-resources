class Stack

    def initialize
        @underlying_array = []
    end

    def size 
        @underlying_array.length
    end

    def empty? 
        @underlying_array.empty?
    end

    def top 
        @underlying_array[-1]
    end
    
    def peek(n)
        @underlying_array[-n..-1]
    end

    def push(item)
        @underlying_array << item 
        size
    end

    def pop 
        @underlying_array.pop
    end
    
end