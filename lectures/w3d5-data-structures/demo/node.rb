require_relative "my_queue"

class Node
  attr_reader :value, :children

  def initialize(value, children=[])
    @value = value
    @children = children
  end

  def bfs(target) # trget = x
    queue = MyQueue.new
    queue.enqueue(self) # [A]

    until queue.empty? # [E, D, C]
      curr_node = queue.dequeue # [C] -> B
      return curr_node if curr_node.value == target # B != E
      curr_node.children.each do |child|
        queue.enqueue(child)
      end
    end
    nil
  end

end

d = Node.new('d')
e = Node.new('e')
f = Node.new('f')
g = Node.new('g')
b = Node.new('b', [d, e])
c = Node.new('c', [f, g])
a = Node.new('a', [b, c])