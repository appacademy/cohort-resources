require_relative "./cat.rb"
require_relative "./other_animals/dog.rb"

# pet_hotel.rb

class PetHotel
    def initialize(name)
      @name = name
      @guests = []
    end
  
    def check_in(guest)
      @guests << guest
    end
  end
  
  
  
  hotel = PetHotel.new("Animal Inn")

  cat = Cat.new("Sennacy")
  dog = Dog.new("Fido")
  
  hotel.check_in(cat)
  hotel.check_in(dog)
  
  p hotel
  # <PetHotel:0x007ffe7f01af60
  #   @name="Animal Inn",
  #   @guests=[
  #     #<Cat:0x007ffe7f01aee8 @name="Sennacy">,
  #     #<Dog:0x007ffe7f01ae98 @name="Fido">
  #   ]
  # >