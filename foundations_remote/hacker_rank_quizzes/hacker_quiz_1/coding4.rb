# write a method, anti_prime?, that accepts a postive number as an argument. 
# the method should return true if the given number has more divisiors
# than any positive number before it. the method should return false 
# otherwise

# for example, 

# 6 is an anti-prime number because 6 has four divisors (1,2,3,6) and 
# there is no positive number less than 6 that has four or more divisors

# Examples
p anti_prime?(6)    # => true
p anti_prime?(12)   # => true
p anti_prime?(24)   # => true
p anti_prime?(48)   # => true

p anti_prime?(7)    # => false
p anti_prime?(16)   # => false
p anti_prime?(45)   # => false
p anti_prime?(72)   # => false