# Single Number

# Given a non-empty array of integers nums, every element appears twice except for one. 
# Find and return that single one.

# bad - O(n^2)
def singleNumberSlow(nums)
  no_duplicates_list = []

  nums.each do |n|
    if !no_duplicates_list.include?(n)
      no_duplicates_list << n
    else
      no_duplicates_list.delete(n)
    end
  end

  no_duplicates_list.first
end

# good - O(n)
def singleNumberFast(nums)
  hash = Hash.new(0)
  
  nums.each do |n|
    hash[n] += 1
  end

  hash.each do |k,v|
    return k if v == 1
  end
end

nums1 = [2,2,1]
p singleNumberFast(nums1) # => 1
nums2 = [4,1,2,1,2]
p singleNumberFast(nums2) # => 4
nums3 = [1]
p singleNumberFast(nums3) # => 1
