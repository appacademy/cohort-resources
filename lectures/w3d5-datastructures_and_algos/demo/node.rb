require_relative "queue.rb"

class Node

  attr_reader :value, :children

  def initialize(value, children = [])
    @value = value
    @children = children
  end

  def inspect
    "#<Node: @value=#{value}, @children=#{children}>"
  end

  def bfs(val)
    # create a queue with node inside
    queue = MyQueue.new
    queue.enqueue(self)

    until queue.empty? # want to check queue if theres nodes in it
      cur_node = queue.dequeue # take front of queue out of line
      return cur_node if cur_node.value == val # return node if its value is what we're looking for
      cur_node.children.each do |node| # adds children to the queue if we didnt match
        queue.enqueue(node)
      end
    end

    nil
  end

  def dfs(val)
    # base case checking if value == val
    # base case for empty children
    # iterate over children
    # call bfs and memoize
    # return if not nil
    # nil after loop
  end
  
end


d = Node.new('d')
e = Node.new('e')
f = Node.new('f')
g = Node.new('g')
b = Node.new('b', [d, e])
c = Node.new('c', [f, g])
a = Node.new('a', [b, c])

# a.bfs("m")

#    a
#   b c
# d e f g
