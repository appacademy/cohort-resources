# **THIS DEMO IS DONE ENTIRELY IN CONSOLE**
require "byebug"
## Part 1

# a.object_id
# a.object_id == 7.object_id
# # Integers are immutable (same every time)
# 7.object_id
# 7.object_id
# 7.object_id
# 7.object_id == 7.object_id

# Reassignment
# a = 7
# b = 9
# debugger
# old_a_id = a.object_id
# old_b_id = b.object_id
# a += b
# a.object_id
# a.object_id == old_a_id 
# b.object_id == old_b_id 


# Strings are mutable (different every time)
"hello".object_id
"hello".object_id
"hello".object_id
"hello".object_id == "hello".object_id # false


## Part 2

a = [1,2,3]
a.object_id 
a[0].object_id
a[0].object_id == 1.object_id 

b = a
b.object_id
a.object_id == b.object_id 

a[1] = 4
a
b
a.object_id == b.object_id 

old_a_id = a.object_id
a.push(2)
a
b 
old_a_id == a.object_id 
a.object_id == b.object_id 

old_b_id = b.object_id
b.concat([5,6,7])
b
a 
old_b_id == b.object_id 
a.object_id == b.object_id 

old_a_id = a.object_id
a += [8, 9]
a
b 
a.object_id == b.object_id 
old_a_id ==  a.object_id 