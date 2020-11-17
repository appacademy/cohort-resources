# Nested Array instantiations

arr = []
arr = Array.new

arr = Array.new(3) # => [nil, nil, nil]

arr = Array.new(3, []) # => [[],[],[]]

arr = Array.new(3, Array.new(3)) # => [[nil, nil, nil],[nil, nil, nil],[nil, nil, nil]]
arr = Array.new(3, 10) [10,10,10]

arr = Array.new(3) { Array.new(3, 0) } # => # => [[0, 0, 0],[0, 0, 0],[0, 0, 0]]

