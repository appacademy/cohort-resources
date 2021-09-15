def iter_sum(n)
  # sum every number from 1 to n iteratively
  total = 0
​
  (1..n).each {|num| total += num }
  # could also use inject
  total
end
​
# p iter_sum(3) 
# p iter_sum(7)
# p iter_sum(100)
​
​
def rec_sum(n)
  # sum every number from 1 to n recursively
  return n if n == 0
    
  n + rec_sum(n - 1)
end
​
# p "-------- RECURSION --------"
# p rec_sum(3)
# p rec_sum(7)
# p rec_sum(100)
# p rec_sum(100000) # too many recursive calls breaks ruby's call stack 
​
​
​
​
def rec_reverse(str) 
  # reverse a string recursively
  # one-char strings are already reversed
  # empty strings are already reversed
  return str if str.length <= 1
  str[-1] + rec_reverse(str[0..-2])
end
# bird
# "d" + rec_reverse("bir")
​
# p rec_reverse("cat")
​
def iter_reverse(str)
  # reverse a string iteratively
  reversed = ""
  i = str.length - 1
  while i >= 0
    reversed += str[i]
    i -= 1
  end
  reversed
end  
​
# p iter_reverse("cat")
​
​
​
​
​
# Fibonacci examples: 0 1 1 2 3 5 8
​
# Return the nth Fibonacci number
def fibs(n)
  return 0 if n == 1 
  return 1 if n == 2
​
  fibs(n - 1) + fibs(n - 2)
  
  # fibs(2) + fibs(1)
end 
​
# p fibs(1) 
# p fibs(2) 
# p fibs(3)
# p fibs(4)
# p fibs(5)
# p fibs(6) 
​
​
# Find all the Fibonacci numbers up to and including the nth
def all_fibs(n)
  # base case: n = 0
  return [] if n == 0
  return [0] if n == 1
  return [0, 1] if n == 2
​
  # option: invoke fibs function as a helper function
  # option: store value of all_fibs(n - 1) into a variable
  
  all_fibs(n - 1) << ( all_fibs(n - 1)[-2] + all_fibs(n - 1)[-1] )
​
​
end
​
# p all_fibs(0) # => []
# p all_fibs(1) # => [0]
# p all_fibs(2) # => [0, 1]
# p all_fibs(3)
# p all_fibs(4)
# p all_fibs(5)
# p all_fibs(6) # => [0, 1, 1, 2, 3, 5]
​
# now with memoization!
def fast_all_fibs(n)
  return [] if n == 0
  return [0] if n == 1
  return [0, 1] if n == 2
​
  prev_fib = fast_all_fibs(n - 1)
​
  prev_fib << ( prev_fib[-2] + prev_fib[-1] )
​
end
​
# p fast_all_fibs(0)
# p fast_all_fibs(1)
# p fast_all_fibs(2) 
# p fast_all_fibs(3) 
# p fast_all_fibs(4) 
# p fast_all_fibs(5) 
# p fast_all_fibs(6) 
​
​
​
​
# Pascal's Triangle
#         1
#        1 1
#       1 2 1
#      1 3 3 1
#     1 4 6 4 1
#   1 5 10 10 5 1
# 1 6 15 20 15 6 1
​
def pascal_row(n)
  return [1] if n == 0
  # return [1, 1] if n == 1
​
  # if n == 2, prev_row = [1, 1]
  prev_row = pascal_row(n - 1)
  # iterate thru prev_row, add 1st/2nd ele, and 2nd/3rd ele, etc.
  next_row = []
  i = 0
  while i < prev_row.length - 1
    sum = prev_row[i] + prev_row[i + 1]
    next_row << sum
    i += 1
  end
​
  # if n = 1, next_row is empty array: [1] + [] + [1]
  [1] + next_row + [1]
end
​
p pascal_row(0) # => [1] 
p pascal_row(1) # => [1, 1]
p pascal_row(2) # => [1, 2, 1]
p pascal_row(3) # => [1, 3, 3, 1]
p pascal_row(4) # =>
p pascal_row(5) # =>
p pascal_row(6) # =>