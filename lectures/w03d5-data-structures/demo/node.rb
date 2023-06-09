class Node
  attr_reader :value, :children

  def initialize(value, children=[])
    @value = value
    @children = children
    @parent = nil
  end

  def parent=(new_parent)
    # if self currently has a parent
      # remove self from parent children
    
    # reassign parent to new_parent

    # add self to new_parent.children (only if !new_parent.nil?)
  end
end








d = Node.new('d')
e = Node.new('e')
f = Node.new('f')
g = Node.new('g')
b = Node.new('b')
c = Node.new('c')
a = Node.new('a')

a.children << b << c
b.children << d << e
c.children << f << g