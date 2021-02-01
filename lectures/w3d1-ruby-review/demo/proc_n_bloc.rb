require 'byebug'

class Array

  def my_each_block(&prc)
    i = 0
    
    # debugger
    while i < self.length
      prc.call(self[i])
      # yield(self[i])
      i += 1
    end

    self
  end

  def my_each_proc(prc)
    self.my_each_block(&prc)
  end
end

arr = [1,2,3,4,5]
arr.my_each_block { |ele| p ele }
prc1 = Proc.new { |ele| p ele }
# arr.my_each_proc(prc1)
# p arr