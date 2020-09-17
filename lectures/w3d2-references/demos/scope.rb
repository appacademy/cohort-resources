#### BLOCK SCOPING ####

## Example 1
# x = 2

# 3.times do
#   x *= 2 # reassign a previously defined variable
# end

# puts x  # => 16


## Example 2
# 3.times do
#   x = 2 # declared at an inner scope, we don't have acces to it outside
# end

# p x  # => undefined local variable or method `x'



#### SCOPE GATES ####

# Example 1
# x = 10

# def some_method
#   puts x
# end

# some_method # undefined local variable or method `x'




#### PASSING ARGUMENTS TO METHODS ####

# ## Example 1
# def inc(num)
#   num += 1 # `+=` reassigns num
# end

# a = 1
# inc(a)

# puts a # => 1


# ## Example 2
def add_square(arr, num) # `arr` is the parameter (copy of argument)
  arr << (num ** 2) # '<<' mutates arr(squares)
end

squares = [1, 4, 9]
add_square(squares, 4) # `squares` is the argument

p squares # => [1, 4, 9, 16]