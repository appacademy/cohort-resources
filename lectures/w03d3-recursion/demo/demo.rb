# function takes in a number, n, and sums all numbers to n

def iter_sum(n)
    answer = 0
    (0..n).each do |num|
        answer += num
    end
    answer
end

# p iter_sum(1) #=> 1
# p iter_sum(3) #=> 6
# p iter_sum(7) #=> 28
# p iter_sum(100) #=> 5050


def rec_sum(n)
    return 1 if n == 1
    n += rec_sum(n - 1)
end

# p rec_sum(1) #=> 1
# p rec_sum(2) #=> 3
# p rec_sum(3) #=> 6
# p rec_sum(7) #=> 28
# p rec_sum(100) #=> 5050
# p rec_sum(100000) # too many recursive calls breaks ruby's call stack 


def iter_reverse(str)
    answer = ''
    i = str.length - 1
    while i >= 0
        answer += str[i]
        i -= 1
    end
    answer
end  

# p iter_reverse("input")


def rec_reverse(str) 
    return '' if str.length == 0
    str[-1] + rec_reverse(str[0...-1])
    # 't' + 'ac'
    # 'a' + 'c'
    # 'c' + rec_reverse('')
    # ''
end

# p rec_reverse("cat")
# p rec_reverse("coding")



# Fibonacci examples:

# Return the nth Fibonacci number
def fibs(n)
    return 0 if n == 1
    return 1 if n == 2
    fibs(n-1) + fibs(n-2)
end 

# [0, 1, 1, 2, 3, 5, 8...]

# p fibs(1) #=> 0
# p fibs(2) #=> 1
# p fibs(3) #=> 1
# p fibs(4) #=> 2
# p fibs(5) #=> 3
# p fibs(6) #=> 5


# Find all the Fibonacci numbers up to and including the nth

# Returning an array
def all_fibs(n) #n = 3
    return [] if n == 0
    return [0] if n == 1
    return [0, 1] if n == 2
    # all_fibs(n-1) #=> all_fibs(3-1) => all_fibs(2) => [0, 1]
    # << all_fibs(n-1)[-1] + all_fibs(n-1)[-2]

    # all_fibs(n-1)[-1] => all_fibs(3-1)[-1] => all_fibs(2)[-1] => 1

    # [0, 1] << (1 + 0) => [0, 1, 1]


    all_fibs(n-1) << all_fibs(n-1)[-1] + all_fibs(n-1)[-2]
end

# p all_fibs(0) #=> []
# p all_fibs(1) #=> [0]
# p all_fibs(2) #=> [0, 1]
# p all_fibs(3) #=> [0, 1, 1]
# p all_fibs(4) #=> [0, 1, 1, 2]
# p all_fibs(5) #=> [0, 1, 1, 2, 3]
# p all_fibs(6) #=> [0, 1, 1, 2, 3, 5]


# now with memoization!
def fast_all_fibs(n)
    return [] if n == 0
    return [0] if n == 1
    return [0, 1] if n == 2
    prev_fibs = fast_all_fibs(n-1)
    prev_fibs << prev_fibs[-1] + prev_fibs[-2]
end

# p fast_all_fibs(0) #=> []
# p fast_all_fibs(1) #=> [0]
# p fast_all_fibs(2) #=> [0, 1]
# p fast_all_fibs(3) #=> [0, 1, 1]
# p fast_all_fibs(4) #=> [0, 1, 1, 2]
# p fast_all_fibs(5) #=> [0, 1, 1, 2, 3]
# p fast_all_fibs(6) #=> [0, 1, 1, 2, 3, 5]




# Quick Sort

# Grab a pivot (first number in array)
# Compare & filter every other number in array to pivot (what's greater, smaller, equal?)
# Call each new, filtered array recursively
# Concat or += answer at the end

def quick_sort(arr)
    # return [] if arr.empty?
    # return arr if arr.length == 1
    return arr if arr.length <= 1
    pivot = arr.shift
    left_arr = arr.select{|num| num <= pivot}
    right_arr = arr.select{|num| num > pivot}
    left_sorted = quick_sort(left_arr)
    right_sorted = quick_sort(right_arr)
    left_sorted.concat([pivot], right_sorted)
    # left_sorted += [pivot] + right_sorted
end

p quick_sort([]) #=> []
p quick_sort([5]) #=> [5]
p quick_sort([9, 2]) #=> [2, 9]
p quick_sort([4, 2, 8]) #=> [2, 4, 8]
p quick_sort([3, 2, 5, 4, 3, 7]) #=> [2, 3, 3, 4, 5, 7]
p quick_sort([2, 6, 4, 1, 9, 5]) #=> [1, 2, 4, 5, 6, 9]

# pivot = 2; right_arr = [6, 4, 9, 5]; right_sorted = [4, 5, 6, 9]
# pivot = 6; left_arr = [4, 5]; right_arr & right_sorted = [9]; left_sorted = [4, 5] => [4, 5, 6, 9]
# pivot = [4]; right_arr & right_sorted = [5]; left_arr & left_sorted = [] => [].concat([4], [5]) => [4, 5]
