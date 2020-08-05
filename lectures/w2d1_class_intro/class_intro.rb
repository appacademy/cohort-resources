class Dog
  def initialize(var)
    @var = var
  end

  # getter method
  def var
    @var
  end

  # setter method
  def var=(banana) # param is a parameter
    @var = banana
  end

end

fido = Dog.new(5)
fido.var=(10) # 10 is an argument