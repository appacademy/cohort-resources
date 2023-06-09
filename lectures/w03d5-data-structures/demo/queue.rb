class MyQueue
  def initialize
    # instead of using an array, we can use two stacks
    @store = []
  end

  def enq(val)
    store.push(val)
  end

  def deq
    # not ideal b/c results in complete reindexing
    store.shift
  end

  def size
    store.length
  end

  def empty?
    store.empty?
  end

  def show
    store.dup
  end

  private
  attr_reader :store
end