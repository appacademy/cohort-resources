# Write a method 'factorial(n)' which takes a number and returns the factorial of n.
# A factorial is the product of all whole numbers between 1 and n, inclusive.
# For example, 'factorial(5)' is 5 * 4 * 3 * 2 * 1 = 120.

def factorial(n)
    # if n == 1 
    #     return 1 
    # end
    n * factorial(n - 1)
end



p factorial(9)
# factorial(1) # => 1
# factorial(2) # => 2 * 1 = 2





# factorial(1) = 1! = 1
# factorial(2) = 2! = 2 * 1! = 2 * factorial(1) = 2 * 1 = 2
# factorial(3) = 3! = 3 * 2! = 3 * factorial(2) = 3 * 2 = 6


# factorial(1) = 1
# factorial(2) = 2 * factorial(1)
# factorial(3) = 3 * factorial(2)
# factorial(n) = n * factorial(n - 1)

# factorial(1)











# p factorial(3)