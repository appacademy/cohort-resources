def first_letter_vowel_count(sentence)

  sentence
    .split(" ")
    .reduce {|sum, word| "aeiou".include?(word[0].downcase) ? sum + 1 : sum}

  ### OR THIS WAY BELOW ###

  # count = 0

  # words = sentence.split(" ")
  # words.each do |word|

  #   if "aeiou".include?(word[0].downcase)
  #     count +=1
  #   end

  # end

  # count

end

def count_true(array, proc)

  count = 0
  array.each do |ele|
    if proc.call(ele) == true
      count += 1
    end
  end
  count

end

def procformation(array, p1, p2, p3)

  array.map do |ele|
    if p1.call(ele)
      p2.call(ele)
    else
      p3.call(ele)
    end
  end

end

# def array_of_array_sum(array)

#   count = 0

#   array.each do |sub|
#     sub.each do |int|
#       count += int
#     end
#   end

#   count
# end

def array_of_array_sum(array)

  array.flatten.sum
end

def selective_reverse(sentence)

  vowels = "aeiou"
  sentence
    .split(" ")
    .map {|word| vowels.include?(word[0].downcase) || vowels.include?(word[-1].downcase) ? word : word.reverse }
    .join(" ")
end

def hash_missing_keys(hash, *args)

  args.select {|ele| !hash.has_key?(ele) }

end


