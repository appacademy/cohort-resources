class Dog
  def initialize(name)
    @name = name
  end

  def get_name
    self.name
  end

  def same_name?(other_dog)
    name == other_dog.name
  end

  private
  attr_reader :name
end

if __FILE__ == $PROGRAM_NAME
  dog1 = Dog.new("Fido")
  dog2 = Dog.new("Difo")

  # This doesn't work, because private methods can't take an explicit
  # receiver, therefore their receiver is always 'self'
  puts dog1.same_name?(dog2)
end
