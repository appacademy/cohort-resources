class Node

  attr_reader :children, :value
  attr_writer :children

  def initialize(value, children = [])
    @value = value
    @children = children
  end

  def inspect
    "#<Node:#{self.object_id}, value=#{self.value}>"
  end

end

# d = Node.new('d')
# e = Node.new('e')
# f = Node.new('f')
# g = Node.new('g')
# b = Node.new('b', [d, e])
# c = Node.new('c', [f, g])
# a = Node.new('a', [b, c])
