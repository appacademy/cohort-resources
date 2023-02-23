module MyEnumerable

  def all?(&prc)
    self.each do |ele|
      return false if !prc.call(ele)
    end
    true
  end

end




class MyArray
  # include Enumerable
  include MyEnumerable

  attr_reader :length
  def initialize(size = 0, default = nil, &prc)
    @arr = []
    @length = 0
    size.times do |i|
      value = prc.nil? ? default : prc.call(i)
      @arr << value
      @length += 1
    end

    def each(&prc)
      self.length.times do |i|
        prc.call(@arr[i])
      end
      self
    end


    def inspect
      @arr
    end

  end









end










# Arrays, strings, and hashes all share a lot of functionality.Instead of 
# defining that functionality separately on each class, however, we define it
# inside the Enumerable module and "include" it in each class definition.

# This means that each class doesn't have its own version of #map, #all?,
# #any?, etc. Instead, they use the module's definition of these methods. 


# The one exception is #each. Each individual class must define its own version of
# #each, which in turn is called by the Enumerable methods.