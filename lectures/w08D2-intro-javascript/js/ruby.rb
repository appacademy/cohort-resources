def doubler(array)
    doubled = []
    array.each do |el|
        doubled << el * 2
    end
    # writing return is optional
    doubled
end 


# variables 
dog = "remy"
cat = "fluffy"


# snake case 
remy_is_the_best_dog = true



# when checking for equality 
1 == 1


# when running a file 
# ruby name_of_file.rb

array = [1,2,3,4,5,6,7]
# get last element of array
array[-1]


# if statement

if 1 == 1
    puts "hi"
elsif 2== 2 
    puts "hello"
else 
    puts "bye"
end 


# interpolation
name = "diego"

"hello my name is #{name}"


# falsely values 
# 1. nil
# 2. false 


# COUNTING HASH
array = ["a","s","r","a","b","b"]

hash = Hash.new(0)

array.each do |char|
    hash[char] += 1
end





