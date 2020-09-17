# **THIS DEMO IS DONE ENTIRELY IN CONSOLE**

## Part 1

a = 7
a.object_id
a.object_id == 7.object_id

# Integers are immutable (same every time)
7.object_id
7.object_id
7.object_id
7.object_id == 7.object_id

# Strings are mutable (different every time)
"hello".object_id
"hello".object_id
"hello".object_id
"hello".object_id == "hello".object_id # false

# Reassignment
b = 9
old_a_id = a.object_id
old_b_id = b.object_id
a += b
a.object_id
a.object_id == old_a_id # false
b.object_id == old_b_id # true - we didn't change b, only a



## Part 2

a = [1,2,3]
a.object_id 
a[0].object_id
a[0].object_id == 1.object_id # true - array indices are references themselves

b = a
b.object_id
a.object_id == b.object_id # true


# Reassigning the value at a specific index in an array mutates the array
a[1] = 4
a
b
a.object_id == b.object_id # still true - we didn't reassign a, we reassigned an index of the array it references (the same array b references)


# `push` mutates
old_a_id = a.object_id
a.push(2)
a
b # We will see that b was also changed by pushing onto a
old_a_id == a.object_id # true - we mutated `a`, we didn't reassign it
a.object_id == b.object_id # since we didn't reassign a, it's still referencing the sam array as b, that's why b had also changed when we looked at it


# `concat` mutates
old_b_id = b.object_id
b.concat([5,6,7])
b
a # see that it was also modified - `concat` mutates its receiver
old_b_id == b.object_id # true
a.object_id == b.object_id # true


# `+=` reassigns
old_a_id = a.object_id
a += [8, 9]
a
b # not modified - we reassigned a, therefore b was unaffected
a.object_id == b.object_id # false, we reassigned a
old_a_id ==  a.object_id # false, same reason