class Node
  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def ==(other_node)
    self.value == other_node.value
  end

  protected
  attr_reader :value, :parent, :children
end

node_one = Node.new('a')
node_two = Node.new('b')
node_three = Node.new('a')
p node_one == node_three
# p node_one.value