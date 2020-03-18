require 'byebug'

class Pet
  ## class variable
  def self.all_pets_1
    @@all_pets_1 ||= []
  end

  ## class instance variable
  def self.all_pets_2
    debugger
    @all_pets_2 ||= []
  end
end