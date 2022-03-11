class Node
    attr_reader :value, :children
    def initialize(value, children = [])
        @value = value
        @children = children
    end
end

def dfs(node, target)
    # if value is equal to target, return node
    # otherwise, iterate through children 
    # and call dfs on each
end

def bfs(node, target)
    # if node.value == target, return node
    # concatenate child arrays of all children
    # iterate through and look for matches
end

d = Node.new('d')
e = Node.new('e')
f = Node.new('f')
g = Node.new('g')
b = Node.new('b', [d, e])
c = Node.new('c', [f, g])
a = Node.new('a', [b, c])