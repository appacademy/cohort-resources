require 'byebug'

class Array
  def my_each_block
    # debugger
    i = 0

    while i < self.length
      yield self[i]
      i += 1
    end

    self
  end

  def my_each_proc(prc)
    my_each_block(&prc)
  end
end

arr = [1,2,3]
# arr.my_each_block { |el| p el }

prc = Proc.new { |el| p el }
arr.my_each_proc(prc)