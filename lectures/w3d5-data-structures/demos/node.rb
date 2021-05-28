require_relative 'queue.rb'

class Node
  attr_reader :children, :value

  def initialize(value, children = [])
    @children = children
    @value = value
  end

  def bfs(val)
    queue = MyQueue.new
    queue.enqueue(self)

    until queue.empty?
      curr_node = queue.dequeue
      return curr_node if curr_node.value == val

      curr_node.children.each do |node|
        queue.enqueue(node)
      end
    end

    nil
  end

  def dfs(target)
    return self if value == target

    children.each do |node|
      curr_node = node.dfs(target)
      return curr_node unless curr_node == nil
    end
    nil
  end

end