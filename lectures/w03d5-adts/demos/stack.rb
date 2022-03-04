class Stack
  
  
  def initialize
    @store = []
  end
  
  def push(el)
    #add element to top of stack
    store << el
    self
  end

  # def reassign
  #   @stare = [1,2,3]
  # end
  
  def pop
    #remove and return element from top of stack
    store.pop
  end
  
  def peek
    #return top element of the stack, without removing it
    store[-1]
  end
  
  def size
    #return the current size of the stack
    store.length
  end
  
  def empty?
    #return true or false depending on whether or not stack is empty
    size == 0
  end
  
  def inspect
    "#<Stack:#{self.object_id}>"
  end

  private
  attr_reader :store
  
end