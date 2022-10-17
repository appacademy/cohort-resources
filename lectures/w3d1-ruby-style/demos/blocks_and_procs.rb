require 'byebug'

class Array

  def my_each_block
    # debugger
    i = 0
    while i < self.length
      yield(self[i])
      i += 1
    end
    self
  end

end

arr = [1,2,3]
arr.my_each_block {|ele| p ele}

class Array
  def my_each_prc(prc)
    # debugger
    # i = 0
    # while i < self.length
    #   prc.call(self[i])
    #   i += 1
    # end
    # self
    my_each_block(&prc)
  end

end

prc = Proc.new {|ele| p ele}
arr.my_each_prc(prc)