require_relative "animal"


class Dog < Animal

  def introduce
    puts "#{name} bork bork"
  end

  def fetch(item)
    puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
  end


  def sniff(other_dog)
    puts "*#{name} sniffs #{other_dog.name}'s butt. interesting.*"
  end

  def rename(new_name)
    self.name = new_name
  end

  # protected
  # attr_reader :name

  # private
  # attr_writer :name

end

p fido = Dog.new("Fido")
p spot = Dog.new("Spot")
fido.introduce
fido.fetch("bone")
fido.eat("dog food")
fido.sniff(spot)
p fido.rename("Dennis the Menace")

