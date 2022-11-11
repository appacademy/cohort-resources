# Define your methods here. 

def first_letter_vowel_count(sent)
    vowels = 'aeiou'
    sent_arr = sent.split(" ")
    count = 0

    sent_arr.each do |word|
        if vowels.include(word[0])
            count += 1
        end
    end

    return count
end

def count_true(arr, prc)
    count = 0
    
    arr.each do |ele|
        if prc.call(ele)
            count += 1
    end
end

def procformation(arr, &prc1, &prc2, &prc3)
    res = []
    arr.each do |ele|
        if prc1.call(ele)
            res << prc2.call(ele)
        else
            res << prc3.call(ele)
        end
    end
    res
end

def array_of_array_sum(arrays)
    sum

    arrays.each do |arr|
        sum += arr.sum
    end

    sum
end

def selective_reverse(sent)
    vowels = 'aeiou'
    sent_arr = sent.split(' ')
    new_sent_arr = []

    sent_arr.each do |word|
        if !vowels.include?(word[0])
            new_sent_arr << word.reverse
        else
            new_sent_arr << word
        end
    end

    new_sent_arr
end

def hash_missing_keys(hash, additional_args)
    res = []

    additional_args.each do |arg|
        if hash[arg]
            res << arg
        end
    end

    res
end