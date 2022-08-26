class Stack

  def initialize
    @store = [] 
  end

  def inspect
    "#<Stack: #{self.object_id}, #{self.peek}>"
  end

  def push(el)
    # @store << el # could do it this way, many different ways to implement
    store.push(el)
    puts "mahalo!"
    el
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
    store.empty?
  end

  private 

  attr_reader :store
  
end