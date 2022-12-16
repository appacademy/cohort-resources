require_relative 'queue'

class Node
  attr_reader :value, :children

  def initialize(value, children = [])
    @value = value
    @children = children
  end

  def inspect
    "<Node: #{object_id}, value: #{value} children: #{children.map {|child| child.value}}>"
  end

  # a.bfs('d')
  def bfs(target)
    queue = MyQueue.new
    queue.enqueue(self) # [a] 

    # need to loop to check through queue
    until queue.empty? # false
      current_node = queue.dequeue # a
      if current_node.value == target # 
        return current_node # 
      end
      current_node.children.each do |child| # 
        queue.enqueue(child) #
      end
    end
    nil
  end
  
end