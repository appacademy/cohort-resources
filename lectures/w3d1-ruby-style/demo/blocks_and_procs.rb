require 'byebug'

class Array
  def my_each_block(&prc) # turning a block into a prc
    debugger
    i = 0
    while i < self.length
      prc.call(self[i]) # calling a prc
      # yield self[i] # takes arguments you pass into it and gives them to the block
      
      i += 1
    end

    self
  end

  def my_each_proc(prc) # taking in a prc
    self.my_each_block(&prc) # turning a prc into a block
  end
end

arr = [1,2,3]
# arr.my_each_block { |ele| puts el }
prc = Proc.new { |ele| puts ele }
arr.my_each_proc(prc)