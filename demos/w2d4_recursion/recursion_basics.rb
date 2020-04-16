require "byebug"
def say_hello
  p "hello"
  say_hello
end

def countdown(n) 
  if n == 0
    debugger
    p n
  else
  p n
  debugger
  countdown(n-1)
  p n
  debugger
  s = "s"
  end
end

countdown(4)

# start with the most basic case and then work upwards from there
# I use this same approach with any problem I tackle
# Why stress with an example thats super complicated 
# get those mini victories 
