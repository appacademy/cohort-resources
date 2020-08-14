class MyQueue
  def initialize
    @store = []
  end

  def enqueue(el)
    store << el 
    self
    # unshift
  end

  def dequeue
    store.shift
    # pop
  end

  def size
    store.length
  end

  def show
    store.dup
    # makes shallow copy of store
  end

  def empty?
    store.length == 0
    # store.empty?
  end

  private 
  attr_reader :store
end
