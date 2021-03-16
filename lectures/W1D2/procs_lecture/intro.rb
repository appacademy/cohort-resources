

# # p array.map { |num| num * 2 } 
# array.map do |num|
#     num * 2
# end



# my_proc = Proc.new { |num| num * 2 } 
# # p my_proc 
# p my_proc.call(3) 



# array = [1, 2, 3]
# array.each do |num|
#     num * 2
# end

# my_block = { |num| num * 2 }   === NO ! 
# my_proc = Proc.new do |num| 
#                 num * 2 
#         end
# p my_proc.call(3)#=> 6
# array.each { |num| num * 2}
