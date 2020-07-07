require 'byebug'
require_relative 'attribute_accessor_lite.rb'

debugger

class Human
    debugger
    my_attr_accessor :fname, :lname

    def initialize(fname, lname, age=0)
        @fname = fname
        @lname = lname
        @age = age
    end

    def full_name
        debugger
        "#{fname} #{lname}"
    end
end

class Student < Human

    def initialize(fname, lname, age, grade)
        super(fname, lname, age)
        @grade = grade
    end

    def graduate
        @grade += 1
    end
end

sw = Human.new('Sam', 'Walker', 78)
sw.full_name

rm = Student.new('Ryan', 'Mapa', 13, 8)
rm.full_name
