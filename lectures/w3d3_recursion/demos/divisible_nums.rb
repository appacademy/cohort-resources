
# Return all the numbers divisible by divisor that are ≤ num


def all_divisible_nums(num, divisor)
    if divisor > num 
        return []
    end
    if num % divisor == 0
        all_divisible_nums(num -1, divisor) << num 
    else
        all_divisible_nums(num -1, divisor)
    end
    
end

# p all_divisible_nums(6, 3) #=> [3, 6]
p all_divisible_nums(7, 2) #=> [3, 6, 9, 12]
# p all_divisible_nums(1, 3) #=> [3, 6]

