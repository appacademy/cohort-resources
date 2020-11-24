class Dog
   # attr_reader will define #name and #age getters for us
#   attr_reader :name, :age
#   attr_writer :name, :age
  attr_accessor :name, :age

  def initialize(name, age, favorite_food)
    @name = name
    @age = age
    @favorite_food = favorite_food
  end
  
#   # getters
#   def name
#     @name
#   end
  
#   def age
#     @age
#   end
  
#   # setters
#   def name=(new_name)
#     @name = new_name
#   end
  
#   def age=(new_age)
#     @age = new_age
#   end
  end

  dog = Dog.new("Fido", 3, "pizza")
  dog.name
  dog.age
  dog.favorite_food # NoMethodError: undefined method `favorite_food', because we didn't pass it to attr_reader