require 'byebug'

def iter_sum(n)

  sum = 0

  (1..n).each do |num|
    sum += num
  end
  sum

end

# p iter_sum(3) # => 6
# p iter_sum(7) # => 28
# p iter_sum(100) # => 

# p iter_sum(10000)





def rec_sum(n)
  return nil if n < 0
  return n if n < 2

  n + rec_sum(n - 1)

end

# p "-------- RECURSION --------"
# p rec_sum(1) # => 1
# p rec_sum(2) # => 3
# p rec_sum(3) # => 6
# p rec_sum(7) # => 28
# p rec_sum(100) # => 5050
# p rec_sum(10000) # too many recursive calls breaks ruby's call stack / based on memory storage limit




def rec_reverse(str)
  
  return str if str.length <= 1
  # str[-1] + rec_reverse(str[0...-1])
  rec_reverse(str[1..-1]) + str[0]
end


# p rec_reverse("cat") #=> 'tac'

def iter_reverse(str)

  res = ""
  
  # i = str.length - 1

  ((str.length - 1).downto(0)).each do |i|
    res += str[i]
  end
  # while i >= 0
  #   res += str[i]
  #   i -= 1
  # end
  res
end  

# p rec_reverse("cat") #=> 'tac'





# Fibonacci examples:

  #0,1,1,2,3,5,8,13,21,34

# Return the nth Fibonacci number
def fibs(n)
  return 0 if n == 1
  return 1 if n == 2

  fibs(n - 2) + fibs(n - 1)

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
  return [0,1] if n == 2

  sum = all_fibs(n - 1)[-1] + all_fibs(n - 1)[-2]

  all_fibs(n - 1) << sum
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

  return [] if n == 0
  return [0] if n == 1
  return [0,1] if n == 2

  fibs = fast_all_fibs(n-1) #[0,1]

  fibs << fibs[-1] + fibs[-2] #[0,1,1]

end

p fast_all_fibs(0)
p fast_all_fibs(1)
p fast_all_fibs(2) 
p fast_all_fibs(3) 
p fast_all_fibs(4) 
p fast_all_fibs(5) 
p fast_all_fibs(6) 