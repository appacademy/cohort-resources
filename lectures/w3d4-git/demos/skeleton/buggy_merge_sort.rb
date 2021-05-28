require "byebug"

class Array
  def merge_sort(&prc) # Procifies the block
    return self if self.count <= 1 # arr should be self
  
    middle = self.length / 2
    left = self[0...middle]
    right = self[middle..-1]
  
    sorted_left = left.merge_sort(&prc) # mergesort is monkeypatched
    sorted_right = right.merge_sort(&prc)
    Array.merge(sorted_left, sorted_right, prc)
  end
  
  private
  def self.merge(left, right, prc) # class method
    prc ||= Proc.new { |a,b| a <=> b } # default proc, spaceship compares a and b

    result = []
    until left.empty? || right.empty?
      if prc.call(left[0], right[0]) <= 0
        result << left.shift # += should be <<
      else
        result << right.shift
      end
    end
  
    result + left + right
  end
end


array = [5, 4, 300, 25, 21, 26, 24]

# # without a block
p array.merge_sort

# # passing in a block 
p array.merge_sort { |a, b| b <=> a }

