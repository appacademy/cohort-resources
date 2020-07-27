# cool bug! 
# making arrays with default values

# 1

arr = Array.new(3) #=> [nil, nil, nil]

# 2

arr2 = Array.new(10, "?") #=> ["?","?","?","?","?","?","?","?","?","?"]
arr2[2] = "!"
# p arr2
# 3

arr3 = Array.new(3, []) #=> [[],[],[]]
arr3[0] << 1
# p arr3
# 4

grid = Array.new(3, Array.new(3)) #=> 

[
    [nil, nil, nil], 
    [nil, nil, nil], 
    [nil, nil, nil]
]

# # change first value
grid[0][0] = "X"
p grid

# 5

grid2 = Array.new(3) { Array.new(3) }
grid2[0][0] = "X"
p grid2
