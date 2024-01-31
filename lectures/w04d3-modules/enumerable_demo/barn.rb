class Barn
  attr_reader :animals

  def initialize(*animals)
    @animals = animals
  end

  def add(new_animal)
    animals << new_animal
  end
end