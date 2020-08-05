class Dog
  p "hi"
  
  def initialize(name, bark)
    @name = name
    @bark = bark
  end

  def name
    @name
  end

  def bark
    p "The value of self is #{self.inspect}"
    "BARK"
  end

  p self

  def self.compare_names(dog_1, dog_2)
    # ( dog_1.name.length > dog_2.name.length ) ? dog_1.name : dog_2.name
    if dog_1.name.length > dog_2.name.length
      dog_1.name
    else
      dog_2.name
    end
  end
end

fido = Dog.new("Fido", "woof")
balo = Dog.new("Baloon", "bark")
p fido.bark
p balo.bark
# p Dog.compare_names(x, y)