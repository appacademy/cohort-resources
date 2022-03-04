class MyQueue

  
  def initialize
    @line = []
  end
  
  def enqueue(el)
    #add element to back of queue
    line.unshift(el)
    self
  end
  
  def dequeue
    #remove and return element from front of queue
    line.pop
  end
  
  def size
    #return the current size of the queue
    line.size
  end
  
  def show
    #return a copy of the line
    line.dup
  end
  
  def empty?
    #return true or false depending on whether or not queue is empty
    line.empty?
  end

  private
  attr_reader :line
  
end