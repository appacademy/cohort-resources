require 'byebug'
# we are going to sum all nums from 1-n
# n can be a num from 1 - inifite
def iter_sum(n)
    # (1..n).sum
    count = 0
    (0..n).each do |num|
        count += num
    end
    count
end

# p iter_sum(3)
# p iter_sum(7)
# p iter_sum(100)


def rec_sum(n)
    # this is base case
    return 1 if n == 1 
    # we expect the rec_sum(2) == 3
    # rec_sum(3)== 6
    # 2 + rec_sum(1) => 3
    # 3 + rec_sum(2) => 6

    #this is our recursive call
    n + rec_sum(n - 1)
end

# p "-------- RECURSION --------"
# p rec_sum(3)
# p rec_sum(7)
# p rec_sum(100)
# p rec_sum(100000) # too many recursive calls breaks ruby's call stack 

#takes str as input and returns reversed version of that str
def rec_reverse(str) 
    #base case
    return str if str.length == 0

    str[-1] + rec_reverse(str[0..-2])

end

# p rec_reverse("cat")
# p rec_reverse("")
# p rec_reverse("t")

#use iteration
def iter_reverse(str)
    rev_str = ""
    i = str.length - 1
    while i >= 0
        rev_str += str[i]
        i -= 1
    end
    rev_str
end  

# p iter_reverse("cat")
# p iter_reverse("")
# p iter_reverse("t")

# Fibonacci examples:
# Return the nth Fibonacci number
# 0,1,1,2,3,5,8,13,21,34
# each num is the sum of the prev two nums in the sequence
def fibs(n)
    #return an integer
    return 0 if n == 1
    return 1 if n == 2
    fibs(n - 1) + fibs(n - 2)
end 

# p fibs(1) 
# p fibs(2) 
# p fibs(3)
# p fibs(4)
# p fibs(5)
# p fibs(6) 
# p fibs(9) 

# Find all the Fibonacci numbers up to and including the nth
def all_fibs(n) 
    #n can be any value from 0 - infinite
    # possible to have multiple base cases
    # return [] if n == 0
    # return [0] if n == 1
    # return [0, 1] if n == 2
    return [0,1].take(n) if n <= 2
    # when n == 3 return [0,1,1]
    all_fibs(n - 1) << all_fibs(n - 1)[-1] + all_fibs(n - 1)[-2]

end

# p all_fibs(0)
# p all_fibs(1)
# p all_fibs(2)
# p all_fibs(3)
# p all_fibs(4)
# p all_fibs(5)
# p all_fibs(6)
# p all_fibs(17)

# now with memoization!
def fast_all_fibs(n)
    return [0,1].take(n) if n <= 2
    prev_fibs = fast_all_fibs(n - 1)
    prev_fibs << prev_fibs[-1] + prev_fibs[-2]

end

# p fast_all_fibs(0)
# p fast_all_fibs(1)
# p fast_all_fibs(2) 
# p fast_all_fibs(3) 
# p fast_all_fibs(4) 
# p fast_all_fibs(5) 
# p fast_all_fibs(6) 
# p fast_all_fibs(17) 
# p fast_all_fibs(20) 
# p fast_all_fibs(30) 

# Pascal's Triangle
#         1
#        1 1
#       1 2 1
#      1 3 3 1
#     1 4 6 4 1
#   1 5 10 10 5 1
# 1 6 15 20 15 6 1

#return nth row as an array

def pascal_row(n)
    return [1] if n == 0
    return [1,1] if n == 1
    last_row = pascal_row(n - 1) #store value to not make call multiple times
    fragment = []
    last_row.each_with_index do |ele, i|
        break if i == last_row.length - 1  #make sure not to run off end of array
        fragment << ele + last_row[i + 1] # adds the new value we are creating 
    end 
    [1] + fragment + [1]
end

p pascal_row(0)
p pascal_row(1)
p pascal_row(2)
p pascal_row(3)
p pascal_row(4)
p pascal_row(5)
p pascal_row(6)