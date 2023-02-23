class Stack
  def initialize
    @store = []
  end

  def push(value)
    store << value
    # need the self here so that the actual array isn't returned when we add a new element
    self
  end

  def pop
    store.pop
  end

  def peek
    store.last
  end

  def size
    store.length
  end

  def empty?
    store.empty?
  end

  def inspect
    # we need this here so that anytime self is returned, we can show only the 
    # object id and keeep the rest of the information about our stack hidden
    # this also might be useful if you have a node that has mad children that 
    # also has MAAAAAD children

    "#<Stack:#{self.object_id}>"
  end

# this is so that only inside of this class we have access to the @store,
# but not from pry or anywhere outside of this class
 private
 attr_reader :store
end
