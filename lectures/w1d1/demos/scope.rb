# def say_hello
#     message = "hello"
# end

# say_hello
# p message   # NameError: undefined local variable




# message = "hi"

# def say_hello
#     p message   # NameError: undefined local variable
# end

# say_hello



# # Global variables

# $message = "hello globe"

# def say_hello
#     p $message
# end

# say_hello # => "hello globe"




# def say_hello
#     $message = "hello globe"
# end

# say_hello
# p $message # => "hello globe"




# # Constants

# FOOD = "pho"
FOOD = "burger"
FOOD[0] = "P"
"burger"[0] = "P" # FOOD => "Purger"

FOOD_COUNT = 2
FOOD_COUNT += 4 
FOOD_COUNT = FOOD_COUNT + 4 

p FOOD # => "Pho




p $drink

def my_favorite
    $drink = "ice coffee"
end

p $drink
my_favorite
p $drink

# # What does not have it's own scope?

# def say_bye
#     message = "bye"

#     3.times do 
#         p message
#     end
# end

# say_bye




# if true
#     drink = "cortado"
# end

# p drink


my_var = "cheese"

def thinger

end 