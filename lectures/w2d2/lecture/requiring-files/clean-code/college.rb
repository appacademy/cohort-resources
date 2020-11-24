require_relative "./../../"

class College 
    def initialize(name)
        @name = name
        @students = []
    end

    def enroll_student(student)
        @students << student
    end
end

stanford = College.new("Stanford")
p stanford
popcorn = Student.new("popcorn")
p popcorn

stanford.enroll_student(popcorn)
p stanford

# $LOAD_PATH

