require_relative "./cat.rb"
require_relative "./other_animals/dog.rb"
require "byebug"

class PetHotel
  def initialize(name)
    @name = name
    @guests = []
  end

  def check_in(guest)
    @guests << guest
  end
end
# p Var


hotel = PetHotel.new("Animal Inn")

cat_1 = Cat.new("Sennacy")
cat_2 = Cat.new("Mocha")
dog = Dog.new("Charlemagne")

p hotel
# hotel.check_in(cat_1)
# hotel.check_in(cat_2)
# hotel.check_in(dog)
cat_2.check_room(hotel)

p hotel

