require 'byebug'

class Array

    def my_each_with_block(&prc)
        # debugger
        if !block_given? # block_given? is a built in ruby boolean method to check if a block was given to that method
            prc = Proc.new { |e| puts e }
        end
        i = 0
        while i < self.length
            ele = self[i] # we're in an instance method on the array class, so self is this array instance
            prc.call(ele)
            i += 1
        end
        self # each returns the original array
    end

    def my_each_with_proc(prc)
        self.my_each_with_block(&prc) # convert the proc back into a block
    end

end