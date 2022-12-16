class MyStack

  def initialize
    @store = []
  end

  def inspect
    "#<MyStack:#{self.object_id} last element: #{peek}>"
  end

  def push(value)
    store.push(value)
    value
  end

  def pop
    store.pop
  end

  def peek
    store[-1]
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