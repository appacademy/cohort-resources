# write a method, at_least?, that accepts an array, a number(n), and a block.
#The method should return true if at least n elements of the array result in true when passed into the block. 
# The method should return false if less than n elements result in true when passed into
# the block 

# Examples
p at_least?(["a", "B", "C", "D", "E"], 3) { |el| el == el.upcase } # => true
p at_least?(["a", "B", "C", "d", "E"], 3) { |el| el == el.upcase } # => true
p at_least?(["a", "B", "C", "d", "e"], 3) { |el| el == el.upcase } # => false
p at_least?(["a", "B", "C", "d", "e"], 3) { |el| el == el.upcase } # => false
p at_least?(["a", "B", "C", "d", "e"], 2) { |el| el == el.upcase } # => true
p at_least?([-3, -11, -5], 1) { |el| el > 0 }                      # => false
p at_least?([-3, 11, -5], 1) { |el| el > 0 }                       # => true
p at_least?([3, 11, -5], 1) { |el| el > 0 }                        # => true