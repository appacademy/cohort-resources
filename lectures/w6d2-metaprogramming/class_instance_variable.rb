class Human

    @@human_count = 0
    # @human_count == class instance variable, not accessible in child classes

    def self.human_count
        @@human_count
    end

    def self.increase_human_count
        @@human_count += 1
    end

    def initialize(fname, lname, age)
        @fname = fname
        @lname = lname
        @age = age
        self.class.increase_human_count
    end
end

class Student < Human

    def initialize(fname, lname, age, grade)
        super(fname, lname, age)
        @grade = grade
    end
end

p Human.human_count
sw = Human.new('Sam', 'Walker', 78)
p Human.human_count

rm = Student.new('Ryan', 'Mapa', 13, 8)
p Human.human_count