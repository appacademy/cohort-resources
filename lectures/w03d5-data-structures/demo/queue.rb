class MyQueue

  def initialize
    @store = []
  end

  def enqueue(el)
    store.unshift(el)
    el
  end

  def dequeue
    store.pop
  end

  def show
    store.dup
  end

  def empty?
    store.empty?
  end

  def size
    store.length
  end

  private
  attr_reader :store
  
end