class Stack
  def initialize
    @store = []
  end

  def push(value)
    store << value 
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
    size == 0
  end

  def inspect
    "#<Stack:#{self.object_id}>"
  end

  # this is so that only inside of this class we have access to the @store,
  # but not from pry or anywhere outside of this class
  private
  attr_reader :store
end
