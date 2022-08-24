require 'byebug'

# function takes in a number, n, and sums all numbers to n

def iter_sum(n)
  sum = 0
  (1..n).each do |num|
    sum += num
  end
  sum
end

# p iter_sum(3)
# p iter_sum(7)
# p iter_sum(100)


def rec_sum(n)
  # return 1 if n == 1
  n + rec_sum(n-1)

end

# p "-------- RECURSION --------"
# p rec_sum(3)
# 3 + rec_sum(2)    returns third
# 2 + rec_sum(1)    returns second
# 1                 returns first

# p rec_sum(7)
# p rec_sum(100)
# p rec_sum(100000) # too many recursive calls breaks ruby's call stack 




def rec_reverse(str) # str = "a"
  return str if str.length == 1
  str[-1] + rec_reverse(str[0...-1])
end

# p rec_reverse("cat")  # ==> "tac"

def iter_reverse(str)
  new_str = ""
  (0...str.length).each do |x|
    new_str += str[str.length - 1 - x]
  end
  new_str
end  

# p iter_reverse("cat")  # ==> "tac"

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
def all_fibs(n) 
  return [] if n == 0
  return [0] if n == 1
  return [0, 1] if n == 2
  # new_arr = []   #will reset each time, BAD
  # prev_call = all_fibs(n - 1)
  # prev_call << all_fibs(n - 1)[-1] + all_fibs(n - 1)[-2]
  all_fibs(n - 1) << all_fibs(n - 1)[-1] + all_fibs(n - 1)[-2]
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
  # return [0, 1].take(n)

  prev_call = fast_all_fibs(n - 1)
  prev_call << prev_call[-1] + prev_call[-2]
end

# p all_fibs(0) #=> []
# p all_fibs(1) #=> [0]
# p all_fibs(2) #=> [0, 1]
# p all_fibs(3) #=> [0, 1, 1]
# p all_fibs(4) #=> [0, 1, 1, 2]
# p all_fibs(5) #=> [0, 1, 1, 2, 3]
# p all_fibs(6) #=> [0, 1, 1, 2 ,3, 5] 




# split the array in half
# check if our target is located in that midpoint
# if it is that midpoint, return the index
# if it's not there, we need to see if it's on the left or the right
# then call binary_search on either the left or the right
# return nil if we never find the target
