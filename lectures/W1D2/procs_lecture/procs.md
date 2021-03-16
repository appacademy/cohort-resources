array.map { |block_param| block_param.method }
array.map(&:method)

[1,2,3].map { |num| num * 2 } # => [2, 4, 6]
doubler = Proc.new { |num| num * 2 }
[1,2,3].map(&doubler) # => [2, 4, 6]