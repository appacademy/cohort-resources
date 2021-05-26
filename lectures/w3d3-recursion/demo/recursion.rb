require 'byebug'
#take in a number, and add up every number up until n, return result
#iterative approach
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

#take in a number, and add up every number up until n, return result

def rec_sum(n)
  return n if n == 1
  n + rec_sum(n-1)
end


# # p "-------- RECURSION --------"
# p rec_sum(3)
# p rec_sum(7)
# p rec_sum(100)


# p rec_sum(100000) # too many recursive calls breaks ruby's call stack 

#recursive approach
def rec_reverse(str)
  return "" if str.length == 0
  return str if str.length == 1
  rec_reverse(str[1..-1]) + str[0]
end

# p rec_reverse("a") #=> returns "a"
# p rec_reverse("ab") #=> returns "ba"


# p rec_reverse("cat")

#iterative approach
def iter_reverse(str)
  reversed = ""
  i = str.length - 1
  while i >= 0
    reversed += str[i]
    i-=1
  end
  reversed
end  

# p rec_reverse("cat")


# # Fibonacci examples:

#first fibonacci numbers:
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

# 1 => 0
# 2 => 1

# # Return the nth Fibonacci number
def fibs(n)
  return 0 if n == 1
  return 1 if n == 2
  fibs(n-1) + fibs(n-2)
end 
# ​
# p fibs(1) 
# p fibs(2) 
# p fibs(3)
# p fibs(4)
# p fibs(5)
# p fibs(6) 
# ​
# ​
# # Find all the Fibonacci numbers up to and including the nth
def all_fibs(n)
  return [] if n == 0
  return [0] if n == 1
  return [0, 1] if n == 2
  all_fibs(n-1) << all_fibs(n-1)[-1] + all_fibs(n-1)[-2]
end
# 
# p all_fibs(0) #=> []
# p all_fibs(1) #=> [0]
# p all_fibs(2) #=> [0, 1]
# p all_fibs(3) #=> [0, 1, 1]
# p all_fibs(4)
# p all_fibs(5)
# p all_fibs(20)
# ​
# # now with memoization!
def fast_all_fibs(n)
  return [] if n == 0
  return [0] if n == 1
  return [0, 1] if n == 2
  prev_step = all_fibs(n-1)
  prev_step << prev_step[-1] + prev_step[-2]
end
# ​
# p fast_all_fibs(0)
# p fast_all_fibs(1)
# p fast_all_fibs(2) 
# p fast_all_fibs(3) 
# p fast_all_fibs(4) 
# p fast_all_fibs(5) 
# p fast_all_fibs(20) 
# ​
# ​
# ​
# ​
# # Pascal's Triangle
# #         1         
# #        1 1
# #       1 2 1
# #      1 3 3 1
# #     1 4 6 4 1
# #   1 5 10 10 5 1
# # 1 6 15 20 15 6 1
# ​
def pascal_row(n)
  return [[1]] if n == 0
  return [[1],[1,1]] if n == 1
  #build current row
  next_row = [1]
  prev_step = pascal_row(n-1)
  prev_row = prev_step[-1]
  (0...prev_row.length-1).each do |idx|
    next_row << prev_row[idx] + prev_row[idx+1]
  end
  next_row << 1
  prev_step << next_row
end
# ​
p pascal_row(0) #=> [[1]]
p pascal_row(1) #=> [[1],[1,1]]
p pascal_row(2) #=> [[1],[1,1],[1,2,1]]
p pascal_row(3)
p pascal_row(4)
p pascal_row(5)
p pascal_row(6)