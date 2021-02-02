# #### BLOCK SCOPING ####

# ## Example 1
# x = 2

# 3.times do
#   x *= 2 # x = x * 2
# end

# puts x

# ## Example 2
# 3.times do
#   x = 2
# end
# bool = true
# while bool
#   x = 2
#   bool = false
# end

# puts x

# #### SCOPE GATES ####

# ## Example 1
# x = 10

# def some_method
#   puts x
# end

# some_method

## Example 2

# class NewClass
#   @@slug = "also yellow"
#   def initialize
    
#     @banana = "yellow"
#   end


# end

# #### PASSING ARGUMENTS TO METHODS ####

# ## Example 1
def inc(num) # num.object_id == a.object_id
  num += 1 # num.object_id != a.object_id
end

a = 1
inc(a)

puts a

# ## Example 2
def add_square(arr, num) # arr.object_id == squares.object_id
  arr << (num ** 2) # arr.object_id == squares.object_id
end

squares = [1, 4, 9]
add_square(squares, 4) # argument

p squares