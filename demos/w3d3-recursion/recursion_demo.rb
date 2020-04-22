require 'byebug'

# ? Return the sum of all numbers up to and including n
def iter_sum(n)
  sum = 0

  1.upto(n).each do |num|
    sum += num
  end

  sum
end

# display n
# display sum
def rec_sum(n) 
  # What type are we returning?
  # What is the base case?
  # debugger
  return 1 if n == 1

  # debugger
  sum = rec_sum(n-1)

  # debugger
  sum + n
end

# p rec_sum(4)
# p rec_sum(100)


# ? Return the input string in reverse
# * display string 
# * display sub_str
# * display string[-1]

def reverse_rec(string)
  debugger
  return '' if string.empty?

  # reverse_rec(string[1..-1]) + string[0]
  debugger
  sub_str = reverse_rec(string[0...-1])

  debugger
  string[-1] + sub_str
end
# p reverse_rec("")
# p reverse_rec("a")
# p reverse_rec("ar")
# p reverse_rec("arl")


# ? Return all the numbers divisible by divisor that are ≤ num
# * display num
# * display divisor

def all_divisible_nums(num, divisor)
  debugger
  return [] if num < divisor
  return [num] if num == divisor
  debugger
  if (num % divisor).zero?
    debugger
    result = all_divisible_nums(num - 1, divisor)
    debugger
    result << num
  else
    debugger
    result = all_divisible_nums(num - 1, divisor)
  end
  debugger
  result
end
# p all_divisible_nums(2, 3)
# p all_divisible_nums(3, 3)
# p all_divisible_nums(4, 3)
# p all_divisible_nums(6, 3)

# ? PASCAL'S TRIANGLE EFFICIENT
def pascal_triangle_efficient(n)
    # debugger
    if n <= 0
      return []
    elsif n == 1
      return[[1]]
    elsif n == 2
      return [[1],[1,1]]
    end

    # debugger
    result = pascal_triangle_efficient(n-1)   
    new_row = [1]
    previous_row = result[-1]
    # debugger
    (0...previous_row.length-1).each do |idx|
        # debugger
        sum = 0
        sum = previous_row[idx] + previous_row[idx + 1]
        new_row.push(sum) 
    end
    # debugger
    new_row << 1
    result << new_row
end

# p pascal_triangle_efficient(0)
# p pascal_triangle_efficient(1)
# p pascal_triangle_efficient(2)
# p pascal_triangle_efficient(4)
# p pascal_triangle_efficient(5)
# p pascal_triangle_efficient(35)

# ? PASCAL'S TRIANGLE NOT EFFICIENT
def pascal_triangle_not_efficient(n)
    # debugger
    if n == 0
        return []
    elsif n == 1
        return[[1]]
    end

    # debugger
    result = pascal_triangle_not_efficient(n-1)   
    new_row = [1]
    previous_row = pascal_triangle_not_efficient(n-1)[-1]
    # debugger
    (0...previous_row.length-1).each do |idx|
        # debugger
        sum = 0
        sum = previous_row[idx] + previous_row[idx + 1]
        new_row.push(sum) 
    end
    # debugger
    new_row << 1
    result << new_row
end

# p pascal_triangle_not_efficient(0)
# p pascal_triangle_not_efficient(1)
# p pascal_triangle_not_efficient(3)
# p pascal_triangle_not_efficient(25)


# ? Memoization

def fib(n)
  return 1 if n == 2 || n == 1
  fib(n-1) + fib(n-2)
end

# p fib(100)

def fibonacci(n, memo_hash)
  return 1 if n == 2 || n == 1

  if memo_hash[n]
    return memo_hash[n]
  end

  return2 = fibonacci(n-2,memo_hash)
  return1 = fibonacci(n-1,memo_hash)
  sum = return1 + return2

  memo_hash[n] = sum 
  return sum
end

p fibonacci(100,{})
