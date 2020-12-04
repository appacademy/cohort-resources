class Node 
    attr_reader :value, :children 

    def initialize(value, children = [])
        @value = value 
        @children = children 
    end
    # For project of today:
    # 1. Hold a reference to each node's parent, if any
    # 2. If you need to reassign a parent or add a child, consider both of the relationships
    # (e.g remember to break relationship with old parent if you were to give a new parent to that child)
end

d = Node.new("d")
e = Node.new("e")
f = Node.new("f")
g = Node.new("g")
b = Node.new("b", [d, e])
c = Node.new('c', [f, g])
a = Node.new("a", [b, c])
 p a
p a.children.first.children.first 