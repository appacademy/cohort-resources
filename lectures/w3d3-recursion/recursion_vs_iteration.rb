require 'byebug'
# Any iterative algorithm can be written recursively, and any iterative
# algorithm can be written recursively
class Array
  def my_each(&prc)
    self.length.times { |i| prc.call(self[i]) }
    self # in Ruby, Array#each returns the array it was called on
  end

  def my_each_rec(&prc)
    # debugger
    return self if self.length == 0 # using self follows Ruby style
    
    prc.call(self.first)
    
    # debugger
    self[1..-1].my_each_rec(&prc)
    self # in Ruby, Array#each returns the array it was called on
  end
end


p [1, 2, 3].my_each_rec { |ele| p ele * 2 }
# p [1, 2, 3].my_each { |ele| p ele * 2 }
# p [1, 2, 3].each { |ele| p ele * 2 }

# in Ruby, Array#each calls the block on each element and then returns the array it was called on
# this allows us to chain multiple iterations
# e.g.: [1, 2, 3].each { |ele| p ele * 2 }.each { |ele| p ele * 3 }.each { |ele| p ele * 4 }
# if you want to store the results of the block, use Array#map