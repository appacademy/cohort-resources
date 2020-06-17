require 'byebug'
# SUM NUMS UP TO n
# Return the sum of all numbers up to and including n

def iter_sum(n)
  sum = 0 
  
  counter = 0
  
  while counter <= n
    sum += counter
    counter += 1
  end
  
  sum
end
# puts iter_sum(5) # 15

# rec_sum(5) => 15
def rec_sum(n)
  # What type are we returning? => inter
  # What is the base case?
  # return 0 if n == 0
  # return 1 if n == 1
  return n if n < 2

  rec_sum(n-1) + n
end

# p rec_sum(5)


# STRING REVERSE
# Return the input string in reverse
# reverse_rec("hello") => "olleh"

def reverse_rec(string) # "hello"
  return "" if string.length.zero?

  # "hell" => "lleh"
  # string[-1] + reverse_rec(string[0..-2])
  string[-1] + reverse_rec(string[0...string.length-1])
end

# p reverse_rec("hello")

def reverse_iter(string)
  # string.reverse
  new_str = ""
  (string.length-1).downto(0) do |num|
    new_str += string[num]
  end

  new_str
end

# p reverse_iter("hello")



# ALL DIVISIBLE NUMS
# Return all the numbers divisible by divisor that are ≤ num
# all_divisible_nums(8, 3) => [3,6]

def all_divisible_nums(num, divisor)
  return [num] if divisor == num
  return [] if divisor > num
  
  if num % divisor == 0
    all_divisible_nums(num-1, divisor) << num 
  else
    all_divisible_nums(num-1, divisor)
  end
end

# p all_divisible_nums(8, 3)


# n ROW IN PASCAL'S TRIANGLE
# pascal_row(3) => [1,3,3,1]

def pascal_row(num)
  return [1] if num.zero?
  return [1,1] if num == 1

  prev_pascal = pascal_row(num - 1)
  new_row = [1]

  prev_pascal.each_with_index do |ele, idx|
    if idx > prev_pascal.length - 2
      new_row << 1
    else
      new_row << ele + prev_pascal[idx + 1]
    end
  end

  new_row
end

# p pascal_row(0)
# p pascal_row(3)
# p pascal_row(4)
# p pascal_row(7)