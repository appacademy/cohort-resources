require "byebug"
# * make sure to draw out the path of the recursive call
def fib(n)
  if n == 1 || n == 2
    debugger
    return 1
  end

  debugger
  minus1_return = fib(n-1)
  debugger
  minus2_return = fib(n-2)
  
  minus1_return + minus2_return
end

# * fib sequence 1, 1, 2, 3, 5, 8, 13, 21, 34
# fib(1)
# fib(2)
# fib(3)
# fib(4)
fib(5)
# fib(6)
# fib(7)

def fib_iterative(n)
  count = 1
  fib_num = 1
  prev_fib_num = 1
  next_prev = 0

  while count < n
    prev = fib_num
    fib_num += prev_fib_num
    prev_fib_num = prev
    
    count += 1 
  end

  fib_num
end

# p fib_iterative(1)
# p fib_iterative(2)
# p fib_iterative(3)
# p fib_iterative(4)
# p fib_iterative(5)
# p fib_iterative(6)
# p fib_iterative(7)
# p fib_iterative(8)