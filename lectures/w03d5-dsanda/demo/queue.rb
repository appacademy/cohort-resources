class MyQueue

  def initialize
    @store = []
  end
  
  def enqueue(el)
    store.push(el)
    self
  end

  def dequeue
    store.shift
  end

  def show
    store.dup # avoid exposing store to mutation
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