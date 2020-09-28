def censor(sentence, arr)
  new_sentence = sentence.split(" ")

  i =0
  new_sentence.each do |word|
   
    if arr.include?(word.downcase)  #mutate the words that are in my curse words
     
      new_sentence[i] = mutate_word(word) #mutating the word 
    end
    i += 1 
  end

  new_sentence.join(" ")
end

def mutate_word(word) #helper
  vowels = 'aeiou'

  word.each_char.with_index do |char, i|
    if vowels.include?(char.downcase)
      word[i] = "*"
    end
  end
  word
end

def hash_select(hash, &prc)
  new_hash = {}

  hash.each do |k,v|
    if prc.call(k,v)
      new_hash[k] = v
    end
  end

  new_hash 
end

def proc_count(val, array)
  count = 0
  
  array.each do |prc|#naming can be helpful 
    if prc.call(val)
      count += 1 
    end
  end
  count 
end