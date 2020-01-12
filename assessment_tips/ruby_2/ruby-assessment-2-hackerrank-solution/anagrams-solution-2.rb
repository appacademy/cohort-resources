# Write a method `anagrams(str_1, str_2)` that takes in two strings and returns
# a boolean indicating whether or not the two strings are anagrams. Two strings are
# anagrams if they contain the same exact characters, but not necessarily in the
# same order.
#
# Your solution should have a linear - O(n) runtime, where n is the combined
# length of the input strings.
#
# Scoring: 8 points maximum
#   4 points awarded for passing all seven test cases
#   4 points awarded for linear runtime
#
# This component of the assessment is estimated to take 10 minutes.

def anagrams(str_1, str_2)
	# This hash will count each character amongst the two strings
	char_counts = Hash.new(0)
	
	# For the first string we'll increment each char count
	str_1.each_char { |char| char_counts[char] += 1 }
	
	# For the second string we'll decrement
	str_2.each_char { |char| char_counts[char] -= 1 }

  # If they are anagrams, they have the same amount of each char and all char 
  # counts should be 0
	char_counts.all? { |_, v| v.zero? }
end

# Test Cases
p anagrams("restful", "fluster")    # => true
p anagrams("zyyx", "zyxy")          # => true
p anagrams("base", "case")          # => false
p anagrams("taco", "cat")           # => false
p anagrams("cat", "taco")           # => false
p anagrams("zyyx", "zyx")           # => false
p anagrams("zyx", "zyyx")           # => false