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
puts 
puts
puts "ruby's sort!!!!!!!!!!!!!!!!"

Benchmark.bm do |b|
  b.report("1,000:   ") { small.sort }
  b.report("5,000:  ") { med.sort }
  b.report("10,000: ") { big.sort }
  # b.report("1,000, 000: ") { very_big.sort }
end
puts
puts "(our) quick sort!!!!!!!!!!!"
Benchmark.bm do |b|
  b.report("1,000:   ") { quick_sort(small) }
  b.report("5,000:  ") { quick_sort(med) }
  b.report("10,000: ") { quick_sort(big) }
  # b.report("1,000, 000: ") { quick_sort(very_big) }
end
puts
puts "merge sort!!!!!!!!!!!!!!!!!"
Benchmark.bm do |b|
  b.report("1,000:   ") { small.merge_sort }
  b.report("5,000:  ") { med.merge_sort }
  b.report("10,000: ") { big.merge_sort }
  # b.report("1,000, 000: ") { very_big.merge_sort }
end
puts
puts "bubble sort!!!!!!!!!!!!!!!!!"
Benchmark.bm do |b|
  b.report("1,000:   ") { bubble_sort(small) }
  b.report("5,000:  ") { bubble_sort(med) }
  b.report("10,000: ") { bubble_sort(big) }
  # b.report("1,000, 000: ") { bubble_sort(very_big) }
end
