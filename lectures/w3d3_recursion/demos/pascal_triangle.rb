def pascal_row(num)
    return [1] if num == 1
    res = [1]
    (0).upto(pascal_row(num - 1).length - 2).each do |idx|
      sum = pascal_row(num - 1)[idx] + pascal_row(num - 1)[idx + 1]
      res << sum
    end
    res << 1
end
# p  pascal_row(5)
# 10.times do |i|
#   p pascal_row(i)
# end
# func(2) => [1,1]
# func(3) =>[1,2,1]  => [1,  2      ,1]
# func(4) => [1,3,3,1] => [1,3, 3, 1]
# p pascal_row(2)
# p pascal_row(3)
# p pascal_row(4)






# PASCAL'S TRIANGLE

def better_pascal_row(num)
    # THIS METHOD USES MEMOIZATION
    # This is the process of saving data through recursive calls
  
    return [1] if num == 1
    res = [1]
    prev_pascal = better_pascal_row(num - 1)
    (0).upto(prev_pascal.length - 2).each do |idx|
      sum = prev_pascal[idx] + prev_pascal[idx + 1]
      res << sum
    end
    res << 1
end
  
10.times do |i|
  p better_pascal_row(i+1)
end

  
 

 



