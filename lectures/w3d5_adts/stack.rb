class Stack 
    # LIFO => push, pop, peek, size, empty? => properties of a stack

    def initialize 
        @store = []
    end

    # be able to add something to the top of my stack
    def push(value)
        store << value
        # I don't want to return the store - this is why I am returning self below
        return self
    end

    # take top element off
    def pop 
        store.pop
    end

    def peek 
        store.last
    end

    def size 
        store.length
    end

    def empty? 
        store.empty?
    end

    def inspect 
        "#<Stack:#{self.object_id}>"
    end

    # I am restricting access to the store so that nobody but the developer can mess with it
    # We make the store private to avoid external manipulation 
    private
    attr_reader :store

end

new_stack = Stack.new 
new_stack.push(3)
new_stack.push(4)
# I CAN SEE THE STACK /!\
# p new_stack.store 
# new_stack.store << "banana"
# new_stack.store << "orange"
# p new_stack.store

# We are calling the inspect method on p => returns object with properties (instances)
p new_stack

