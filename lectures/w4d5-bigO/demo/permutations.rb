def permutations(array)
  return [array] if array.length <= 1

  first = array.pop

  perms = permutations(array) # (n-1)!
  total = []

  perms.each do |perm|  # (n-1)!
    (0..perm.length).each do |i| # (n)
      total << perm[0 ... i] + [first] + perm[i .. -1] # (n)
    end
  end
  total
end

# n = 4 
# n * n * (n-1)!
# 4 * 4 * 3 * 2 * 1 => n*n!

# permutations([]) => [[]]
# permutations([1]) => [[1]]
# permutations([1,2]) => [[1,2],[2,1]]
# permutations([1,2,3]) => [[1,2,3],[1,3,2],[3,1,2],[2,1,3],[2,3,1],[3,2,1]]
# permutations([1,2,3,4]) => [[1,2,3,4],[1,2,4,3],[1,4,2,3],[4,1,2,3],
#                             [1,3,2,4],[1,3,4,2],[1,4,3,2],[4,1,3,2],
#                             [3,1,2,4],[3,1,4,2],[3,4,1,2],[4,3,1,2],
#                             [2,1,3,4],[2,1,4,3],[2,4,1,3],[4,2,1,3],
#                             [2,3,1,4],[2,3,4,1],[2,4,3,1],[4,2,3,1],
#                             [3,2,1,4],[3,2,4,1],[3,4,2,1],[4,3,2,1]]