require "byebug"

# Object.class_eval do
#   debugger
#   def attribute_accessor_lite(*attribute_names)
#     debugger
#   end
# end

Object.class_eval do
  def attribute_accessor_lite(*attribute_names)
    # debugger
    attribute_names.each do |attribute_name|
      heredoc = <<-Magic_String
        def #{attribute_name}
           debugger
          puts 'generate getter'
          @#{attribute_name}
        end

        def #{attribute_name}=( new_value)
          puts 'generate setter'
          @#{attribute_name} = new_value
        end

      Magic_String
      self.class_eval heredoc
    end
  end
end

class Human 
  # debugger
  attribute_accessor_lite(:firstname, :lastname)
  # attr_accessor :firstname, :lastname, :age 

  def initialize(firstname, lastname, age = 0)
    @firstname = firstname
    @lastname = lastname
    @age = age
  end

  def fullname
    "#{@firstname} #{lastname}"
  end

  def age_1_yr
    @age += 1
  end
end

class Student < Human
  attr_reader :age
  def initialize(firstname, lastname, age, grade)
    super(firstname, lastname, age)
    @grade = grade
  end

  def move_to_next_grade
    @grade += @grade
  end
end

# ? Demo Eval and Class Eval demo
# do examples in pry from the demo 
# Dog.new 
# eval('class Dog; end')
# Dog.new

# Dog.new.bark     # This will return an undefined method `bark` error because we don't have `bark` defined yet   
# Dog.class_eval('def bark; puts "Bark Bark!" end')     # Returns nil because defining a new class returns nil   
# Dog.new.bark     # Puts the string "Bark Bark!"


scribe = Human.new('Scribe', "Scribus", 12)
p scribe.firstname

