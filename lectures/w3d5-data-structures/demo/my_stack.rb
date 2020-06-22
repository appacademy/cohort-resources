class Stack
  
  def initialize
    @store = []
  end

  def inspect
    "#<Stack:#{self.object_id}, #{@store.last}>"
  end

  def push(el)
    store.push(el)
    self
  end

  def pop
    store.pop
  end
  
  def peek
    store.last
  end

  def size
    store.length
  end
  
  def empty?
    store.empty?
  end

  private
  attr_reader :store
end