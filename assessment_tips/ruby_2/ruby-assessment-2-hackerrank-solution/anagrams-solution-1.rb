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

def char_hash(str)
    count = Hash.new(0)
    str.each_char { |char| count[char] += 1 }
    count
end

def anagrams(str_1, str_2)
    char_hash(str_1) == char_hash(str_2)
end

# Test Cases
p anagrams("restful", "fluster")    # => true
p anagrams("zyyx", "zyxy")          # => true
p anagrams("base", "case")          # => false
p anagrams("taco", "cat")           # => false
p anagrams("cat", "taco")           # => false
p anagrams("zyyx", "zyx")           # => false
p anagrams("zyx", "zyyx")           # => false