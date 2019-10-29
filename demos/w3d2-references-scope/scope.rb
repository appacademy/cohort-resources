#### BLOCK SCOPING ####

## Example 1
# x = 2

# 3.times do
#   x *= 2
# end

# puts x

## Example 2
# 3.times do
#   x = 2 # declared inside, do not have access outside
#   puts x
# end

# puts x

# #### SCOPE GATES ####

# ## Example 1
# x = 10

# # Enter scope gate, lose all local variables
# def some_method
#   puts x
# end

# some_method

# #### PASSING ARGUMENTS TO METHODS ####

# ## Example 1
# def inc(num) # Scope Gate, num is parameter of the method
#   num += 1 # => num = num + 1 => num = 1 + 1 => num = 2
# end

# a = 1
# inc(a) # a is argument passed to method

# puts a

# ## Example 2
# Scope Gate
# def add_square(arr, num) # arr & num are parameters
#   arr << (num ** 2) # MUTATE array referenced by `arr`
# end

# squares = [1, 4, 9]
# add_square(squares, 4) # squares & 4 are arguments

# p squares