require "byebug"
# ? syntax error 

def check_num(num)
  if num > 0
    p "positive"
  elsif 
    p "negative"
  else
    p "zero"
  end
end

# check_num(42)

def check_num(num)
  if num > 0
    p "positive"
  else if 
    p "negative"
  els
    p "zero"
  end
end

check_num(42)

# ? NameError
name = "carlos"
# p my_name

# ? NoMethodError
# * most of the time this happens when you misspell a method name
# sayHello("carlos")

# my_var = nil
# my_var.upcase 

# my_var1 = "carlos"
# my_var1.upcas


# ? ArgumentError

# def say_hello(first_name, last_name)
#   p "hi " + first_name + " " + last_name
# end

# say_hello("alan")

# ? TypeError

# * youll most likely get this error when you start having variables
# 5 + "dog"

def add(num1,num2)
  # debugger
  num1 + num2
end

# p add(5,"yes")
# p add(5,6)


