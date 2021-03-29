# Blocks and Procs
require 'byebug'

class Array
  def my_each_block(&prc) # we have the ability to invoke a block without listing it as an explicit parameter
    debugger
    i = 0

    while i < self.length
      prc.call(self[i])
      # yield(self[i]) # this is exactly the same as prc.call(self[i])
      i += 1
    end

    # yield(blah) if block_given?

    self
  end

  def my_each_proc(prc)
    debugger
    i = 0

    while i < self.length
      prc.call(self[i], "banana", "apple")
      i += 1
    end

    self
  end

  # def my_each_with_index_block(&prc)
  #   i = 0

  #   while i < self.length
  #     prc.call(self[i], i)
  #     i += 1
  #   end

  #   self
  # end
end

res = []
# p = Proc.new {|el| res << 2*el}
# [1,2,3,4,5].my_each_proc(p)
# p res

# [2,3,4,5,6].my_each_block {|el| res << el*3}
# p res

p [1,2,3,4,5].select(&:even?)

# :+ is an object by default (Proc)