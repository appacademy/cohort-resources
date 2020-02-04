require 'erb'
require 'byebug'

# template = ERB.new('<%= (1..10).to_a.join(", ") %>')
# debugger
# template.result # this will evaluate the erb that we saved to the variable


x = "hello there, world!"
debugger
ERB.new("<%= x %>").result #raises exception
ERB.new("<%= x %>").result.binding
y = 'world'
# my_new_variable = "Goodbye there, world"
#type binding.local_variables

#this is how the instance variables in the controller are connected to the 
#corresponding views
# s = "s"