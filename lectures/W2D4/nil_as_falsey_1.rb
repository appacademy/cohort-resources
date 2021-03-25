# Falsey: false, nil
# Truthy: Everything else 

# if false 
#     p "It is truthy"
# else  
#     p "It is falsey"
# end



# p true || 42 
# p 42 || true 
# p false || 42 
# p 42 || false 
# p false || "hello"
# p nil || "hello"
# p "hi" || "hello"
# p 0 || true
# p false || nil

def greet(person =nil)
    # if person.nil?
    #     person = "you"
    # end
    # person = person || "you"
    person ||= "you"
    p "Hey " + person
end

# greet()
# greet("Lina")


def call_that_proc(val, &prc)
    prc ||= Proc.new { |data| data * 2}
    p prc
    p prc.call(val)
end

# call_that_proc('alvin') {|data| data.upcase + "!!!"}
# call_that_proc('simcha')


# RULE: 
# If both sides of an OR statement are false, return false 
# If either side or both sides are true, return true





# nil & false 

# if nil 

# else
# end

# true || false => true  
# nil || true => true 
# false || nil => nil 
# false || true => true 


def method_call(var)
    if var == nil || var == false 
        var = 100 
    end

    # var = var + 100 
    # var += 100
    var = var || 100
    var ||= 100
    return var + 3
end


method_call(var)
method_call(5)
method_call(nil)















