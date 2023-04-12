
# def some_method(array)
#     array[1] = "*"

# end

# array = ["h","e","l","l","o"]


# puts array.object_id
#  some_method(array)
#  puts array.object_id



# # # array_1 = array_1 + array_2



# # def some_method(array)

# #     count = 0
# #     array.each do |el|
# #         # var = 0
# #         count += 1
# #     end

# #     p count

# # end


# # array = [1,2,3,4,5]

# # some_method(array)






# # x = 2

# # 3.times do
# #   x *= 2
# # end

# # puts x

# # 3.times do
# #     x = 2
# #   end
  
# #   puts x


# # x = 10

# # def some_method(param)
# #   puts x
# # end

# # some_method("hi")



# # def some_method(num)
# #     puts num
# # end


# # x = 4
# # some_method(x)



# def inc(num)
#     num += 1
#     num = num + 1
# end
  
# a = 1
# inc(a)
  
# puts a



def add_square(arr, num)
    arr += (num ** 2)
  end
  
  squares = [1, 4, 9]
  add_square(squares, 4)
  
  p squares