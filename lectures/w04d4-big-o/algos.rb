def first_thing(array)
    array.first
end
# Time complexity: O(1) => constant


def three_hundred_thousand_puts(name)
    300000.times { puts "hello, #{name}" }
end
# Time complexity: O(1)


def print_all(array)
    array.each { |el| puts el }
end
# Time complexity: O(n)




def most_common_char(word)
    counts = Hash.new(0)
    word.chars.each { |char| counts[char] += 1 }
    counts.max_by { |key, num| num }
end
# Time Complexity: O(n + n) => O(n)


class Array
    def include?(value)
        self.each do |el|
        return true if (el == value) 
        end
        
        false
    end
end
# TC: O(n)



def all_pair_sums(array)        #[1,2,3]            num_ops = 3 + 3 + 3 = 9   3 ^ 3 => n ^ n => n ^ 2
    sums = []                    #el1 = 1

    array.each do |el1|
        array.each do |el2|             
        sums << el1 + el2
        end
    end

    # (0...array.length).each do |i|
    #     (i...array.length).each do |i2|            
    #     sums << array[i1] + array[i2]
    #     end
    # end

    sums
end
# TC: O(n^2)


# def do_the_thing_two_arrays(arr1, arr2)   #[1,2,3]     #[4,6,7,7,3,4,4,66]   # TC: O(n * m) => O(n^2)
#     arr1.each do |ele|
#     end
#     arr2.each do |ele2|
#         #x operation ele + ele2       # TC: O(n + m) => O(n)
#     end
# end






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
# TC: O(log n)





def merge_sort(array)
    return array if array.length == 1
    mid = array.length/2
    left = array[0...mid]
    right = array[mid..-1]
    merge(merge_sort(left), merge_sort(right))   # log n operation happens for every n operation
                                                # n * logn => O(n log(n))
end

def merge(arr1, arr2)
    result = []
    arr1.length > arr2.length ? j = arr1.length : j = arr2.length
    i = 0
    while i < j 
    # until arr1.empty? || arr2.empty?
        if arr1[0] <= arr2[0]
            result << arr1[i]
        else
            result << arr2[i]
        end
        i += 1
    end
    result + arr1 + arr2
end







def subsets(arr)  
    return [[]] if arr.length === 0
    last = arr.pop
    prev_sol = subsets(arr)
    prev_sol + prev_sol.map {|ele| ele + [last]}
end
# TC: O(2^n)

# [] => [[]] => 2 ^ 0 = 1
# [1] => [[],[1]] # 2   => 2 ^ 1 = 2
# [1,2] => [[],[1],[2],[1,2]] # 4  => 2 ^ 2 = 4 
# [1,2,3] => [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] # 8 => 2 ^ 3 = 8
# [1,2,3,4] => [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3],[4],[1,4],[2,4],[1,2,4],[3,4],[1,3,4],[2,3,4],[1,2,3,4]] # 16 => 2 ^ 4 = 16


# f([1,2,3,4]) =>  f([1,2,3]) 
# f([1,2,3]) =>  f([1,2]) 
# f([1,2]) =>  f([1]) 
# f([1]) =>  f([]) 
# f([]) =>  [[]]




def permutations(array)
    return [array] if array.length <= 1

    last_ele = array.pop
    perms = permutations(array)
    total_permutations = []
    perms.each do |perm|
        (0..perm.length).each do |i|
            total_permutations << perm[0...i] + [last_ele] + perm[i..-1]
        end
    end
    total_permutations
end

# f([]) => [[]]
# f([1]) => [[1]] #  length = 1
# f([1,2]) => [[1, 2], [2, 1]] length = 2
# f([1,2,3]) => [[3,1,2],[1,3,2],[1,2,3],[3,2,1],[2,3,1][2,1,3]] # length = 6
# f([1,2,3,4]) => length = 24
