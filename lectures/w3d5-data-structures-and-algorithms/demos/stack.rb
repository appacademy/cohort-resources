class Stack
  def initialize
    @store = []
  end

  def push(value)
    store << value
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

  def inspect
    "#<Stack:#{self.object_id}>"
  end

  private

  attr_reader :store
end