require "byebug"

class Array
  def my_each_block(&prc)
    # debugger 
    i = 0 
    # self => [1,2,3]
    while i < self.length 
      prc.call(self[i]) 
      i += 1
    end
  end

  def my_each_proc(prc)
    my_each_block(&prc)
    # self.my_each_block(&prc)
    # i = 0 
    
    # while i < self.length 
    #   prc.call(self[i])
    #   i += 1
    # end

  end

end

arr = [1,2,3]
# arr.each do |el|

# end
# debugger

# arr.my_each_block do |el|
#   puts el
# end

prc = Proc.new {|el| p el}  # prc.call(1) => 1

arr.my_each_proc(prc)

# arr.my_each_proc do |el|
#   p el
# end