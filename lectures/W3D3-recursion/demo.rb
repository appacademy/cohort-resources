require 'byebug'
# SUM NUMS UP TO n
# Return the sum of all numbers up to and including n
# iter_sum(5) => 15

def iter_sum(n)
  sum = 0
  (0..n).each do |num|
    sum += num
  end
  sum
end
puts iter_sum(5) # 15

# rec_sum(5) => 15
def rec_sum(n)
  return 1 if n == 1

  rec_sum(n - 1) + n
end

p rec_sum(5)


# STRING REVERSE
# Return the input string in reverse
# reverse_rec("hello") => "olleh"

def reverse_rec(string) # "hello"
  return string if string.length <= 1 # base case

  reverse_rec(string[1...string.length]) + string[0]
end

p reverse_rec("hello")

def reverse_iter(string)
  rev = ""
  i = string.length - 1
  until i < 0
    rev << string[i]
    i -= 1
  end
  rev
end

p reverse_iter("hello")


# ALL DIVISIBLE NUMS
# Return all the numbers divisible by divisor that are ≤ num
# all_divisible_nums(8, 3) => [3,6]

def all_divisible_nums(num, divisor)
  return [num] if num == divisor
  arr = []
  if num % divisor == 0
    arr << num
  end
  nums = all_divisible_nums(num - 1, divisor)

  arr.concat(nums)
end

p all_divisible_nums(8, 3)


# n ROW IN PASCAL'S TRIANGLE
# pascal_row(3) => [1,3,3,1]

def pascal_row(num)
  return [1] if num == 0
  return [1,1] if num == 1
  return [1,2,1] if num == 2
  # we want [1,3,3,1] if num == 3
  new_row = [1]

  prev_row = pascal_row(num - 1) # memoization

  (0...prev_row.length - 1).each do |i| # (0...2)
    new_row << (prev_row[i] + prev_row[i + 1]) # [1,3] << 2 + 1
  end
  # [1,3,3]

  new_row << 1 # [1,3,3,1]

end

p pascal_row(0)
p pascal_row(1)
p pascal_row(2)
p pascal_row(3)
p pascal_row(4)
p pascal_row(20)