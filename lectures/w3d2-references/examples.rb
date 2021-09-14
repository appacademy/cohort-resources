# #### BLOCK SCOPING ####

# ## Example 1
# x = 2

# 3.times do
#   # x declared on line 4
#   x *= 2
# end

# puts x

# ## Example 2
# 3.times do
#   # created a variable x within block
#   x = 2
# end

# # x not accessible outside block
# puts x

# #### SCOPE GATES ####

## Example 1
# x = 10

# # METHOD def ... end does not have access to x on line 25
# # due to SCOPE GATE --> YOU SHALL NOT PASS!!!
# def some_method
#   puts x
# end

# some_method
# # guesses = 10, no local var, error, undefined, 

# #### PASSING ARGUMENTS TO METHODS ####

# ## Example 1
# def inc(num) # num = 1
#   num += 1 # num is reassigned vs mutated
#   # num is reassigned to 2
#   # a is NOT reassigned
# end

# a = 1
# inc(a) # returned val is 2

# puts a # prints 1

# # guesses = 2, 1




## Example 2
# def add_square(arr, num) # arr = squares = [1, 4, 9], num = 4
#   # arr << (num ** 2)
#   arr += [num ** 2] # arr = arr + [], = is reassignment, NOT mutation
# end

# squares = [1, 4, 9]
# add_square(squares, 4) # return [1, 4, 9, 16]

# p squares

# guesses = 
# [1, 4, 9]
# [1, 4, 9, 16] **
