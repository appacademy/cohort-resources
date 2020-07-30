# ? pry
# pry is a place that you can experiment with things that you're not sure of
# you can load your file into pry and then sandbox your code
# I personally don't like doing that, I would prefer to just put a debugger and invoke my function
# i'll demo that later

# * show-doc String#end_with?
# this is a command that will allow you to see the docs for the method end_with?

# * show-source String#end_with?

# * ls variable or ls String, Integer etc..
# this will show all the methods that that datatype can use

def prime?(num)
  return false if num < 2
  
  (2...num).each do |i|
    return false if num % i == 0
  end
  
  true
end


def hello()
  print "hello"
end

hello()