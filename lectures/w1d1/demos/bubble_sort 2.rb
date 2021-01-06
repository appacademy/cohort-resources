def bubble_sort(array)
  sorted = false  # when this var is false, that means the array is not fully sorted yet

  while !sorted       # while the array is not sorted...
    sorted = true       # reset the sorted flag to true 

    # the each below will perform a single 'pass' of bubble sort
    (0...array.length - 1).each do |i|
      if array[i] > array[i + 1]                              # if adjacent elements are out of order...
        array[i], array[i + 1] = array[i + 1], array[i]     #   then swap their positions
        sorted = false                                      # since we just made a swap, we may need to perform
      end                                                     # an additional 'pass', so set the flag to false
    end
    
  end

  array
end