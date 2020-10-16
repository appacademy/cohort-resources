# Take 30 seconds to think about what the runtime is for each algorithm.
# What is the time complexity?



# Ridiculous sort
def ridiculous_sort(array)
  permutations = array.permutation.to_a

  sorted = permutations.select do |perm|
    perm == array.sort
  end
  sorted.first
end
# What is the time complexity? O(nlogn * n!) or O(n^2 * n!)




# Takes a message and an increment amount and outputs an encoded message.
def caesar_cipher(str, shift)
  letters = ("a".."z").to_a

  encoded_str = ""
  str.each_char do |char|
    if char == " "
      encoded_str << " "
      next
    end

    old_idx = letters.find_index(char)
    new_idx = (old_idx + shift) % letters.length

    encoded_str << letters[new_idx]
  end

  encoded_str
end
# What is the time complexity? O(n)




# Fibonacci
def fibos(num)
  return [0, 1].take(num) if num <= 2

  fibs = [0, 1]
  while fibs.length < num
    fibs << fibs[-1] + fibs[-2]
  end

  fibs
end
# What is the time complexity? O(n)




# Depth-first search
def dfs(node, target)
  return node if node.value == target 

  node.children.each do |child| 
    result = dfs(child, target)  
    return result unless result.nil?
  end

  nil
end
# What is the time complexity? O(n)




# Finds all pairs of positions where the elements at those positions sum to zero.
def two_sum(array)
  pairs = []
  (0...array.length).each do |i|
    ((i + 1)...array.length).each do |j|
      pairs << [i, j] if array[i] + array[j] == 0
    end
  end

  pairs
end
# What is the time complexity? O(n^2)

