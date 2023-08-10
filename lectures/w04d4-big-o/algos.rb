def first_thing(array)
    array.first
end


def three_hundred_thousand_puts(name)
    300000.times { puts "hello, #{name}" }
end


def print_all(array)
    array.each { |el| puts el }
end




def most_common_char(word)
    counts = Hash.new(0)
    word.chars.each { |char| counts[char] += 1 }
    counts.max_by { |key, num| num }
end



class Array
    def include?(value)
        self.each do |el|
        return true if (el == value) 
        end
        
        false
    end
end



def all_pair_sums(array)
    sums = []

    array.each do |el1|
        array.each do |el2|
        sums << el1 + el2
        end
    end

    sums
end



def bsearch(arr, target)
    return nil if arr.length == 1 && arr.first != target
    mid = arr.length / 2
    return mid if arr[mid] == target
    left = arr[0...mid]
    right = arr[mid+1...-1]
    if arr[mid] > target 
        bsearch(left, target)
    else
        stack = bsearch(left, right)
        stack ? stack + mid + 1 : nil
    end
    nil
end





def merge_sort(array)
    return array if array.length <= 1
    mid = array.length/2
    left = array[0...mid]
    right = array[mid..-1]
    merge(merge_sort(left), merge_sort(right))

end

def merge(arr1, arr2)
    result = []
    while arr1.length > 0 && arr2.length > 0
        if arr1[0] <= arr2[0]
            result << arr1.shift
        else
            result << arr2.shift
        end
    end
    result + arr1 + arr2
end







def subsets(arr)  
  return [[]] if arr.length === 0
  last = arr.pop
  prev_sol = subsets(arr)
  prev_sol + prev_sol.map {|ele| ele + [last]}
end





def permutations(array)
  return [array] if array.length <= 1

  perms_without_first = permutations(array.drop(1))

  perms_without_first.inject([]) do |all_perms, perm|
    all_perms + (0..perm.size).map do |i| 
      perm.take(i) + [array.first] + perm.drop(i)
    end
  end
end
