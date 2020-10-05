require "byebug"
class Array
    
    def my_each_block(&prc)
        # debugger
        idx = 0
        while idx < self.length
            # prc.call(self[idx])
            yield(self[idx])
            idx += 1
        end
        self
    end

    def my_each_proc(prc)
        # debugger
        # idx = 0
        # while idx < self.length
        #     prc.call(self[idx])
        #     idx += 1
        # end
        # self
        debugger
        self.my_each_block(&prc)
    end

end

arr = [1,2,3]
arr.my_each_block { |el| p el }

# prc = Proc.new { |el| p el }
# arr.my_each_proc(prc)
