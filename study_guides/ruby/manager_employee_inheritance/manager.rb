require_relative "./employee.rb"

class Manager < Employee
  attr_reader :employees

  def initialize(name, salary, title, boss = nil)
    # super(name, salary, title, boss)
    super
    @employees = []
  end

  def add_employee(subordinate)
    employees << subordinate

    subordinate
  end

  def bonus(multiplier)
    self.total_subsalary * multiplier
  end

  protected
  
  def total_subsalary
    total_subsalary = 0
    self.employees.each do |employee|
      if employee.is_a?(Manager)
        total_subsalary += employee.salary + employee.total_subsalary
      else
        total_subsalary += employee.salary
      end
    end

    total_subsalary
  end
end