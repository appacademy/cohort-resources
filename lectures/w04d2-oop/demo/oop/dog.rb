require_relative "animal"


class Dog < Animal

  def introduce
    puts "#{name} bork bork"
  end

  def fetch(item)
    puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
  end

end

class Puppy < Dog
  #puppy stuff
  
end

rocky = Dog.new("rocky")
rocky.eat("carrot")