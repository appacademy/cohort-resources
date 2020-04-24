require_relative "queue.rb"

class Node 
    attr_reader :value 
    attr_accessor :children 

    def initialize(value, children = []) 
        @value = value 
        @children = children 
    end

    def bfs(value)
        queue = MyQueue.new 
        queue.enqueue(self)
        until queue.empty? 
            current_node = queue.dequeue 
            return current_node if current_node.value == value 
            current_node.children.each {|child| queue.enqueue(child)}
        end
        nil
    end
end


A = Node.new("a")
B = Node.new("b")
C = Node.new("c")
D = Node.new("d")
E = Node.new("e")
F = Node.new("f")
G = Node.new("g")
A.children = [B, C]
B.children = [D, E]
C.children = [F, G]

# d, e, f, g leaf nodes 
# a, b, c, internal nodes
# binary tree => 2 or 0 children 