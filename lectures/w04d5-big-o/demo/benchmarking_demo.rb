require 'benchmark'

def bubble_sort(ary)
  ary = ary.dup
  sorted = false
  until sorted
    sorted = true
    0.upto(ary.length - 2) do |i|
      next if ary[i] <= ary[i + 1]
      ary[i], ary[i + 1] = ary[i + 1], ary[i]
      sorted = false
    end
  end
  ary
end

def quick_sort(ary)
  return ary if ary.length <= 1
  pivot = ary.sample
  left = ary.select { |el| el < pivot }
  mid = ary.select { |el| el == pivot }
  right = ary.select { |el| el > pivot }
  quick_sort(left) + mid + quick_sort(right)
end

class Array
  def merge_sort
    return self if count < 2

    middle = count / 2

    left, right = self.take(middle), self.drop(middle)
    sorted_left, sorted_right = left.merge_sort, right.merge_sort

    merge(sorted_left, sorted_right)
  end

  def merge(left, right)
    merged_array = []
    until left.empty? || right.empty?
      merged_array <<
        ((left.first < right.first) ? left.shift : right.shift)
    end

    merged_array + left + right
  end
end


small = (1..1_000).to_a.shuffle
med = (1..5_000).to_a.shuffle
big = (1..10_000).to_a.shuffle
very_big = (1..1_000_000).to_a.shuffle

puts "\n\nruby's sort!!!!!!!!!!!!!!!!"
Benchmark.bm do |b|
  b.report('%-15s' % "1,000:    ") { small.sort }
  b.report('%-15s' % "5,000:   ") { med.sort }
  b.report('%-15s' % "10,000:   ") { big.sort }
  b.report('%-15s' % "1,000,000:  ") { very_big.sort }
end

puts "\n(our) quick sort!!!!!!!!!!!"
Benchmark.bm do |b|
  b.report('%-15s' % "1,000:    ") { quick_sort(small) }
  b.report('%-15s' % "5,000:    ") { quick_sort(med) }
  b.report('%-15s' % "10,000:   ") { quick_sort(big) }
  b.report('%-15s' % "1,000,000: ") { quick_sort(very_big) }
end

puts "\nmerge sort!!!!!!!!!!!!!!!!!"
Benchmark.bm do |b|
  b.report('%-15s' % "1,000:    ") { small.merge_sort }
  b.report('%-15s' % "5,000:    ") { med.merge_sort }
  b.report('%-15s' % "10,000:   ") { big.merge_sort }
  b.report('%-15s' % "1,000,000: ") { very_big.merge_sort }
end

puts "\nbubble sort!!!!!!!!!!!!!!!!!"
Benchmark.bm do |b|
  b.report('%-15s' % "1,000:    ") { bubble_sort(small) }
  b.report('%-15s' % "5,000:    ") { bubble_sort(med) }
  b.report('%-15s' % "10,000:   ") { bubble_sort(big) }
  b.report('%-15s' % "1,000, 000: ") { bubble_sort(very_big) }
end

# this subsets method has a time-complexity of O(n^2)
# class Array
#   def subsets
#     return [[]] if empty?
#     subs = take(count - 1).subsets
#     subs.concat(subs.map { |sub| sub + [last] })
#   end
# end

# p [1, 2, 3, 4, 5].subsets
# p [1, 2, 3, 4, 5].subsets.length



# this permutations has a time-complexity of O(n!)
# def permutations(array)
#   return [array] if array.length <= 1

#   first = array.shift

#   perms = permutations(array)
#   total = []

#   perms.each do |perm|
#     (0..perm.length).each do |i|
#       total << perm[0 ... i] + [first] + perm[i .. -1]
#     end
#   end
#   total
# end