class Array
  def subsets
    return [[]] if empty?
    subs = self.take(count - 1).subsets # length of output => 2^(n-1)
    subs.concat(subs.map { |sub| sub + [last] }) # 2^(n-1)
  end
end

# 2^(n-1) + 2^(n-1) = 2^n 

# [].subsets =>         [[]]
# [1].subsets =>        [[], [1]]
# [1,2].subsets =>      [[], [1], [2], [1,2]]
# [1,2,3].subsets =>    [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
# [1,2,3,4].subsets =>  [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3], 
#                       [4], [1,4], [2,4], [1,2,4], [3,4], [1,3,4], [2,3,4], [1,2,3,4]]
# [1,2,3,4,5].subsets