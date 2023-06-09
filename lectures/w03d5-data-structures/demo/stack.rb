class Stack # ADT
  def initialize
    @store = [] # data structure
  end

  def push(value)
    store.push(value)
  end

  def pop
    store.pop
  end

  def peek
    store.last
  end

  def show
    store.to_s
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

stack = Stack.new
stack.push(5)
stack.push(3)
p stack
p stack.pop
# p stack.store
p stack.show