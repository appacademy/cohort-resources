require "byebug"

# Sorting is a good problem to solve with recursion

# How does quicksort sort?
  # takes pivot element
  # splits elements smaller/larger to left/right side respectively
  # call quicksort on both left and right arrays
    # now have two sorted arrays and pivot element
  # return left sorted array + [pivot] + right sorted array


class Array

  def quicksort
    # base case: array length is 1 or 0
    # debugger
    return self if self.length <= 1
    
    pivot = self.first

    left = self[1..-1].select { |ele| ele < pivot }
    right = self[1..-1].select { |ele| ele >= pivot }

    # inductive step: sort and recombine the left, right, and pivot
    # debugger
    sorted_left = left.quicksort
    sorted_right = right.quicksort
    
    # debugger
    return sorted_left + [pivot] + sorted_right
  end
    
end
  
  
array = [3, 2, 1]
p array.quicksort 