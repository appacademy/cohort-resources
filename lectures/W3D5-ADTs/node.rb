class Node
    attr_reader :value, :children

    def initialize(value,children=[])
        @value = value
        @children = children
    end
end

h = Node.new('h')
d = Node.new('d')
e = Node.new('e')
f = Node.new('f')
g = Node.new('g')
b = Node.new('b', [d, e, h])
c = Node.new('c', [f, g])
a = Node.new('a', [b, c]) # root node

# p a

# p d
# p e
# p f
# p g

p b

#     A # root node
#    / \ 
#    B  C 
#   / \ / \ 
#   D E F G 