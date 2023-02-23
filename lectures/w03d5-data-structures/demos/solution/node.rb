require_relative 'queue'

class Node
  attr_reader :value, :children
  
  def initialize(value, children = [])
    @value = value
    @children = children
  end
end

d = Node.new('d')
e = Node.new('e')
f = Node.new('f')
g = Node.new('g')
b = Node.new('b', [d, e])
c = Node.new('c', [f, g])
a = Node.new('a', [b, c])



# def dfs(target = nil, &prc)
#   prc ||= Proc.new {|node| node.value == target}
#   return self if prc.call(self)

#  children.each do |child|
#       result = child.dfs(&prc)
#       return result unless result.nil?
#  end

#  nil

# end


# # 
# def bfs(taget = nil, &prc)
#   prc ||= Proc.new {|node| node.value  == target}
#   nodes_queue = [self]
#   until nodes_queue.empty? 
#       node = nodes_queue.shift
#       return node if prc.call(node)
#       nodes_queue.concat(node.children)
#   end 
#   nil
# end 
