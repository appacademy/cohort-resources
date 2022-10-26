class MyQueue
  def initialize
    @inner_array = []
  end

  def enqueue(el)
    inner_array.push(el)
    self
  end

  def dequeue
    inner_array.shift
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