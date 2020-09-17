require "byebug"

# Fibonacci Sequence: A sequence where each number is the sum of the two preceding numbers, starting with 0 and 1.

# Write a method fibs(n) which returns the first n fibs. 
# An array containing all n numbers in seq.


# SKETCH OUT EXAMPLES
# first fib number is 0
# fibs(0) #=> []
# fibs(1) #=> [0]
# fibs(2) #=> [0, 1]
# fibs(3) #=> [0, 1, 1] # first time we can calc the latest fib from prev fibs
# fibs(4) #=> [0, 1, 1, 2]
# fibs(5) #=> [0, 1, 1, 2, 3] 
# fibs(6) #=> [0, 1, 1, 2, 3, 5] 
# fibs(7) #=> [0, 1, 1, 2, 3, 5, 8] 
# fibs(8) #=> [0, 1, 1, 2, 3, 5, 8, 13] 

# IDENTIFY THE BASE CASE(S)
#   if n is 0, return empty array
#   if n is 1, return [0]
#   if n is 2, return [0, 1]


# IDENTIFY A PATTERN
  # How can we express fibs(5) in terms of fibs(4)?
  #   fibs(5) = fibs(4) + [fibs(4)[-1] + fibs(4)[-2]]
  
  # How can we generalize the rule for fibs(n)?
  #   fibs(n) = fibs(n-1) + [fibs(n-1)[-1] + fibs(n-1)[-2]]
    
def slow_fibs(n)
  # debugger
  return [] if n == 0
  return [0] if n == 1
  return [0, 1] if n == 2
  
  # these two calls happen one after the other, both one frame higher than the base frame
  # debugger
  next_fib = slow_fibs(n-1)[-1] + slow_fibs(n-1)[-2]

  # this third call happens after the other two, again just one frame higher than the base frame
  # debugger
  new_fibs = slow_fibs(n-1) << next_fib

  # debugger
  return new_fibs
end

# p slow_fibs(0)
# p slow_fibs(1)
# p slow_fibs(2)
# p slow_fibs(3)
# p slow_fibs(4)
# p slow_fibs(8)
# p slow_fibs(17)
# p slow_fibs(20)

# this method is slow because there are three repetitive recursive calls, each of which must resolve before we can return a final value
# if those recursive calls also have more recursive calls, the entire method takes a lot longer to run (exactly how much longer depends on the specifics of the method)




def fibs(n) 
  # debugger
  # base cases
  return [] if n == 0
  return [0] if n == 1
  return [0, 1] if n == 2

  # make one recursive call only and save that return value to variable
  # debugger
  prev_fibs = fibs(n-1) # this line must return an array to allow the following lines to work
  last_fib = prev_fibs[-1]
  pen_fib = prev_fibs[-2]
  sum = last_fib + pen_fib 
  # debugger
  return prev_fibs << sum

end

# p fibs(0)
# p fibs(1)
# p fibs(2)
# p fibs(3)
# p fibs(4)
# p fibs(8)
# p fibs(17)
# p fibs(20)