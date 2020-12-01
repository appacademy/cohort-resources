#### BLOCK SCOPING ####
require "byebug"
## Example 1
# x = 2

# 3.times do
#   x *= 2
# end

# debugger
# puts x

## Example 2
# 3.times do
#   x = 2
# end
# debugger
# puts x

#### SCOPE GATES ####

# Example 1
# x = 10

# def some_method
#   debugger
#   puts x
# end
# some_method
# debugger
# s = "s"

#### PASSING ARGUMENTS TO METHODS ####

## Example 1
# def inc(arr)
#   debugger
#   arr.push(2)
#   s = "s"
# end

# a = [1,2,3]
# inc(a)
# debugger
# puts a

## Example 2
def add_square(arr, num)
  arr << (num ** 2)
end

squares = [1, 4, 9]
add_square(squares, 4)
debugger

p squares  