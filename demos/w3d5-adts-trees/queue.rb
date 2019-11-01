class MyQueue
  # in ruby there is a built in queue data type,
  # we want to create our own simple version

  def initialize
    @inner_array = []
  end

  def enqueue(el)
    # inner_array.push(el)
    self.inner_array = inner_array + [el]
    # inner_array.unshift(el)
    # we still need to return self here at the end of the method just like in the stack
    self
  end

  def dequeue
    inner_array.shift
    # inner_array.pop
  end

  def show
    # inner_array.dup
    p inner_array
    # why do we do this?
    # so that if we use this method and someone maliciously tries to alter our store,
    # it's really just a copy of it not the original
  end

  def empty?
    inner_array.empty?
  end

  private
  attr_reader :inner_array
  attr_writer :inner_array

end
