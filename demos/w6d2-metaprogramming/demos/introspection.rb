require "byebug"
class Human 
  attr_reader :firstname, :lastname
  # debugger
  def initialize(firstname, lastname, age = 0)
    # debugger
    @firstname = firstname
    @lastname = lastname
    @age = age
  end

  def fullname
    # debugger
    "#{@firstname} #{lastname}"
  end

  def age_1_yr
    @age += 1
  end
end

class Student < Human
  attr_reader :age
  # debugger
  def initialize(firstname, lastname, age, grade)
    super(firstname, lastname, age)
    debugger
    @grade = grade
  end

  def move_to_next_grade
    @grade += @grade
  end
end
# ? part 1 what is self for Human? 
# cg = Human.new('Carlos', 'Garcia', 24) # comment these out and run the file and see what happens
# cg fullname

# ? part 2 what is self for Student? 
# angleA = Student.new("Angela", "Topchev", 25, 10)
# scribe = Human.new('Scribe', "Scribus", 12)

# scribe.fullname

# ? part 3 inheritance chain
# angleA = Student.new("Angela", "Topchev", 25, 10)
# angleA.class
# angleA.class.superclass
# angleA.class.superclass.superclass
# angleA.class.superclass.superclass.superclass
# angleA.class.superclass.superclass.superclass.superclass

# ? usefule methods instance can call

# angleA.class.ancestors # => will retrieve the ancestors (with some modueles sprinkled in there)
# debugger
# angleA.methods # => will retrieve all the public and protected methods that an object has access to. even inherited ones
# angelA.class.instance_methods # => will return all instance methods even inherited ones for the class
# angelA.class.instance_methods(false) # => will return on the instance methods defined in the class

# angleA.is_a?(Student) # => return true
# angleA.is_a?(Human) # => return true
# angleA.is_a?(Object) # => return true

# angleA.instance_of?(Student) # => return true
# angleA.instance_of?(Human) # => return false
