# <=> spaceship operator 

# a <=> b

# when a is less than b, return -1
p 3 <=> 5

# when a is greater than b, return 1
p 5 <=> 3

# when a is equal to b, return 0
p 3 <=> 3

def compare(a,b)
  if (a <=> b) == -1
    p "a is less than b"
  elsif (a <=> b) == 1
    p "a is greater than b"
  else
    p "a is eq to b"
  end
end

def bubble_sort(array)
  sorted = false

  while !sorted
    sorted = true

    (0...array.length - 1).each do |i|
      if array[i] > array[i + 1] 
        array[i], array[i + 1] = array[i + 1], array[i]
        sorted = false
      end
    end
  end
  array
end

# def bubble_sort(array, &prc)
#   sorted = false

#   while !sorted
#     sorted = true

#     (0...array.length - 1).each do |i|
#       if prc.call(array[i],array[i+1]) == 1
#         array[i], array[i + 1] = array[i + 1], array[i]
#         sorted = false
#       end
#     end
#   end
#   array
# end

p bubble_sort([6,10,8,-5,9,0,8,3,2]) {|a,b| a <=> b}
p (bubble_sort(["y","z","b","x","m"]) do |a,b|
  alpha = ("a".."z").to_a #create an array of letters
  alpha.index(a) <=> alpha.index(b)
end)