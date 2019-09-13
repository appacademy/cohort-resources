require "byebug"

class Employee
    attr_reader :name, :salary, :title, :boss
    def initialize(name,salary,title,boss)
        @name = name 
        @salary = salary
        @title = title
        @boss = boss

        if @boss
            @boss.subordinates.push(self)
        end

    end

    def bonus(multiplier)
        if(self.instance_of?(Employee))
            bonus = self.salary*multiplier
            return bonus
        else
            bonus = []

            self.subordinates.each do |employee|
                if employee.instance_of?(Manager)
                    bonus << employee.salary
                    bonus << employee.bonus(1)
                else
                    bonus << employee.bonus(1)
                end
            end

            return bonus.sum * multiplier
        end
    end

    def inspect 
        "#{name} #{salary}"
    end

    def call_say_yo
        say_yo
    end

    private
    def say_yo
        puts "yo"
    end
end

