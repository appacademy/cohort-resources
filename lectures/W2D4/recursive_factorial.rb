# Write a method 'factorial(n)' which takes a number and returns the factorial of n.
# A factorial is the product of all whole numbers between 1 and n, inclusive.
# For example, 'factorial(5)' is 5 * 4 * 3 * 2 * 1 = 120.

# def factorial(n)
#     if n == 1 
#         return 1 #base case
#     end
#     n * factorial(n - 1) #recursive case
# end



# | factorial(1) | =>
# | factorial(2) |


# p factorial(1)
# p factorial(2)
# p factorial(3)
# p factorial(4)


# factorial(1) = 1! = 1 

# factorial(2) = 2! = 2 * 1! = 2 * factorial(1) = 2 * 1 = 2  

# factorial(3) = 3! = 3 * 2! = 3 * factorial(2) = 3 * 2 = 6  

# factorial(4) = 4! = 4 * 3! = 4 * 6 = 4 * factorial(3) = 24 



# factorial(2) = 2 * factorial(1)
# factorial(3) = 3 * factorial(2)
# factorial(3) = 4 * factorial(3)
# factorial(n) = n * factorial(n - 1)

# RULE1: Whenever I call a method, I should stop execution and invoke that method right now
# RULE2: Whenever I return from a method, I return from where I originally called it and bring the return value with me



# def factorial(n)
#     res = 1
#     (1..n).each do |num|
#         res *= num
#     end
#     res
# end


















def sum(n)
    if n == 1
        return 1
    end
    sum(n - 1) + n 
end

p sum(3)

# 3  => 1 + 2 + 3 = 6
# sum(4) => 1 + 2 + 3 + 4 = 10

# sum(1) => 1
# sum(2) => 1 + 2 = 3
# sum(3) => 1 + 2 + 3 = 6
# sum(4)  => (1+ 2 + 3) + 4 => sum(3) + 4
# sum(5) => sum(4) + 5
# sum(n) =>    sum(n - 1)   + n
