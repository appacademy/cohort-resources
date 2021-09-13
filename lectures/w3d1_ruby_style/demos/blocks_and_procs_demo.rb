require 'byebug'

class Array
  
  def my_each_block(&prc)
    i = 0
    while i < self.length
      # yield(self[i])
      prc.call(self[i])
      i += 1
    end

    self
  end

  def my_each_proc(prc)
    my_each_block(&prc)
  #   i = 0
  #   while i < self.length
  #     prc.call(self[i])
  #     i += 1
  #   end

  #   self
  end
end

# [1, 3, 5].each {|num| p num}
# [1, 3].my_each_block {|num| p num}
proc = Proc.new {|num| p num}
[1, 3].my_each_proc(proc)
