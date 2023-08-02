require 'byebug'

def iter_sum(n)
    sum = 0
    count = 0
    while count <= n
        sum += count
        count += 1
    end
    sum
end

# p iter_sum(3)
# p iter_sum(7)
# p iter_sum(100)
#  p iter_sum(100000)


def rec_sum(n) # rec_sum(3) -> 6
    return 1 if n == 1 # base case
    rec_sum(n-1) + n # if n is 6
end

# p "-------- RECURSION --------"
# p rec_sum(3)
# p rec_sum(7)
# p rec_sum(100)
# p rec_sum(100000) # too many recursive calls breaks ruby's call stack 




def rec_reverse(str) # "abc"
    return str if str.length == 1
    # "c" + rec("ab")
    str[-1] + rec_reverse(str[0..-2])
end

# p rec_reverse("cat")

def iter_reverse(str)
    len = str.length - 1
    new_str = ""
    while len >= 0
        new_str += str[len]
        len -= 1
    end
    new_str
end  

# p rec_reverse("cat")





# Fibonacci examples:

# Return the nth Fibonacci number

# 0 1 1 2 3 5 8 13 21 34 55 89 

def fibs(n)
    return 0 if n == 1
    return 1 if n == 2
    fibs(n - 2) + fibs(n - 1)
end 

# p fibs(1) 
# p fibs(2) 
# p fibs(3)
# p fibs(4)
# p fibs(5)
# p fibs(6) 


# Find all the Fibonacci numbers up to and including the nth
def all_fibs(n)
    return [] if n == 0
    return [0] if n == 1
    return [0,1] if n == 2
    # [0,1] << 0 + 1
    all_fibs(n-1) << all_fibs(n-1)[-2] + all_fibs(n-1)[-1]
end

# p all_fibs(0)# => []
# p all_fibs(1) #=> [0]
# p all_fibs(2) #=> [0,1]
# p all_fibs(3) #=> [0,1,1]
# p all_fibs(4) #=> [0,1,1,2]
# p all_fibs(5)
# p all_fibs(6)
# p all_fibs(20)

# now with memoization!
def fast_all_fibs(n)
    return [] if n == 0
    return [0] if n == 1
    return [0,1] if n == 2

    prev_fibs = all_fibs(n-1)
    prev_fibs << prev_fibs[-2] + prev_fibs[-1]
end

# p fast_all_fibs(0)
# p fast_all_fibs(1)
# p fast_all_fibs(2) 
# p fast_all_fibs(3) 
# p fast_all_fibs(4) 
# p fast_all_fibs(5) 
# p fast_all_fibs(6) 



def binary_search(arr, target)
    return nil if arr.length == 0

    mid_idx = arr.length / 2

    if arr[mid_idx] == target
        return mid_idx
    elsif arr[mid_idx] > target
        return binary_search(arr[0...mid_idx], target)
    elsif arr[mid_idx] < target
        result = binary_search(arr[mid_idx + 1..-1], target)
        return result + mid_idx + 1 unless result.nil?
    end
end

p binary_search([1,2,5,6,8,9,10,11], 2) # => 1
p binary_search([1,2,5,6,8,9,10,11], 1) # => 0
p binary_search([1,2,5,6,8,9,10,11], 11) # => 7
p binary_search([1,2,5,6,8,9,10,11], 9) # => 5
p binary_search([1,2,5,6,8,9,10,11], 0) # => nil
p binary_search([1,2,5,6,8,9,10,11], 12) # => nil