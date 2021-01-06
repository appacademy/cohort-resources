# [11, 7, 2, 4].inject { |acc, el| acc + el } # => 24
# p [11, 7, 2, 4].inject(100) { |acc, el| acc + el } # => 124


p [11, 7, 2, 4].inject(100) do |acc, el| 
  acc + el 
end 

