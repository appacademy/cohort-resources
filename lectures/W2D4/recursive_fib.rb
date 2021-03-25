# Write a method fib(n) that takes in a number and returns the nth number of the fibonacci sequence.
# In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1. To generate the next 
# number in the sequence, we take the sum of the previous two fibonacci numbers.
# For example the first 6 numbers of the fibonacci sequence are `1, 1, 2, 3, 5, 8`

def fib(n)
    # base case
    if n == 1 || n == 2
        return 1
    end
    # recursive step
    fib(n - 1) + fib(n -2)
end



# | fib(3) | => 1 + 1 => 2

# Examples: 


# fib(1) = 1
# fib(2) = 1
# fib(3) = fib(2) + fib(1) = 1 + 1 = 2
# fib(4) = fib(3) + fib(2) = 2 + 1 = 3
# fib(5) = fib(4) + fib(3) = 3 + 2 = 5

p fib(3)
p fib(4)
p fib(5)

# fib(n) = fib(n -1) + fib(n -2) 