def century(array)
    century_array = []
    array.each do |num|
        century_array << num * 100
    end 
    century_array
end 

# p century([1,2,3,4,5])



def variables()
    dog_name = "Remy"
    return "#{dog_name} is the best"
end 


# iam_a_snake_yay = "snake"

# p variables

# if statements
if true
    return "puppies"
elsif false
    return "cats"
else
    return "birds"
end


def comparison(input)

    if input == 3
        return true
    end 
    return false
end 

# p comparison("3")


def neg_indexing(array)
    return array[-1]
end 

# p neg_indexing([1,2,3,4,5])


def truthy_falsey(value)
    if value 
        return "this is a truthy value"
    end 
    "this is a falsey value"
end 

# p truthy_falsey(false)


