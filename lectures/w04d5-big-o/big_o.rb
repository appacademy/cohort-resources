# def pair_sums(array, t)
#     # bank = {}
#     # array.each do |x|
#     #     potential_y = t - x
#     #     if bank[potential_y]
#     #         return true 
#     #     else 
#     #         bank[x] = true
#     #     end 
#     # end 
#     # false

#     array.each do |ele|
#         array.each do |ele_2|
#             if ele + ele_2 == t
#                 return true 
#             end 
#         end 
#     end 
#     return false
# end 


# array = [1,2,3,4,5,2,2,3,-1,4,4]

# p pair_sums(array, 0)



















def non_efficient(array, target)
    array.each do |ele|
        array.each do |ele_2|
            if ele + ele_2 == target
                return true 
            end 
        end 
        return false
    end
end 
# # quadratic o(n^2)
    
#     # return true, if two elements in this array add up to the target

#     p non_efficient(array, target)


def better(array, target)
    bank = {}
    # worst case is that this hash would be as long as the array. 
    array.each do |x|
        potential_y = target - x
        if bank[potential_y]
            return true
        else
            bank[x] = true
        end
        
    end 
    return false
end 
    array = [1,2,3,4,5,6,-1,3,4,53,5,6,76,7,8,89,9]
    target = 0

    p better(array, target)

    # array.map.inject.sum.uniq.filter.select


    