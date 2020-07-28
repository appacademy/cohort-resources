require "byebug"

def sum(arr)
  sum = 0
  debugger
  arr.each do |el|
    sum += el
  end

  sum
end

# debugger
# first_result = sum([1,2,3])

# p first_result 

# ? byebug commands

# * next or n
# go to the next line of code 

# * continue or c
# will go to the next debugger or until the code ends 

# * display 
# if you type display (variable) then that will constantly show up as you step through your code 

# * step or s
# we are stepping into the function or step down into the next line of code 

# * l start-end. start and end represent the lines that you want to show

# * break, you can setup break points but I would prefer to use multiple debuggers

def is_prime?(number)
  (2..number).each do |factor| # bug is here becuase we are including number 
    # debugger
    return false if number % factor == 0 # change this into multiline 
  end
end

def first_n_primes(num_primes)
  primes = []
  # debugger
  num = 2
  # debugger
  while primes.length < num_primes
    # debugger
    primes << num if is_prime?(num)
    num += 1
  end
  primes
end

p first_n_primes(5) # => [2, 3, 5, 7, 11]

