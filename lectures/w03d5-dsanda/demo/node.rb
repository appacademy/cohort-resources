class Node
  attr_reader :value, :children

  def initialize(value, children = [])
    @value = value
    @children = children
  end

  # def add_child
  # end

  def inspect
    return "<#Node:#{self.object_id} value:#{value} children:#{children.map {|el| el.value}}>"
  end
  
end