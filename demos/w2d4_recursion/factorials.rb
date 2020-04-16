require "byebug"
def factorial(n)
  if n == 1 
    debugger
    return 1 
  end
  debugger
  factorial_return = factorial(n-1)
  debugger
  n * factorial_return
end

def factorial_iterative(n)
  final = 1 
  i = 1
  while i <= n
    final *= i
    i += 1
  end
  final
end

p factorial(3)
# p factorial(7)

# p factorial_iterative(5)
# p factorial_iterative(7)

#show picture 

class Cat
  def initialize(age)
    @age
  end

  def age
    @age
  end
end

stinky = Cat.new(5)
stinky.age