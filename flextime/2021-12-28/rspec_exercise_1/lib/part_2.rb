require "byebug"

def vowel_counts(str)
  letter_count_hash = Hash.new(0)
  str.each_char do |char|
    lowered = char.downcase
    letter_count_hash[lowered] += 1 if "aeiou".include?(lowered)
  end
  letter_count_hash
end

#rspec commands
#bundle exec rspec
#bundle exec rspec spec/01_part_2_spec
#bundle exec rspec spec/01_part_2_spec.rb:21 


#docs commands examples
#ri String 
#ri Array#method