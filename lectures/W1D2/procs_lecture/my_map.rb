# p [1, 2, 3].map { |num| num * 2}

def my_map(arr, prc)
    result = []
    arr.each do |ele|
        result << prc.call(ele)
    end
    result
end

# p my_map([1, 2, 3]) { |num| num * 2 }
doubler = Proc.new { |num| num * 2 }
p my_map([1, 2, 3], doubler) 
