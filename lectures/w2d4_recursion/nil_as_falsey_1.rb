# Falsey: false, nil
# Truthy: Everything else 

# if false 
#     p "It is truthy"
# else  
#     p "It is falsey"
# end



# p true || 42 #=> true 
# p 42 || true #=> 42
# p false || 42 #=> 42
# p 42 || false #=> 42
# p false || "hello"#=>"hello"
# p nil || "hello"#=> "hello"
# p "hi" || "hello"#=> "hi"
# p 0 || true #=> 0
# p false || nil#=> nil

def greet(person = nil)
    # if person.nil?
    #     person = "you"
    # end
    # person = person || "you"
    person ||= "you"
    p "Hey " + person
end

# p greet()
# greet('Alex')




def call_that_proc(val, &prc)
    prc ||= Proc.new { |data| data * 2}
    p prc
    p prc.call(val)
end




# call_that_proc('alvin') {|data| data.upcase + "!!!"}
# p call_that_proc('simcha')