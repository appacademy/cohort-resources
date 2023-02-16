require 'byebug'

## Recursion

# n is a positive integer greater than 0
# return sum of integers from 1 to n
def iter_sum(n)
  # return 1 if n == 1
  (0..n).inject {|acc, ele| acc + ele}
end

# p iter_sum(3)
# p iter_sum(7)
# p iter_sum(100)

def rec_sum(n)
  # return 1 if n == 1
  # rec_sum(n-1) + n
end

# p "-------- RECURSION --------"
# p rec_sum(3)
# p rec_sum(7)
# p rec_sum(100)
# p rec_sum(100000) # too many recursive calls breaks ruby's call stack 

def rec_reverse(str)
  return str if str.length <= 1
  return str[-1] + rec_reverse(str[0...-1])
end

# p rec_reverse("pineapple")

def iter_reverse(str)
  str.reverse
end  

# p rec_reverse("cat")

# Fibonacci examples:

# Return the nth Fibonacci number
#  1 1 2 3 5 8 13 21 34
# fin(n) = fib(n-1) + fib(n-2)

# memoization is essentially caching the result of previous function calls
FIBS_MEMO = {}
FIBS_COUNT = Hash.new(0)
def fibs(n)
  return 1 if n <= 2
  return FIBS_MEMO[n] if FIBS_MEMO[n]
  res = fibs(n-1) + fibs(n-2)
  FIBS_COUNT[n] += 1
  FIBS_MEMO[n] = res
  res
end 

# p fibs(1) 
# p fibs(2) 
# p fibs(3)
# p fibs(4)
# p fibs(5)
# p fibs(40) 
# puts FIBS_COUNT

# Find all the Fibonacci numbers up to and including the nth
# n is a positive integer >= 0
def all_fibs(n, prev=[]) 
  return prev if n == 0
  return [1] if n == 1
  return [1,1] if n == 2
  res = all_fibs(n-1)
  res << res[-2] + res[-1]
  
end

p all_fibs(0)
p all_fibs(1)
p all_fibs(2)
p all_fibs(3)
p all_fibs(4)
p all_fibs(5)
p all_fibs(6)

# now with memoization!
def fast_all_fibs(n)
end

# p fast_all_fibs(0)
# p fast_all_fibs(1)
# p fast_all_fibs(2) 
# p fast_all_fibs(3) 
# p fast_all_fibs(4) 
# p fast_all_fibs(5) 
# p fast_all_fibs(6) 
