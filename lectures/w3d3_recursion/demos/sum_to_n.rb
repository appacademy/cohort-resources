require "byebug"

# Return the sum of all numbers up to and including n

def iter_sum(n)
    sum = 0
    (1..n).each do |ele|
        sum += ele 
    end
    sum 
end

# p iter_sum(1)
# p iter_sum(2)
# p iter_sum(3)
#iter_sum(1) => 1
#iter_sum(2) => 1 + 2 = 3 
#iter_sum(3) => 1 + 2 + 3 = 6

# p iter_sum(-100)
  
def rec_sum(num)
    debugger
    return 1 if num == 1
    debugger
    sum = rec_sum(num - 1) 
    debugger 
    sum + num
end

# p rec_sum(1)
# p rec_sum(2)
# p rec_sum(3)
p rec_sum(4)



