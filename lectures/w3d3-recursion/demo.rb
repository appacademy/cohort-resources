require 'byebug'

# function takes in a number, n, and sums all numbers to n

def iter_sum(n)
    count = 0
    (0..n).each do |num|
        count += num
    end
    count
end

# p iter_sum(3)
# p iter_sum(7)
# p iter_sum(100)

# n is num between 1 and infinity
def rec_sum(n)
    return 1 if n == 1 # base case
    # n = 3 => we want 6 
    # we expect rec_sum(2) == 3
    # rec_sum(1) == 1 => base case
    # 3 + rec_sum(2)
    # 2 + rec_sum(1)
    n + rec_sum(n - 1) # recursive call
end
# p "-------- RECURSION --------"
# p rec_sum(3)
# p rec_sum(7)
# p rec_sum(100)
# p rec_sum(100000) # too many recursive calls breaks ruby's call stack 

# reverses a string

def rec_reverse(str) # str = "a"
    return str if str.length == 0 # base case
    str[-1] + rec_reverse(str[(0..-2)])
    #str[-1] = "a" + rec_reverse(str[0..-2] = "")
end

# p rec_reverse("cat")

def iter_reverse(str)
    reversed_str = ""
    i = str.length - 1
    while i >= 0
        reversed_str += str[i]
        i -= 1 # if you forget this you're stuck in a LOOP
    end
    reversed_str
end

# p iter_reverse("cat")

# this func returns a collection (aka Array) of numbers which are
# in the range of 1 to num and are divisable by the divisor 
# positive integers only
def all_divisable_nums(num, divisor)
    # return [1] if num == 1 not quite
    return [] if num < divisor # divisor = 5, num = 4
    return [num] if num == divisor # divisor = 5, num = 5
    # num = 10, divisor = 5
    # if we can evenly divide the num by the divisor, we want the num
    if num % divisor == 0
        # adding the num to the result of the recursive call
        # we know all_divisable_nums returns an array because of the
        # base cases
        all_divisable_nums(num - 1, divisor) << num # trust fall
    else
        all_divisable_nums(num - 1, divisor)
    end
end

#num = 6, divisor = 5

# p all_divisable_nums(10, 5)
# p all_divisable_nums(100, 5)
# p all_divisable_nums(40, 7)


# Pascal's (slanty) Triangle
#         1
#        1 1
#       1 2 1
#      1 3 3 1
#     1 4 6 4 1
#   1 5 10 10 5 1
# 1 6 15 20 15 6 1

def pascal_row(n)
    return [1] if n == 0
    return [1, 1] if n == 1

    last_row = pascal_row(n - 1) # saves the value so we don't have to do this call multiple time
    new_fragment = []

    last_row.each_with_index do |el, i|
        break if i == last_row.length - 1 # makes sure we don't run off the end of the array
        new_fragment << last_row[i + 1] + el # adds the new value 
    end
    [1] + new_fragment + [1]
end

p pascal_row(0)
p pascal_row(1)
p pascal_row(2)
p pascal_row(3)
p pascal_row(4)
p pascal_row(5)
p pascal_row(6)
p pascal_row(7)
p pascal_row(8)