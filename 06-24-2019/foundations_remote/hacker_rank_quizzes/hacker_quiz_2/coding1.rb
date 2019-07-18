#write a method, blocker, that accepts two values and a block. the method 
#should return the result of the block when it is passed both values.

# Examples
p blocker(4, 5) { |a, b| a * b } # => 20
p blocker(3, 2) { |a, b| a * b } # => 6
p blocker("Hello", "World") { |a, b| a.upcase + " " + b.downcase + "!" } # => "HELLO world!"
p blocker("cellar", "door") { |a, b| a.upcase + " " + b.downcase + "!" } # => "CELLAR door!"