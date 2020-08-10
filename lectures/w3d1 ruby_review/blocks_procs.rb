require 'byebug'

class Array
  def my_each_block
    #(&blk) #& has already converted the block to a proc
    debugger
    i = 0

    while i < self.length
      # blk.call(self[i])
      if block_given?
        yield(self[i]) #only works when block_given? == true 
      end
      i += 1
    end

    self
  end

  def my_each_proc(proc) #proc is a Proc object 
    # i = 0
    # debugger

    # while i < self.length
    #   proc.call(self[i])

    #   i += 1 
    # end

    # self
    my_each_block(&proc) #proc is now converted into a block with the &
  end
  
end

arr = [1,2,3]
arr.my_each_block { |el| p el }
arr.my_each_block { |el| p el * 2 }
arr.my_each_block { |el| p el + 2 }

# prc = Proc.new { |el| p el }
# arr.my_each_proc(prc)
