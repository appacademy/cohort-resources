# Write a method two? that accepts an array and a block as args. The method should 
# return a boolean indicating if there are exactly two elements of the array that 
# return true when passed into the block.



# Examples

p two?([7, 4, 10, 3, 1]) { |x| x.even? }      # => true
p two?([7, -5, 0, -1, 1]) { |x| x > 0 }       # => true
p two?([2019, 121, 10]) { |x| x.even? }       # => false
p two?([4, 5, 6, 7, -8]) { |x| x > 0 }        # => false