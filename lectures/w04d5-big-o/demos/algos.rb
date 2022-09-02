def first_thing(array)
    array.first
end
# O(1)



def three_hundred_thousand_puts(name)
    300000.times { puts "hello, #{name}" }
end
# O(1)


def print_all(array)
    array.each { |el| puts el }
end
#O(n)


def most_common_char(word)
    counts = Hash.new(0)
    chars = word.split("") #O(n)
    chars.each { |char| counts[char] += 1 } #O(n)
    count.max_by { |key, value| value } #O(n)
    # n + n + n => 3n
end
# O(n)


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
#O(log n)

  
class Array
    def merge_sort
        return self if count < 2

        middle = count / 2

        left, right = self.take(middle), self.drop(middle)
        sorted_left, sorted_right = left.merge_sort, right.merge_sort

        self.class.merge(sorted_left, sorted_right)
    end

    def self.merge(left, right)
        merged_array = []
        until left.empty? || right.empty?
            merged_array << ((left.first < right.first) ? left.shift : right.shift)
        end

        merged_array + left + right
    end
end

#O(n log n)


def all_pair_sums(array)
    sums = []

    array.each do |el1|
        array.each do |el2|
            sums << el1 + el2
        end
    end
    sums
end
# O(n^2)


class Array
    def subsets
        return [[]] if self.empty?
        subs_without_first = drop(1).subsets # O(n)
        subs_with_first = subs_without_first.map { |sub| [self.first] + sub } # O (n)
        subs_with_first + subs_without_first # O(n ^ 2)
    end
    # ( O(n) * O ( n ^ 2) ) + O (n) =>  O ( n ^ 2 )
end


def permutations(array)
    return [array] if array.length <= 1 #O (1)

    perms_without_first = permutations(array.drop(1)) # O (n)
    
    perms_without_first.inject([]) do |all_perms, perm| # O (n)
        all_perms + (0..perm.size).map do |i|  # O (n)
            perm.take(i) + [array.first] + perm.drop(i)
        end
    end
end 
#O(n!)
