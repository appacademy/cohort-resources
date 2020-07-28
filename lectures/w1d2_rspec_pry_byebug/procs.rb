require "byebug"
# * creating a proc and saving it to a variable and passing it into function
my_proc = Proc.new { |num| num * 2}
# p my_proc.call(2)

def add_and_proc(num_1,num_2,prc)
  sum = num_1 + num_2
  prc.call(sum)
end

doubler = Proc.new {|n| 2 * n }
# p add_and_proc(2,3,doubler)

negate = Proc.new { |n| -1 * n }
# p add_and_proc(2,3,negate)

# * passing a block into the function and using it as a prc in the function
def add_and_proc(num_1, num_2, &prc)
  sum = num_1 + num_2
  prc.call(sum)
end

# p add_and_proc(2,3) { |n| 2 * n}

# * creating a function that is defined as taking a block as an argument
def add_and_proc(num_1, num_2, &prc)
  sum = num_1 + num_2
  prc.call(sum)
end

negate = Proc.new { |n| -1 * n }
# &negate will converet the proc into a block
# p add_and_proc(2,3,&negate)

# * creating my_map 
# p [1,2,3].map { |num| num * 2 }

def my_map(arr, &prc)
  new_arr = []

  arr.each { |ele| new_arr << prc.call(ele) }

  new_arr
end

# p my_map([1,2,3]) { |num| num * 2 }

# class Person 
#   def initialize(age,name)
#     debugger
#     @age = age 
#     @name = name
#   end

#   def say_hello()
#     print "hi"
#   end
# end

# carlos = Person.new(24,"carlos")