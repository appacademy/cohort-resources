# Monkey patch the existing integer class by defining 
# an Integer#factors method. The method should return an array containing all 
# positive divisors of the integer. The array should be arranged in 
# ascending order.

class Integer
    
end

p 6.factors   # => [1, 2, 3, 6]
p 15.factors  # => [1, 3, 5, 15]
p 17.factors  # => [1, 17]
p 24.factors  # => [1, 2, 3, 4, 6, 8, 12, 24]

p 6.factors   # => [1, 2, 3, 6]
p 15.factors  # => [1, 3, 5, 15]
p 17.factors  # => [1, 17]
p 24.factors  # => [1, 2, 3, 4, 6, 8, 12, 24]