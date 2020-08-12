require "byebug"

# Return the input string in reverse

# def reverse_iter(string)
#     reversed = ""
#     (string.length - 1).downto(0).each do |idx|
#         reversed += string[idx]
#     end

#     reversed
# end

# p reverse_iter("hello")
# p reverse_iter("cat")

def reverse_rec(string)
    debugger
    return "" if string.empty?
    debugger
    sub_str = reverse_rec(string[0...-1])
    debugger 
    string[-1] + sub_str
end

p reverse_rec("cat")
  
#   p reverse_rec("cat")
  
  
#   p reverse_iter("hello")

  
  