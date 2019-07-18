# Write a method my_map! that accepts an array and a block as args. 
# The method should mutate elements of the input array by replacing them with 
# their result when passed into the block. The method should not use the built-in Array#map or Array#map!.






# Examples

arr_1 = [1,2,3,4]
my_map!(arr_1) { |n| n * n }
p arr_1      # => [1, 4, 9, 16]

arr_2 = ['give', 'more', 'take', 'less']
my_map!(arr_2) { |s| s.capitalize + '!' }
p arr_2      # => ['Give!', 'More!', 'Take!', 'Less!']