require 'byebug'

class Array 
  def my_each_block(&prc)
    debugger
    # prc is a Proc at this point
    i = 0

    while i < self.length
      prc.call(self[i])
      i += 1
    end

    self
  end

  def my_each_proc(prc)
    debugger
    self.my_each_block(&prc)
  end

  def my_each_procs(*prcs)
    i = 0

    while i < self.length
      j = 0

      while j < prcs.length
        prcs[j].call(self[i])

        j += 1
      end

      i += 1
    end

    self
  end
end

arr = [1,2,3,4,5]
# arr.my_each_block { |el| puts el }
# arr.my_each_proc(prc)
# arr.my_each_block { |el| puts el } { |el| p el }
prc1 = Proc.new { |el| puts el }
prc2 = Proc.new { |el| puts el * 2 }
prc3 = Proc.new { |el| puts el * 4 }
arr.my_each_procs(prc1, prc2, prc3)