class MyQueue

  def initialize
    @inner_array = []
  end

  def enqueue(el)
    inner_array.unshift(el)
    
    self
  end

  def dequeue
    inner_array.pop
  end

  def show
    inner_array.dup
  end

  def empty?
    inner_array.empty?
  end

  private
  attr_reader :inner_array
end