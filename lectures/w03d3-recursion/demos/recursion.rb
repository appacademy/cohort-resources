
#write a method iter_sum that adds all the numbers from 0 to n iteratively
def iter_sum(n)
end

# p iter_sum(3)
# p iter_sum(7)
# p iter_sum(100)


#write a method rec_sum that adds all the numbers from 0 to n recursively
def rec_sum(n)
end

# p "-------- RECURSION --------"
# p rec_sum(3)
# p rec_sum(7)  
# p rec_sum(100)
# p rec_sum(100000) # too many recursive calls breaks ruby's call stack 



#write a method rec_reverse that reverses a string recursively
def rec_reverse(str) 
end

# p rec_reverse("cat")

def iter_reverse(str)
end  

# p rec_reverse("cat")





# Fibonacci examples:

# Return the nth Fibonacci number. First 3 fibs = [0,1,1]
def fibs(n)
end 

# p fibs(1) #=> 0
# p fibs(2) #=> 1
# p fibs(3) #=> 1
# p fibs(4) #=> 2
# p fibs(5) #=> 3
# p fibs(6) #=> 5


# Find all the Fibonacci numbers up to and including the nth
def all_fibs(n) 
end

# p all_fibs(0) #=> []
# p all_fibs(1) #=> [0]
# p all_fibs(2) #=> [0, 1]
# p all_fibs(3) #=> [0, 1, 1]
# p all_fibs(4) #=> [0, 1, 1, 2]
# p all_fibs(5) #=> [0, 1, 1, 2, 3]
# p all_fibs(6) #=> [0, 1, 1, 2 ,3, 5]

# now with memoization!
def fast_all_fibs(n)
end

# p fast_all_fibs(0)
# p fast_all_fibs(1)
# p fast_all_fibs(2) 
# p fast_all_fibs(3) 
# p fast_all_fibs(4) 
# p fast_all_fibs(5) 
# p fast_all_fibs(6) 




#Binary Search
#Given a sorted array, return the index of the target if its present. Otherwise, return nil

def binary_search(arr, target)

end

# p binary_search([1,2,3,4,5,6,7,8,9], 2)
# p binary_search([1,2,3,4,5,6,7,8,9], 7)
# p binary_search([1,2,3,4,5,6,7,8,9], 1)
# p binary_search([1,2,3,4,5,6,7,8,9], 9)
# p binary_search([1,2,3,4,5,6,7,8,9], 12)