# Write a method, max_inject(arr), that accepts any amount of numbers as arguments and returns
# the largest number. Solve this using the built-in inject.

def max_inject(*arr)
  # * is "splat" which means any amount of arguments

  # we want to return the largest number in arr
  # inject will iterate over values and return the acc
  arr.inject do |acc, ele|
    # whatever gets returned from this loop, will become the acc
    if acc > ele # 1 > -4
      acc
    else
      ele
    end
  end
end

p max_inject(1, -4, 0, 7, 5)  # => 7
# arr => [1, -4, 0, 7, 5]
p max_inject(30, 28, 18)      # => 30

# Reimplement the bubble sort outlined in the preceding lecture.
# The bubble_sort method should accept an array of numbers and arrange the elements in increasing order.
# The method should return the array.
# Do not use the built-in Array#sort

def bubble_sort(array)
  sorted = false
  while sorted == false # "not sorted" or while sorted is equal to false
    sorted = true

    i = 0
    while i < array.length - 1
      if array[i] > array[i+1] # case where lower indexed value is greater than the higher indexed value (need to swap)
        # temp = array[i] # temporary value while we switch them around
        # array[i] = array[i+1] 
        # array[i+1] = temp
        array[i], array[i+1] = array[i+1], array[i] # equivalent to the above 3 lines
        sorted = false # represents that a swap was made, need to reiterate through values again
      end
      i += 1
    end
  end
  array
end

p bubble_sort([2, 2, 5, 6, 8])      # => [2, 2, 5, 6, 8]
p bubble_sort([10, 8, 7, 1, 2, 3])  # => [1, 2, 3, 7, 8, 10]


# grids => 2D array
# [[1,2,3],
#  [4,5,6],
#  [7,8,9]]

# r => row, c => column
# need to make sure each subarray is it's own unique array
def grid(r,c)
  Array.new(r) {Array.new(c, nil)}
end