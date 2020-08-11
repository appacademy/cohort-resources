require 'byebug'
#### BLOCK SCOPING ####

## Example 1
# x = 2

# 3.times do
#   x *= 2
# end

# puts x

## Example 2
# 3.times do
#   x = 2
# end

# puts x

#### SCOPE GATES ####

## Example 1

# x = 10
# def some_method
#   puts x
# end

# some_method

#### PASSING ARGUMENTS TO METHODS ####

## Example 1
# def inc(num) 
#   #num = a (1)
#   num += 1 #num = num + 1 
# end

# a = 1
# p inc(a) 

# puts a

## Example 2
def add_square(arr, num)
  arr += [(num ** 2)]
end

squares = [1, 4, 9]
p squares
add_square(squares, 4)

p squares


