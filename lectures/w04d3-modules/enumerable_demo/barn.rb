# require 'enumerable.rb'

class Barn
  include Enumerable # used for adding instance methods
  # extend Enumerable # used for adding class methods
  attr_reader :animals

  def initialize(*animals)
    @animals = animals
  end

  def add(new_animal)
    animals << new_animal
  end

  def each(&prc)
    animals.each(&prc)
  end
end

my_barn = Barn.new('horse', 'pig', 'horse', 'cow')
my_barn.add('donkey')
p my_barn.map {|animal| animal.upcase}
p my_barn.any? {|animal| animal == 'horse'}