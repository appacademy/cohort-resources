require_relative 'queue.rb'

class Node
    attr_reader :value, :children

    def initialize(value, children=[])
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

# def build_move_tree(pos)
#     root = Node.new(pos)

# end

def dfs(node, tar)
    p node.value
    return node if node.value == tar
    return nil if node.children.length == 0
    
    node.children.each do |child|
        res = dfs(child, tar)
        return res unless res.nil?
    end
    nil
end

# p dfs(a, 'e')

def bfs(node, tar)
    q = MyQueue.new
    q.enqueue(node)
    while (q.size > 0)
        curr_node = q.dequeue
        p curr_node.value
        return curr_node if curr_node.value == tar
        curr_node.children.each {|ele| q.enqueue(ele)}
    end
    nil
end

p bfs(a, 'c')