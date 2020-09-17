require "byebug"

# How can we simulate our coffee line in code?

def recursive_coffee(line) 
  # base case: no one else in line
  debugger
  return 0 if line.length == 0

  # inductive step: add this person's coffee order to the prev orders
  next_coffee = line[0]
  next_line = line[1..-1] # avoid mutating the input
  debugger
  return next_coffee + recursive_coffee(next_line)
end


line = [1, 2, 2, 1, 3] 
# each element in the array represents the number of coffee's each person wants
puts recursive_coffee(line) # 9


# line = [1, 2, 2, 1, 3]

# coffee(line)

# bc:  coffee([]) == 0
# 5th: 3 + coffee([]) 
# 4th: 1 + coffee([3])
# 3rd: 2 + coffee([1, 3])
# 2nd: 2 + coffee([2, 1, 3])
# 1st: 1 + coffee([2, 2, 1, 3]) 