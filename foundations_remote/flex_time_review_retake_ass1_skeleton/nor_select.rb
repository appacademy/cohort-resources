# Write a method nor_select that accepts an array and two procs as args. 
# The method should return a new array containing elements of the original array 
# that result in false when passed into both procs.




even = Proc.new { |n| n.even? }
positive = Proc.new { |n| n > 0 }

p nor_select([-2, -4, 7, -7, -5], even, positive)     # => [-7, -5]
p nor_select([10, 11, 13], even, positive)            # => []


all_uppercase = Proc.new { |x| x == x.upcase }
starts_with_a = Proc.new { |x| x[0].downcase == 'a' }

p nor_select(['potato', 'ORANGE', 'toMATO', 'apple'], all_uppercase, starts_with_a)                   # => ['potato', 'toMATO']
p nor_select(['app', 'academy', 'bootcamp', 'CODING', 'DeVeloper'], all_uppercase, starts_with_a)     # => ['bootcamp', 'DeVeloper']