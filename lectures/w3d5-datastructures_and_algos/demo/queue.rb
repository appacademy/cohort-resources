class MyQueue

  def initialize
    @store = []
  end

  def enqueue(el)
    store.push(el) # [2,3,4] <- 5
    return self
  end

  def dequeue
    store.shift # 2 <- [3,4,5]
  end

  def show
    print store
  end

  def size
    store.size
  end

  def empty?
    store.empty?
  end

  private
  attr_reader :store
  
end