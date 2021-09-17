class Stack
  
  private
  attr_reader :store

  
  def initialize
    @store = []
  end
  
  def inspect
    "#<Stack:#{self.object_id}>"
  end
  
  def push(el)
    store.push(el)
    return "added #{el} :)"
  end
  
  def pop
    store.pop
  end
  
  def peek
    store.last
  end
  
  def size
    store.size
  end
  
  def empty?
    store.empty?
  end

  
end