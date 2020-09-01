require "byebug"
class Human 
  # debugger
  @human_var = "from human" #instance variable that is connected to the Human class and not on any instances
  @@human_var = "from human" #class variables which are inherited by descedents 
  @human_count = 0

  def self.human_var
    # debugger
    @human_var
    @@human_var
  end

  def self.human_count
    @human_count
  end

  def self.human_count_increase
    @human_count += 1
  end

  def initialize(firstname, lastname, age = 0)
    @firstname = firstname
    @lastname = lastname
    @age = age

    self.class.human_count_increase
  end

  def human_var
    # debugger
    @human_var
  end
  # def human_var
  #   @human_var
  # end

  def say_hello
    p "hello"
  end

  def say_hello_n_times(n)
    n.times do 
      p "hello"
    end
  end

  private 

  def say_hello_secretly
    p "hello there this is a secret"
  end
end

class Student < Human
  attr_reader :age
  # debugger
  def initialize(firstname, lastname, age, grade)
    super(firstname, lastname, age)
    @grade = grade
  end

  def move_to_next_grade
    @grade += @grade
  end

end
# ? class instance variables and class variables
carlos = Human.new("Carlos", "Garcia", 24)
# p carlos.human_var #does not have access to the variable defined on line 4 because it is a instance variable defined for the class

# p Human.human_var
# p Student.human_var

# p Human.human_count # => 0
# carlos = Human.new("Carlos", "Garcia", 24) # => call human count increase
# p Human.human_count # => 1

# ? instance_variables and instance_variable_get() and instance_variable_set()
carlos = Human.new("Carlos", "Garcia", 24)
# angleA = Human.new("Angela", "TopChev", 25)
debugger
p carlos.instance_variables
# p carlos.instance_variable_get(:@firstname) #instance variable argument can either be a symbol or a string 
# p carlos.instance_variable_get("@firstname") #instance variable argument can either be a symbol or a string 

# p carlos.instance_variable_get(:@firstname) #instance variable argument can either be a symbol or a string 
# carlos.instance_variable_set(:@firstname, "Charlie")
# p carlos.instance_variable_get(:@firstname)

# ? send demo
# carlos = Human.new("Carlos", "Garcia", 24)
# carlos.send(:say_hello)
# carlos.send(:say_hello_n_times,3)
# carlos.send(:say_hello_secretly) # allows you to evaluat even private methods


