# require_relative "./pet_hotel.rb"

puts "running cat file"


var = "I am from the cat file"

class Cat
  def initialize(name)
    @name = name
  end

  def check_room(pet_hotel)
    pet_hotel.check_in(self)
  end

end