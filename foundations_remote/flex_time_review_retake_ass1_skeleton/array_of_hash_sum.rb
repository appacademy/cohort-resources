# Write a method array_of_hash_sum that accepts an array containing hashes as an 
# argument. The method should return the total sum of all values in the hashes.



# Examples


arr_1 = [
    { matt: 17, polina: 19, erin: 18 },
    { jj: 9, anna: 17}
]
p array_of_hash_sum(arr_1) # => 80

arr_2 = [
    { a: -3, b: 4 },
    { a: 10, b: 12 },
    {}
]
p array_of_hash_sum(arr_2) # => 23

p array_of_hash_sum([])   # => 0