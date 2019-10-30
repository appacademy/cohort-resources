require 'byebug'

###############
# RECURSION   #
###############

# What is Recursion?


# What do we need to write a useful recursive method?
# 1. Base case
# 2. Inductive step

# return array containing the first n fibs
# examples

# fibs(0) => []
# fibs(1) => [0]
# fibs(7) => [0, 1, 1, 2, 3, 5, 8]

def fibs(n) # => 4
    # USING MULTIPLE BASE CASES
    # return [] if n == 0
    # return [0] if n == 1
    # return [0,1] if n == 2
    
    # USING SINGLE BASE CASE
    return [0,1].take(n) if n <= 2

    # MEMOIZING THE RECURSIVE CALL
    prev_fib = fibs(n-1) # => [0,1,1]

    next_fib = prev_fib[-1] + prev_fib[-2] # 1 + 0 = 1

    prev_fib << next_fib
end


class Array 
    def quicksort
        # Works by selecting a pivot element from the array, then splitting the 
        # array in 2: 
        #   - 'left' : containing all elements less than than the pivot
        #   - 'right' : containing all elements more than or equal to the pivot
        #               (excluding the pivot)
        # Quicksort is called recursively on these arrays to sort them,
        # returning the sorted arrays concatenated with the pivot

        # 1. what is the base case?

        # e.g [3,2,1,4].quicksort
        
        return self.dup if self.length <= 1

        pivot = self.first # => 3
        left = [] # => [2,1]
        right = [] # => [4]

        self.drop(1).each do |el|
            if el < pivot
                left << el
            else 
                right << el
            end
        end

        # left_sorted = left.quicksort # => [1,2]
        # right_sorted = right.quicksort # [4]

        left.quicksort + [pivot] + right.quicksort # = > [1,2] + [3] + [4] = [1,2,3,4]
    end
end