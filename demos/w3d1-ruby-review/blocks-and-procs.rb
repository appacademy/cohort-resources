require 'byebug'

# Define a `Array#my_each_block` method that will call the given block for each
# element of the array

class Array
  def my_each_block(&prc)
    i = 0
    # debugger
    while i < self.length
      curr_el = self[i]
      prc.call(curr_el)
      # yield(curr_el)

      i += 1
    end

    self
  end

  def my_each_proc(prc)
    # i = 0
    # # debugger
    # while i < self.length
    #   curr_el = self[i]
    #   prc.call(curr_el)

    #   i += 1
    # end

    # self
    # debugger
    self.my_each_block(&prc)
  end
end

arr = [1,2,3]
proc = Proc.new { |el| puts el * 2 }
# arr.my_each_proc(proc)
# arr.my_each_block { |el| puts el * 2 }

arr_2d = [[1,2,3], [4,5,6]] # 2d arr
proc_2d = Proc.new do |row|
  row.my_each_proc(proc)
end
arr_2d.my_each_proc(proc_2d)
# arr_2d.my_each_block do |row| 
#   row.my_each_block do |el| 
#     puts el
#   end
# end