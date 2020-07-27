# 1

# object_id method

# 2 

word_1 = "cat"
word_2 = word_1
word_2[0] = "r"
# word_2[0..-1]="awewa"

p word_1.object_id
p word_1
p word_2.object_id
p word_2

# 3

# str = "hello"
# str.upcase

# same object_id

# 4

# str = "hello"
# a = str.object_id
# str = "bye"
# b = str.object_id
# a == b #=> false

# 5

# arr_1 = [1,2]
# arr_2 = arr_1

# arr_1 << 3
# # modifies both!

