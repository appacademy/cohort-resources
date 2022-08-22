require 'byebug'

class Array

  def my_each_block(&prc)
    # debugger
    i = 0
    while i < self.length
      prc.call(self[i])
      yield self[i] # yield will call the block if one is passed in
      i += 1
    end

    self
  end

  def my_each_proc(prc)
    # debugger
    i = 0
    while i < self.length
      prc.call(self[i])
      yield self[i]
      i += 1
    end

    self
  end
  
end

arr = [1,2,3]

# prc1 = Proc.new {|el| p el}
arr.my_each_block {|el| p el * 2}
# arr.my_each_proc(prc1)
