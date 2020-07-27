
def bubble_sort(arr)
    sorted = false
    while sorted == false # !sorted 
        sorted = true
        (0...arr.length - 1).each do |i|    
            if arr[i] > arr[i+1] 
                arr[i], arr[i+1] = arr[i+1], arr[i]
                sorted = false
            end 
        end 
    end 

    arr
end

arr = [2,8,5,2,6]
p bubble_sort(arr) #=> [2,2,5,6,8]

# arr[5] #=> nil