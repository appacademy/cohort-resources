class Test

  def initialize
    @variable = 10
  end

  def my_method
    # With or without a private attr_accessor, 
    # all of these are valid operations:

    @variable = 9
    self.variable = 8

    # however, this one will not implicitly call self.variable
    # and instead define a new local variable

    variable = 7

    # this method will return 7, but @variable will still be 8
  end

  def my_mistyped_method
    # In addition to being more explicit, 
    # using self.variable instead of @variable
    # will help us recognize spelling errors easier
    
    # Will throw an error -> undefined method varable
    self.varable = 55

    # Will NOT throw an error, and instead just define a new instance variable
    # This mistake will be much more difficult to find
    @varable = 55
  end

  def my_reader_method
    # When trying to read/return an instance variable however,
    # we NEED to use the implicit version or reference the
    # instance variable directly, because the way ruby enforeces private attr_readers
    # is by checking if the method has an explicit receiver

    # This is fine:
    @variable

    # This is also fine:
    variable

    # But this will throw an error:
    self.variable
    # Even though the #variable method is being called privately,
    # it's being invoked on an explicit receiver (self), causing ruby to throw an error
  end

  private
  attr_accessor :variable
end