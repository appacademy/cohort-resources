def first_thing(array)
  array.first #O(1)
end

#O(1)





def three_hundred_thousand_puts(name)
  300000.times { puts "hello, #{name}" } #O(1)
end

#O(1)




def print_all(array)
  array.each do |el| #O(n)
    puts el  #O(1)
  end
end

#n*1 => O(n)



def most_common_char(word)
  counts = Hash.new(0) #O(1)
  word.each_char { |char| counts[char] += 1 } #O(n)
  counts.max_by { |_, num| num } #O(n)
end

#2n + 1 => O(n)






class Array
  def include?(value)
    self.each do |el|
      return true if (el == value) 
    end
    
    false
  end
end

# O(n)






def bsearch(nums, target, start = 0, finish = nums.length)
  return nil if start == finish

  mid = (finish - start) / 2 + start
  case target <=> nums[mid]
  when -1
    bsearch(nums, target, start, mid)
  when 0
    mid
  when 1
    bsearch(nums, target, mid + 1, finish)
  end
end

# O(log n)





class Array
  def merge_sort # O(log n)
    return self if count < 2

    middle = count / 2

    left, right = self.take(middle), self.drop(middle)
    sorted_left, sorted_right = left.merge_sort, right.merge_sort

    self.class.merge(sorted_left, sorted_right)
  end

  def self.merge(left, right) # O(n)
    merged_array = []
    until left.empty? || right.empty?
      merged_array << ((left.first < right.first) ? left.shift : right.shift)
    end

    merged_array + left + right
  end
end

# O (n log n)

#log base 2 5 = 3




def all_pair_sums(array)
  sums = []

  array.each do |el1| #O(n)
    array.each do |el2| #O(n)
      sums << el1 + el2 #o(1)
    end
  end

  sums
end

#n * n => O(n^2)





class Array
  def subsets
    return [[]] if empty?
    subs_without_first = drop(1).subsets
    subs_with_first = subs_without_first.map { |sub| [first] + sub }
    subs_with_first + subs_without_first
  end
end

#O(2^n)







def permutations(array)
  return [array] if array.length <= 1

  perms_without_first = permutations(array.drop(1))

  perms_without_first.inject([]) do |all_perms, perm|
    all_perms + (0..perm.size).map do |i| 
      perm.take(i) + [array.first] + perm.drop(i)
    end
  end
end

#O(n!)