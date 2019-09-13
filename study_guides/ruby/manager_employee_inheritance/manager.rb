
require_relative "employee"

class Manager < Employee

    attr_reader :subordinates

    def initialize(name,salary,title,boss)
        super(name,salary,title,boss) 
        @subordinates = []
    end



    
end

ned = Manager.new("ned",1000000,"founder",nil)
darren = Manager.new("darren",78000,"TA Manager",ned)
shawna = Employee.new("shawna",12000,"TA",darren)
david = Employee.new("david",10000,"TA",darren)

# p darren.bonus(4)
# p ned.bonus(5)
# p david.bonus(3)

darren.call_say_yo
shawna.call_say_yo

