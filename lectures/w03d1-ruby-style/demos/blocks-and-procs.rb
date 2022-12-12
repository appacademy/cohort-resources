require 'byebug'

class Array
    def my_each_block(&prc)
        debugger
        i = 0
        while i < self.length
            # yield(self[i]) # non explicit
            prc.call(self[i])
            i += 1
        end
        self
    end

    def my_each_proc(prc)
        self.my_each_block(&prc)
        # debugger
        # i = 0
        # while i < self.length
        #     prc.call(self[i])
        #     i += 1
        # end
        # self
    end
    def coolest_method(arr)
        arr.each do |ele|
            p ele
        end
    end
end

arr = [1,2,3]
# proc1 = Proc.new {|ele| p ele}
# p arr.my_each_block { |el| p el }
# p arr.my_each_proc {|el| p el } # wrong number of args error
# p arr.my_each_proc(proc1)


# arr.each {|ele| p ele}
# arr.each do |ele|
#     p ele
# end

# p arr.my_each_block() { |el| p el }
