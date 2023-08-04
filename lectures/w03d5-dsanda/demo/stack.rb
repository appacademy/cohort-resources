class Stack


  # public # all methods below are public

  def initialize
    @store = []
  end

  def push(val)
    # @stare # return nil, no helpful error
    store << val # returns @store
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

  def inspect # I want to overwrite this built in method to return something else
    return "#<Stack:#{self.object_id} last:#{self.peek} size:#{self.size}>"
  end

  private # all methods below are private
  attr_reader :store

  
end

class Example
end