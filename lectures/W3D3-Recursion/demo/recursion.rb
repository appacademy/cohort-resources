require 'byebug'
# Problem solving process
# 1. Understand the problem (find a pattern)
# 2. Identify Base case
# 3. Write one step up from base case
# 4. Logic for inductive step
# 5. Code it out!

# function takes in a number, n, and sums all numbers 0 to and including n
def iter_sum(n)
    sum = 0

    (0..n).each { |i| sum += i }

    sum
end

# p iter_sum(3) # => 6
# p iter_sum(7) # => 28
# p iter_sum(100) # => 5050
# p iter_sum(100000000)


# take in 3 and get back 6 | 3 + 2 + 1 + 0 | 3 + rec_sum(2) 2+1+0
def rec_sum(n)
    return 1 if n == 1
    n + rec_sum(n-1)
end

# p "-------- RECURSION --------"
# p rec_sum(3) # => 6
# p rec_sum(7) # => 28
# p rec_sum(100) # => 5050
# p rec_sum(100000) # too many recursive calls breaks ruby's call stack 



# function takes in a string and returns a new string reversed
def rec_reverse(str) 
  return str if str.length == 0
  str[-1] + rec_reverse(str[0..-2])
end

# p rec_reverse("cat") # => "tac"

def iter_reverse(str)
    reversed_str = ''

    i = str.length - 1

    while i >= 0
        reversed_str += str[i]
        i -= 1
    end

    reversed_str
end  

# p rec_reverse("cat") # => "tac"





# Fibonacci examples:

# Return the nth Fibonacci number / 0 1 1 2 3 5 8 13
def fibs(n)
    return 0 if n == 1
    return 1 if n == 2
    # to find fibs(n) you need to find fibs(n-1) and fibs(n-2)
    fibs(n-1) + fibs(n-2)
end 

# p fibs(1) #=> 0
# p fibs(2) #=> 1
# p fibs(3) #=> 1
# p fibs(4) #=> 2
# p fibs(5) #=> 3
# p fibs(6) #=> 5


# Find all the Fibonacci numbers up to and including the nth
def all_fibs(n) # n = 3
    return [] if n == 0
    return [0] if n == 1
    return [0, 1] if n == 2 # arr[-1] = 1, arr[-2] = 0

    all_fibs(n-1) << all_fibs(n-1)[-1] + all_fibs(n-1)[-2]
    #   [0, 1]    <<      1            +         0         => [0, 1, 1]
end 

#  n = 4 calls all_fibs(3) 3 times. How mantimes does each all_fibs(3) call 
# all_fibs(2)

# p all_fibs(0) # => []
# p all_fibs(1) # => [0]
# p all_fibs(2) # => [0, 1]
# p all_fibs(3) # => [0, 1, 1]
# p all_fibs(4) # => [0, 1, 1, 2]
# p all_fibs(5) # => [0, 1, 1, 2, 3]
# p all_fibs(18) # => [0, 1, 1, 2, 3, 5]

# now with memoization!
def fast_all_fibs(n)
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
# p fast_all_fibs(18) #=> [0, 1, 1, 2 ,3, 5]



# Pascal's Triangle
#         1
#        1 1
#       1 2 1
#      1 3 3 1
#     1 4 6 4 1
#   1 5 10 10 5 1
# 1 6 15 20 15 6 1

def pascal_row(n) # n = 2
    return [1] if n == 0
    return [1, 1] if n == 1

    prev_row = pascal_row(n-1)
    inner_fragment = []

    prev_row.each_with_index do |el, idx| # [1, 1]
        break if idx == prev_row.length - 1
        inner_fragment << el + prev_row[idx + 1]         
    end

    [1] + inner_fragment + [1]
end

# p pascal_row(0) # => [1]
# p pascal_row(1) # => [1, 1]
# p pascal_row(2) # => [1, 2, 1]
# p pascal_row(3) # => [1, 3, 3, 1]
# p pascal_row(4) # => [1, 4, 6, 4, 1]
# p pascal_row(5) # => [1, 5, 10, 10, 5, 1]
p pascal_row(10) # => [1, 6, 15, 20, 15, 6, 1]