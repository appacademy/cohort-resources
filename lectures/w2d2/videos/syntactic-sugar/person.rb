class Person
    attr_reader :first_name, :last_name
  
    def initialize(first_name, last_name, age)
      @first_name = first_name
      @last_name = last_name
      @age = age
    end
  
    def ==(other_person)
      if other_person.is_a?(Person)
        self.last_name == other_person.last_name
      end
    end

    def person_age 
      "This person's age is #{@age}"
    end
  end

  [person_1 = Person.new("Jane", "Doe", 20),person_2 = Person.new("John", "Doe", 18)]
  
  
  
  person_3 = Person.new("John", "Wayne", 18)
  
  # Calling Person#== without any syntactic sugar is awkward:
  p person_1.==(person_2)     # true
  
  # # With syntactic sugar, it's much more elegant:
  # p person_1 == person_2      # true
  # p person_2 == person_3      # false

# p person_1 person_age