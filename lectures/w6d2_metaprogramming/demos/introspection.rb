require "byebug"
class Human 
  attr_reader :firstname, :lastname
  # debugger
  def initialize(firstname, lastname, age = 0)
    # debugger
    @firstname = firstname
    @lastname = lastname
    @age = age
    debugger
    let s ="s"
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
    debugger
    super(firstname, lastname, age)
    @grade = grade
  end

  def move_to_next_grade
    @grade += @grade
  end
end
# ? part 1 what is self for Human? 
# cg = Human.new('Carlos', 'Garcia', 24) # comment these out and run the file and see what happens
# p cg.fullname

# ? part 2 what is self for Student? 
# angleA = Student.new("Angela", "Topchev", 25, 10)
# scribe = Human.new('Scribe', "Scribus", 12)

# p scribe.fullname

# ? part 3 inheritance chain
angleA = Student.new("Angela", "Topchev", 25, 10)
# p angleA.class
# p angleA.class.superclass
# p angleA.class.superclass.superclass
# p angleA.class.superclass.superclass.superclass
# p angleA.class.superclass.superclass.superclass.superclass

# ? useful methods instance can call

# p angleA.class.ancestors # => will retrieve the ancestors (with some modueles sprinkled in there)
# debugger
# p angleA.methods # => will retrieve all the public and protected methods that an object has access to. even inherited ones
# p angelA.class.instance_methods # => will return all instance methods even inherited ones for the class
p angelA.class.instance_methods(false) # => will return on the instance methods defined in the class

# p angleA.is_a?(Student) # => return true
# p angleA.is_a?(Human) # => return true
# p angleA.is_a?(Object) # => return true

# p angleA.instance_of?(Student) # => return true
# p angleA.instance_of?(Human) # => return false
