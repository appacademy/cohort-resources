# Define a class with an initialize method that expects 
#   arguments and correctly create a new instance of that class.
# Given RSpec specs, define class and instance methods that pass the specs
# Given RSpec specs, define class and instance variables that pass the specs

class Dog 
  # dog initialize method sets @pos instance variable
  # to position argument, sets age instance variable
  # random number between 1 and 20
  def initialize(pos)
    @pos = pos 
    @age = (1...20).to_a.sample
  end

  # how do we know by looking at specs if it's a class or instance method?
  # class methods => ::find_older_dog, takes in 2 dog instances and returns older dog
  def self.find_older_dog(dog1, dog2)
      if dog1.age > dog2.age
      return dog2
    elsif dog2.age > dog1.age
      return dog1
    else
      "Same age"
    end
  end

  # in order to access the dog's age, like I've done, what's missing?
  # attr_reader for name
  # instance methods => #age, returns dog's age
  def age
    @age
  end
end