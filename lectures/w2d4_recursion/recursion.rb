# def say_hello 
#     p 'hello'
#     say_hello
# end

# say_hello


#=====================================#

# def countdown(n)
#     p n 
#     countdown(n)
# end

# countdown(10)


#======================================#

# def countdown(n)
#     p n 
#     countdown(n - 1)
# end

# countdown(10)

#=========================================#

def countdown(n)
    if n == 0 
        p "lift off!"
        return 
    end
    p n 
    countdown(n - 1)
end

# countdown(10000000)
countdown(10)
# countdown(-5)
 



# countdown(8)
# countdown(9)
# countdown(10)


















