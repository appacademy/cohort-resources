require 'stack'

class SmartStack < Stack

    def initialize(num)
        @max_size = num
        super()
    end

    def max_size
        @max_size
    end

    def full?
        size < max_size ? false : true
        # if size < max_size
        #     return true 
        # else 
        #     return false
        # end
    end

    def push(*args)
        if args.length + size > max_size
            raise 'stack is full'
        else
            args.each { |el| @underlying_array << el }
            size
        end
    end

    def pop(n = 1)
        removed = []
        n.times do 
            removed << @underlying_array.pop
        end
        removed
    end

end