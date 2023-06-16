array = [1,2,-1,4,4]

def pair_sums?(array, target)
    array.each do |ele|
        array.each do |ele2|
            if ele + ele2 == target
                return true
            end
        end 
    end 
    return false

    bank = {1: true, 2: true, -1:true, 4: true}
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
p pair_sums?(array, 0)