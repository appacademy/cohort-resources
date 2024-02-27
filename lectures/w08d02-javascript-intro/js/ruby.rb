# you dont have to write "return"

def doubler(array)
    doubled = []
    array.each do |num|
        doubled << num * 2
    end 
    # writing "return" is optional
    doubled
end 



# variables were easy 
dog = "remy"
cat = "jackson"


# snake_case 
does_this_look_like_a_snake_winding = "case"


# equality
1 == 1


# running a file in ruby
# ruby ruby.rb


# << shoveling is awesome!



# negative indexing is awesome!
array = [1,2,3,4,5,6]

array[-1]



# if statements

if 1 == 1
    # do something
elsif 
    # do something else
else 
    # just do this
end 


# one liner if

return "hi" if  1 == 1


# interpolation

dog = "fluffy"
"#{dog} is the best fetcher in the world"


# 2 falsey values 
# nil
# false 


# counter hash 

array = ["a","s","r","a","b","b"]

new_hash = Hash.new(0)

array.each do |el|
    hash[el] += 1
end 


# terminal printing
p array 
puts array 
print array


# loops


while 1 == 1 
end 


array.each do |el|

end 



# cant have methods as values in ruby

# hash = {fn => def double(num)
#     num * 2
# end , fn2 => def decade 

# }