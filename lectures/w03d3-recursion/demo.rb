# Recursion Problems

def iter_sum(n)
    # sum = 0 
    # (0..n).each do |num|
    #     sum += num
    # end
    # sum
end

# p iter_sum(3) # 6
# p iter_sum(7) # 28
# p iter_sum(100) # 5050
# p iter_sum(1000000) # too many recursive calls breaks ruby's call stack 


def rec_sum(n)
    return 0 if n == 0
    n + rec_sum(n -1)
end

# p "-------- RECURSION --------"
# p rec_sum(3) # 6
# p rec_sum(7) # 28
# p rec_sum(100) #5050
# p rec_sum(9200) # too many recursive calls breaks ruby's call stack 




def rec_reverse(str) 
    return "" if str.length == 0
    str[-1] + rec_reverse(str[0...-1])
end

# p rec_reverse("cat")
# p rec_reverse("hello world")

def iter_reverse(str)
    i = str.length - 1
    reversed = ""
    while i >= 0
        reversed += str[i]
    end
    reversed
end  

# p rec_reverse("cat")



# Fibonacci examples:

# Return the nth Fibonacci number
def fibs(n)
    return 0 if n == 1
    return 1 if n == 2
    fibs(n - 1) + fibs(n - 2)
end 

# p fibs(1) #=> 0
# p fibs(2) #=> 1
# p fibs(3) #=> 1
# p fibs(4) #=> 2
# p fibs(5) #=> 3
# p fibs(6) #=> 5

# Find all the Fibonacci numbers up to and including the nth
def all_fibs(n) # Expensive
    return [] if n == 0
    return [0] if n == 1
    return [0, 1] if n == 2
    all_fibs(n-1) << all_fibs(n-1)[-1] + all_fibs(n-1)[-2]
end

# p all_fibs(0) #=> []
# p all_fibs(1) #=> [0]
# p all_fibs(2) #=> [0, 1]
# p all_fibs(3) #=> [0, 1, 1]
# p all_fibs(4) #=> [0, 1, 1, 2]
# p all_fibs(5) #=> [0, 1, 1, 2, 3]
# p all_fibs(6) #=> [0, 1, 1, 2 ,3, 5]

# now with memoization!
def fast_all_fibs(n) # Memory efficient
    return [] if n == 0
    return [0] if n == 1
    return [0, 1] if n == 2
    prev_call = all_fibs(n-1)
    prev_call << prev_call[-1] + prev_call[-2]
end


# p fast_all_fibs(0) #=> []
# p fast_all_fibs(1) #=> [0]
# p fast_all_fibs(2) #=> [0, 1]
# p fast_all_fibs(3) #=> [0, 1, 1]
# p fast_all_fibs(4) #=> [0, 1, 1, 2]
# p fast_all_fibs(5) #=> [0, 1, 1, 2, 3]
# p fast_all_fibs(6) #=> [0, 1, 1, 2 ,3, 5]

# Given a sorted array, find the index where the target is located in the array. If the target is not in the array, return nil

def binary_search(arr, target)

end

p binary_search([1,2,3,4,5,6,7,8,9,10,11,12], 7) #6
p binary_search([1,2,3,4,5,6,7,8], 2) #1
p binary_search([1,2,3,4,5,6,7,8], 7) #6
p binary_search([1,2,3,4,5,6,7], 1) #0
p binary_search([1,2,3,4,5,6,7,8], 8) #7
p binary_search([1,2,3,4,5,6,7], 29) #nil
p binary_search([3,4,5,6,7], 1) #nil