require "byebug"
# Define your methods here. 
def first_letter_vowel_count(sent)
  vowels = %w( a e i o u)
  sent_arr = sent.split("")
  count = 0
  sent_arr.each do |word|
    count += 1 if vowels.include(word[0])   
  end
  count
end

def count_true(arr,prc)
  count = 0
  arr.each do |el|
    if prc.call(el)
      count = 1
    end
  end
end

def procformation(arr,prc1,prc2,prc3)
  new_arr = []

  arr.each do |el|
    if prc1.call(el)
      new_arr << prc2(el)
    else
      new_arr << prc3(el)
    end
  end
  new_arr
end

def array_of_array_sum(arr)
  arr.flatten.inject {|el1,el2| el1 + el2}
  arr
end

def selective_reverse(sent)
  vowels = %w( e i o u)
  sent_arr = sent.split("")
  new_sent = []

  sent_arr.each do |word|
    if vowels.include?(word[0]) || vowels.include?(word[-1].downcase)
      new_sent << word
    else
      new_sent << word.reverse
    end
  end
  new_sent.join("")
end

def hash_missing_keys(hash, *els)
  new_arr = []
  els.each do |el|
    if hash[el]
      new_arr << el
    end
  end
  new_arr
end