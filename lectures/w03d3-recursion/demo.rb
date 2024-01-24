# sum the integers from 1 to n, inclusive
def recursive_sum(n)
  # base case
  return 1 if n == 1

  n + recursive_sum(n - 1)
end

# p recursive_sum(1) # 1
# p recursive_sum(5) # 15

# reverses the given string
def reverse_string(str)
  # base case
  return str if str.length <= 1

  # inductive step
  str[-1] + reverse_string(str[0...-1])
end

# p reverse_string('cat') # 'tac'
# p reverse_string('taco') # 'ocat'
# p reverse_string('')

# return the nth element of the Fibonacci sequence, where the 0th element is 0
# 0 1 1 2 3 5 8 13 21 34 55
def fib(n, cache = {})
  return cache[n] if cache.key?(n)
  # base cases
  return 0 if n == 0
  return 1 if n == 1

  # inductive step
  res = fib(n - 1, cache) + fib(n - 2, cache)
  cache[n] = res
  res
end

# p fib(2) # 1
# p fib(4) # 3
# p fib(5000)

class Array
  # returns a flat, one-dimenstional array (aka no subarrays)
  def my_flatten
    res = []
    self.each do |ele|
      if ele.is_a?(Array)
        res += ele.my_flatten
      else
        res << ele
      end
    end
    res
  end
end

# p [1,[4,11,[3,5],3,[18]],7,[23,1]].my_flatten

# return an array containing all unique, unordered subsets (also arrays)
def combinations(arr)
  # base case
  return [[]] if arr.length == 0

  new_element = arr.last
  sub_problem = arr[0...-1]
  sub_problem_solution = combinations(sub_problem)
  sub_problem_solution +
end

p combinations([1,2,3]) # [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]