class MyQueue

  def initialize
    @store = []
  end

  def enqueue(el)
    store.unshift(el) # puts in the beginning of the store (index 0)
    el
  end

  def dequeue
    store.pop
  end

  def show
    store.dup
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