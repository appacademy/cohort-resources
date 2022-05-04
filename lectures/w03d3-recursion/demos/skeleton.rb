require 'byebug'

# function takes in a number, n, and sums all numbers to n

def iter_sum(n)
  sum = 0
  (0..n).each do |num|
    sum += num
  end
  sum
end

# p iter_sum(3)
# p iter_sum(7)
# p iter_sum(100)


def rec_sum(n)
  return 1 if n == 1 # base case
  n + rec_sum(n - 1) # inductive step
end

# p "-------- RECURSION --------"
# p rec_sum(3)
# p rec_sum(7)
# p rec_sum(100)
# p rec_sum(100000) # too many recursive calls breaks ruby's call stack 




def rec_reverse(str) # str = "cat"
  return str if str.length == 1 # base case
  str[-1] + rec_reverse(str[0...-1]) # inductive step
end

# p rec_reverse("hello world")

def iter_reverse(str)
  new_str = ""
  i = str.length - 1
  while i >= 0
    new_str += str[i]
    i -= 1
  end
  new_str
end  

# p iter_reverse("cat")

# Fibonacci examples:

# Return the nth Fibonacci number
def fibs(n)
  # return 0 if n == 0
  return 0 if n == 1
  return 1 if n == 2
  fibs(n - 1) + fibs(n-2)
    # fibs(n)
end 

# p fibs(6) 
# p fibs(2) 
# p fibs(3) 
# p fibs(4) 
# p fibs(5) 
# p fibs(6) 


# Find all the Fibonacci numbers up to and including the nth
def all_fibs(n) 
  raise "please use a number greater than or equal to 0" if n < 0
  return [] if n == 0
  return [0] if n == 1
  return [0, 1] if n == 2

  all_fibs(n - 1) << all_fibs(n-1)[-1] + all_fibs(n-1)[-2]
  # n = 3 => [0,1] << 1   =   [0,1,1]

end

# p all_fibs(0) #=> []
# p all_fibs(1) #=> [0]
# p all_fibs(2) #=> [0, 1]
# p all_fibs(3) #=> [0, 1, 1]
# p all_fibs(4) #=> [0, 1, 1, 2]
# p all_fibs(5) #=> [0, 1, 1, 2, 3]
# p all_fibs(6) #=> [0, 1, 1, 2 ,3, 5] 

# now with memoization!
def fast_all_fibs(n)
  return [] if n == 0
  return [0] if n == 1
  return [0, 1] if n == 2
  # or do this:
  # return [0, 1].take(n) if n <= 2

  prev = all_fibs(n-1)
  prev << prev[-1] + prev[-2]
end

p fast_all_fibs(0)
p fast_all_fibs(1)
p fast_all_fibs(2) 
p fast_all_fibs(3) 
p fast_all_fibs(4) 
p fast_all_fibs(5) 
p fast_all_fibs(6) 



