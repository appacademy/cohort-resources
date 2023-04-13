require 'byebug'

def iter_sum(n)
    (0..n).sum
end

# p iter_sum(3) # => 1 + 2 + 3 => 6
# p iter_sum(7) # => 1 + 2 + 3 + 4+ 5 +6 +7
# p iter_sum(100000)



def rec_sum(n)
    return n if n == 1
    n + rec_sum(n - 1)
end

# p "-------- RECURSION --------"
# p rec_sum(3)
# p rec_sum(7)
# p rec_sum(100)
# p rec_sum(100000) # too many recursive calls breaks ruby's call stack 




def rec_reverse(str) 
    return str if str.length == 1
    str[-1] + rec_reverse(str[0...-1])
end

# p rec_reverse("cat")
# p rec_reverse("hello world")

# def iter_reverse(str)
# end  

# p rec_reverse("cat")





# Fibonacci examples:

# Return the nth Fibonacci number
def fibs(n)    # n = 3
    return 0 if n == 1
    return 1 if n == 2
    fibs(n - 1) + fibs(n - 2)
end 

# fibs = 0 , 1 , 1, 2, 3 ,5 ,8, 13....
# p fibs(1) # 0
# p fibs(2) # 1
# p fibs(3) # 1
# p fibs(4) # 2
# p fibs(5) # 3
# p fibs(6) # 5


# Find all the Fibonacci numbers up to and including the nth
def all_fibs(n) # n == 3
    return [] if n == 0
    return [0] if n == 1
    return [0, 1] if n == 2
    all_fibs(n-1) << all_fibs(n-1)[-1] + all_fibs(n-2)[-1] # PROBLEM... too many stacks
end

# p all_fibs(0) # => []
# p all_fibs(1) # => [0]
# p all_fibs(2) # => [0, 1]
# p all_fibs(3) # => [0, 1 , 1]
# p all_fibs(4) # => [0, 1, 1, 2]
# p all_fibs(5) # => [0, 1 ..]
# p all_fibs(6) # =>[0, 1....]

# now with memoization!
def fast_all_fibs(n)
    return [] if n == 0
    return [0] if n == 1
    return [0, 1] if n == 2
    stack = all_fibs(n - 1)
    stack << stack[-1] + stack[-2]
end

# p fast_all_fibs(0)
# p fast_all_fibs(1)
# p fast_all_fibs(2) 
# p fast_all_fibs(3) 
# p fast_all_fibs(4) 
# p fast_all_fibs(5) 
# p fast_all_fibs(6) 






def binary_search(arr, target)
    # return nil if arr.empty?
    # return nil if arr.length == 0
    # return nil if arr[-1] < target
    return nil if arr.length <= 1 && arr[0] != target
    mid = arr.length / 2 # if length is 1, mid is 0
    return mid if arr[mid] == target
    left = arr[0...mid]
    right = arr[mid + 1..-1]
    if arr[mid] > target
        return binary_search(left, target)
    else 
        stack = binary_search(right, target)
        if stack
            return stack + mid + 1
        end 
        return nil
        # stack ? stack + mid + 1 : nil
    end
end

# p binary_search([], 1)
# p binary_search([3,5,7,9,12,15,19], 9)
# p binary_search([3,5,7,9,12,15,19], 3)
# p binary_search([3,5,7,9,12,15,19], 5)
# p binary_search([3,5,7,9,12,15,19], 15)
# p binary_search([3,5,7,9,12,15,19], 19)
p binary_search([3,5,7,9,12,15,19], 7)