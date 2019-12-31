require 'byebug'
# Return the sum of all numbers up to and including n

def iter_sum(n)
  sum = 0

  1.upto(n).each do |num|
    sum += num
  end

  sum
end

def rec_sum(n) 
  # What type are we returning?
  # What is the base case?
#   debugger
  return 1 if n == 1
#   debugger
  sum = rec_sum(n-1)
#   debugger
  rec_sum(n-1) + n
end

p rec_sum(100)
# p rec_sum(100)


# Return the input string in reverse

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


# Return all the numbers divisible by divisor that are ≤ num

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
    # return result
  else
    debugger
    result = all_divisible_nums(num - 1, divisor)
    debugger
    # return result
  end
  debugger
  result
end
# p all_divisible_nums(2, 3)
# p all_divisible_nums(3, 3)
# p all_divisible_nums(4, 3)
# p all_divisible_nums(6, 3)

# PASCAL'S TRIANGLE

def pascal_triangle(n)
    # debugger
    if n == 0
        return [[1]]
    elsif n == 1
        return[[1],[1,1]]
    end

    # debugger
    result = pascal_triangle(n-1)   
    # result = [[1]]
    new_row = [1]
    
    previous_row = pascal_triangle(n-1)[-1]
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

# p pascal_triangle(0)
# p pascal_triangle(1)
# p pascal_triangle(35)
# p pascal_triangle(3)
