class MyQueue

  def initialize
    @store = []
  end

  def enqueue(ele)
    store.push(ele)
  end

  def dequeue
    store.shift
  end

  def show
    print store
  end

  def empty?
    store.empty?
  end
  
  private
  attr_reader :store
end