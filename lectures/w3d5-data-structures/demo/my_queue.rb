class MyQueue
  def initialize
    @elements = []
  end
  
  def enqueue(el)
    elements.unshift(el)
    self
  end

  def dequeue
    elements.pop
  end

  def show
    elements.dup
  end

  def size
    elements.length
  end

  def empty?
    elements.empty?
  end
  
  private
  attr_reader :elements
end