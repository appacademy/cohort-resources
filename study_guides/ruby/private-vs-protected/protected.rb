class Dog2
  def initialize(name)
    @name = name
  end

  def get_name
    name
  end

  def ==(other_dog)
    self.name == other_dog.name
  end

  def same_name?(other_dog)
    name == other_dog.name
  end

  protected
  attr_reader :name
end

if __FILE__ == $PROGRAM_NAME
  dog1 = Dog2.new("Fido")
  dog2 = Dog2.new("Difo")
  dog3 = Dog2.new("Fido")

  # This works
  puts dog1.same_name?(dog2)
  puts dog1.same_name?(dog3)

  # This does not work - we still can't call protected method outside
  # of the class definition
  puts dog1.name
end
