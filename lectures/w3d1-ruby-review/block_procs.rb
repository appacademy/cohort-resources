require 'byebug'

class Array

    def my_each_block(&prc)

        # debugger
        i = 0
        while i < self.length
        #    yield(self[i])
           prc.call(self[i])
            i += 1
        end

        self
    end

    def my_each_proc(prc)
        # debugger
        # i = 0
        # while i < self.length
        #     prc.call(self[i])
        #     i += 1
        # end

        # self
        self.my_each_block(&prc)
    end

end

arr = [1,2,3]
prc = Proc.new { |el| p el }
arr.my_each_proc(prc)

arr.my_each_block { |el| p el }
