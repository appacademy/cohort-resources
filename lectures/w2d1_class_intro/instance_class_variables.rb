class Car
  @@num_wheels = 4
  @@num_cars = 0
  COLORS = ['blue', 'red', 'green','yellow'].freeze

  def self.upgrade_to_flying_cars
    @@num_wheels = 0
  end

  def initialize(color)
    # raise StandardError if !COLORS.include?(color)
    @color = color
    @@num_cars += 1
  end

  def test
    @instance_variable = 4
  end

  def rainbow
    COLORS << 'magenta'
  end

  def num_wheels
    @@num_wheels
  end
end

car_1 = Car.new("red")
car_2 = Car.new("black")

p car_1.num_wheels    # 4
p car_2.num_wheels    # 4

Car.upgrade_to_flying_cars

p car_1.num_wheels    # 0
p car_2.num_wheels    # 0

car_3 = Car.new("silver")
p car_3.num_wheels    # 0

p car_1
car_1.test
p car_1

car_1.rainbow