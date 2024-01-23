name = 'Darren'
intro = "Hello my name is #{name} and I like skydiving"
age = 35
"hello my name is #{name} and I am #{age} decades old"
"hello my name is " + name + " and I am " + age.to_s + " decades old"
y = 5 - 3
x = 4 - 2
z = 6 - 4
y.object_id
x.object_id
z.object_id
a = 5
b = 7
a.object_id
b.object_id
a = a + b\
a = a + b
a.object_id
blah = a.to_s
a.object_id
blah
blah.object_id
str = 'hello'
str.object_id
new_str = str.upcase
str.object_id
new_str.object_id
new_str = str.upcase!
str.object_id
str
arr = [5,3,4,7,2]
arr.object_id
arr[2]
arr2 = [1,2,3]
arr2.object_id
arr << 11
arr
arr.object_id
arr.push(1)
arr
arr.object_id
arr.concat(arr2)
arr
arr.object_id
arr += [4,5,6]
arr
arr.object_id
x = 2
3.times do
  x = x * 2
end
puts x
3.times do
  x = 2
end
puts x
reset!
reset
3.times do
  x = 2
end
puts x
x = 10
def some_method
  puts x
end
some_method
def inc(num)
  num += 1
end
a = 1
inc(a)
puts a
def add_square(arr, num)
  arr << (num ** 2)
end
squares = [1, 4, 9]
add_square(squares, 4)
p squares
arr = Array.new(10, true)
arr[1] = false
arr
h = Hash.new(0)
h[:darren]
h[:diego]
h[:ayce]
h[:darren] += 1
h
arr = Array.new(3, [])
arr.map {|sub| sub.object_id}
arr[0] << 1
arr
arr[0] = [1]
arr
arr[0] = [3]
arr
arr.map {|sub| sub.object_id}
arr = Array.new(10, "")
arr.map {|sub| sub.object_id}
arr[4].concat('hello')
arr
arr = Array.new(10) { "" }
arr[4].concat('hello')
arr
h = Hash.new([])
h[:darren]
h[:diego]
h[:darren] << 99
h
h[:diego]
h[:ayce]
h[:darren].object_id
h[:diego].object_id
h[:ayce].object_id
h
h = Hash.new {|h,k| h[k] = []}
h = Hash.new do |h,k|
  p 'darren is cool'
  h[k] = []
end
h[:darren]
h
h[:abbey]
h
h.is_key?(:mike)
h.key?(:mike)
h
h[:darren]
h[:mike]