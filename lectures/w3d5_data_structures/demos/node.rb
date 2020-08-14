require_relative "queue"

class Node
  attr_reader :value 
  attr_accessor :children 

  def initialize(value, children =[])
    @children = children 
    @value = value 
  end

  def inspect 
    "#<Node:#{self.object_id}x@value=#{value}>"
  end

  def bfs(val)
    queue = MyQueue.new 
    queue.enqueue(self)
    until queue.empty? 
      current_node = queue.dequeue 
      return current_node if current_node.value == val 
      current_node.children.each do |child|
        queue.enqueue(child)
      end
    end
    nil
  end
end

A = Node.new("A")
B = Node.new("B")
C = Node.new("C")
D = Node.new("D")
E = Node.new("E")
F = Node.new("F")
G = Node.new("G")

A.children = [B, C]
B.children = [D, E]
C.children = [F, G]

