require "byebug"
class Array
    
    def my_each(&prc)
        i = 0 
        while i < self.length
            debugger
            prc.call(self[i])
            i += 1         
        end
    end

    def my_select(&prc)
        new_arr = []
        debugger
        self.my_each do |num|
            debugger
            if prc.call(num)
                new_arr << num
            end
        end
        return new_arr
    end
end

arr = [1,2,3]

# arr.my_each {|num| puts num}

var = arr.my_select do |num|
    debugger
    num > 1
end

p var



