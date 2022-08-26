require_relative "stack.rb"
require_relative "queue.rb"

class Node

  attr_reader :value, :children

  def initialize(value, children = [])
    @value = value
    @children = children
  end

  def inspect
    "#<Node: value=#{value} children=#{children.map {|el| el.value}}>"
  end

  def dfs(target) # method checks for target node and returns it or nil
    stack = Stack.new
    stack.push(self)
    until stack.empty?
      curr_node = stack.pop # 'b'
      return curr_node if curr_node.value == target
      curr_node.children.reverse.each do |node|
        stack.push(node)
      end
    end
    return nil
  end

  def bfs(target) # target e
    queue = MyQueue.new
    queue.enqueue(self) # a
    until queue.empty? # false
      curr_node = queue.dequeue # [c] -> b
      return curr_node if curr_node.value == target # true
      curr_node.children.each do |node| # [d,e]
        queue.enqueue(node) # [e,d,c]
      end
    end
    nil
  end
  
end