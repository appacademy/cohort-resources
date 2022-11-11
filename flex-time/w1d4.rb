def proctition(arr, &prc)
  true_arr = []
  false_arr = []
  arr.each do |ele|
    if prc.call(ele)
      true_arr.push(ele)
      # [4, 7, 1, 3]
    else
      false_arr.push(ele)
      # [-5, -10, -2]
    end
  end
  true_arr + false_arr # [4, 7, 1, 3, -5, -10, -2]
end

# p proctition([4, -5, 7, -10, -2, 1, 3]) { |el| el > 0 }
# # [4, 7, 1, 3, -5, -10, -2]

# p proctition([7, 8, 3, 6, 10]) { |el| el.even? }
# # [8, 6, 10, 7, 3]

# p proctition(['cat','boot', 'dog', 'bug', 'boat']) { |s| s[0] == 'b' }
# # ["boot", "bug", "boat", "cat", "dog"]


# ------------------------------------------------------------------------

def filter_out!(arr, &prc)
  i = 0
  while i < arr.length
    if prc.call(arr[i])
      arr.delete(arr[i])
    else
      i += 1
    end
  end
  arr
end

# arr_1 = [10, 6, 3, 2, 5 ]
# filter_out!(arr_1) { |x| x.odd? }
# p arr_1     # [10, 6, 2]

# arr_2 = [1, 7, 3, 5 ]
# filter_out!(arr_2) { |x| x.odd? }
# p arr_2     # []

# arr_3 = [10, 6, 3, 2, 5 ]
# filter_out!(arr_3) { |x| x.even? }
# p arr_3     # [3, 5]

# arr_4 = [1, 7, 3, 5 ]
# filter_out!([1, 7, 3, 5 ]) { |x| x.even? }
# p arr_4 # [1, 7, 3, 5]

# ------------------------------------------------------------------------




def procipher(sentence, procs_hash)
  words = sentence.split(" ")
  words.each.with_index do |word, i|
    procs_hash.each do |checker_proc, cipher_proc|
      words[i] = cipher_proc.call(words[i]) if checker_proc.call(word)
    end
  end
  words.join(" ")
end

is_yelled = Proc.new { |s| s[-1] == '!' }
is_upcase = Proc.new { |s| s.upcase == s }
contains_a = Proc.new { |s| s.downcase.include?('a') }
make_question = Proc.new { |s| s + '???' }
reverse = Proc.new { |s| s.reverse }
add_smile = Proc.new { |s| s + ':)' }

# p procipher('he said what!',
#     is_yelled => make_question,
#     contains_a => reverse
# ) # "he dias ???!tahw"

# p procipher('he said what!',
#     contains_a => reverse,
#     is_yelled => make_question
# ) # "he dias !tahw???"

# p procipher('he said what!',
#     contains_a => reverse,
#     is_yelled => add_smile
# ) # "he dias !tahw:)"

# p procipher('stop that taxi now',
#     is_upcase => add_smile,
#     is_yelled => reverse,
#     contains_a => make_question
# ) # "stop that??? taxi??? now"

# p procipher('STOP that taxi now!',
#     is_upcase => add_smile,
#     is_yelled => reverse,
#     contains_a => make_question
# ) # "STOP:) that??? taxi??? !won"


# ------------------------------------------------------------------------

def proper_factors(num)
  (1...num).select { |i| num % i == 0 }
end

def aliquot_sum(num)
  proper_factors(num).sum
end

def perfect_number?(num)
  num == aliquot_sum(num)
end


def ideal_numbers(n)
  results = []

  test_number = 1
  while results.length < n
    results << test_number if perfect_number?(test_number)
    test_number += 1
  end
  results
end

p ideal_numbers(2) # [6, 28]
p ideal_numbers(3) # [6, 28, 496]