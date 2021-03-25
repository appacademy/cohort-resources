
#    3 <=> 2  => 1
#    2 <=> 3 => -1 
#    2 <=> 2 => 0


   def compare_eles(arr, prc)
    (0...arr.length - 1).each do |idx|
        # if arr[idx] > arr[idx+1]
        # if (arr[idx] <=> arr[idx+1]) == 1
        if prc.call(arr[idx], arr[idx + 1]) == 1
            p "found element greater than the next"
            return true 
        end
    end
    false
   end
hash = {}
# proc_comparator = Proc.new {|a, b| a <=> b}
proc_comparator = Proc.new do |a, b| 
                    a <=> b
                  end
array = [1,2,3,4,5]
p compare_eles(array.reverse, proc_comparator)












































# def count_up(n)
#     if  "  ".include?(gets.chomp)
#         p "You found the correct key in #{n} tries!"
#         return
#     end
#     p n
#     count_up(n+1)
# end

# count_up(0)




