require "byebug"

# def avg(num_1, num_2)
#     sum = num_1 + num_2
#     debugger
#     sum / 2.0
# end

# debugger

# first_result = avg(15, 20)
# second_result = first_result + 0.5

# p second_result

def is_positive(num)
    if num >= 0 
        
        return "positive"
    else
        return "negative"
    end
end

p is_positive(4)

#  display variable_name: track variable name's value as you analyze code with debugger
#  next / n: moves to next line of code 
#  continue / c: Analyze rest of block of code until we hit the next debugger. If htere is no other debugger, analyze all file and get out of byebug
#  step / s: will enter the function call where the debugger is stopped
#  break: followed by line number where you want to add a debugger;
#  l start-end: crops chunk of code that you want to visualize while you debug