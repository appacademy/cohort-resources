require "byebug"

class Array

  def my_each_block(&prc)
    # debugger

    i = 0
    while i < self.length
      # debugger
      prc.call(self[i])
      # yield self[i]
      i += 1
    end

    self
  end

  def my_each_proc(prc)
    debugger

    i = 0
    while i < self.length
      prc.call(self[i])
      i += 1
    end

    self
  end
  
end

arr = [1,2,3]
arr.my_each_block { |el| p el}
# proc = Proc.new { |el| p el}
# arr.my_each_proc(proc)