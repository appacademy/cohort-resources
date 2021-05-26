require "byebug"

class Array
  def merge_sort(&prc) # Procifies the block
    return self if arr.count <= 1
  
    middle = self.length / 2
    left = self[0...middle]
    right = self[middle..-1]
  
    sorted_left = merge_sort(left)
    sorted_right = merge_sort(right)
    merge(sorted_left, sorted_right, prc)
  end
  
  private
  def self.merge(left, right, prc)
    result = []
    until left.empty? || right.empty?
      if prc.call(left[0], right[0]) <= 0
        result += left.shift
      else
        result += right.shift
      end
    end
  
    result + left + right
  end
end


array = [5, 4, 300, 25, 21, 26, 24]

# # without a block
p array.merge_sort

# # passing in a block 
# p array.merge_sort { |a, b| b <=> a }

