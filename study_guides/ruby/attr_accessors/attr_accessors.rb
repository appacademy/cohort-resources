class Test
  def initialize
    @variable = 10
  end

  def my_writer_method
    # @variable = 9
    self.variable = 8
    variable = 7
  end

  def my_mistyped_method
    # @varable = 55
    self.variable = 55
  end
  
  def my_reader_method
    # @varable # works - but prone to harder to track error
    variable # works
    # self.variable
  end

  private
  attr_accessor :variable

end