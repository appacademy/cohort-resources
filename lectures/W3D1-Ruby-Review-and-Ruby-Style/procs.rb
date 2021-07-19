require 'byebug'

class Array

  def my_each_block(&prc)
    # prc ||= Proc.new { |el| p el } # whatever we want for our default proc
    # debugger
    i = 0

    while i < self.length
      prc.call(self[i])
      i += 1
    end

    self
  end


  def my_each_proc(prc)
    self.my_each_block(&prc)
  end

end

arr = [1,2,3,4,5]

# arr.my_each_block do |el|
#   p el
# end
# arr.my_each_block { |el| p el }

my_proc = Proc.new { |el| p el }
arr.my_each_proc(my_proc)
