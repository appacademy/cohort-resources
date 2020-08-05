class Banana
  def upcase
    "haha fooled you"
  end
end

class Apple
  def upcase
    "again"
  end
end

p "hello".upcase # false

class MyString
  def initialize(str)
    @str = str
  end
end
