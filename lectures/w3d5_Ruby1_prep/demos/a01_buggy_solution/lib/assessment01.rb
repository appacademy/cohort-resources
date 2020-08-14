require 'byebug'
class Array

  # Monkey patch the Array class and add a my_inject method. If my_inject receives
  # no argument, then use the first element of the array as the default accumulator.

  def my_inject(accumulator = nil, &block)

    if accumulator.nil?
      i = 1
    else
      i = 0
    end

    accumulator ||= self[0]
    
    while i < self.length
      accumulator = block.call(accumulator,self[i])
      i += 1
    end
    accumulator
  end
end

# primes(num) returns an array of the first "num" primes.
# You may wish to use an is_prime? helper method.

def is_prime?(num)
  # (2...num).none? { |factor| num % factor == 0 }

  (2...num).each do |num1|
    if num%num1 == 0 
      return false
    end
  end

  return true
end


def primes(num)
  count = 0; 
  i = 2; 
  arr = []

  while count < num
    if is_prime?(i)
      arr.push(i)
      i += 1; 
      count += 1;
    else #instead put end
      i += 1  
    end #exclude
  end

  return arr
end

# p primes(5)
# Write a recursive method that returns the first "num" factorial numbers.
# Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
# is 1!, the 3rd factorial is 2!, etc.

def factorials_rec(num)
  return [1] if num == 1
  return [1,1] if num == 2

   arr = factorials_rec(num-1);
   arr.push((num-1)*arr[-1])
   return arr
end

# p factorials_rec(4)
class Array

  # Write an Array#dups method that will return a hash containing the indices of all
  # duplicate elements. The keys are the duplicate elements; the values are
  # arrays of their indices in ascending order, e.g.
  # [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

  def dups
    # debugger
    dups_hash =  Hash.new {|h,k| h[k] = []} #Hash.new([]) 

    self.each_with_index do |el,idx| #self.each do |el,idx|
      #debugger 
      dups_hash[el].push(idx)
    end

    #debugger
    dups_hash.select {|k,v| v.length > 1}
  end
end

class String

  # Write a String#symmetric_substrings method that returns an array of substrings
  # that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
  # Only include substrings of length > 1.

  def symmetric_substrings
    str_arr = self.chars                                                          
    palindromes = []

    str_arr.each_with_index do |char, idx|
      (idx+1...self.length).each do |idx1|
        sub_str = self[idx..idx1]
        palindromes.push(sub_str) if sub_str == sub_str.reverse #sub_str=sub_str.reverse 
      end
    end
    # debugger
    return palindromes
  end
end

class Array

  # Write an Array#merge_sort method; it should not modify the original array.

  def merge_sort(&prc)
    #this is our base base because we know that if an array is empty or 
    #it has a length of one then it is in fact sorted.
    return self if self.length <= 1
    #we have to make sure that we assign a prc if there is no proc being passed in 
    
    prc ||= Proc.new {|a,b| a<=>b} #exclude

    mid = self.length/2
    left = self[0...mid]
    right = self[mid..-1]

    left_sorted = left.merge_sort(&prc)
    right_sorted = right.merge_sort(&prc)

    Array.merge(left_sorted,right_sorted,&prc)
  end

  private
  def self.merge(left, right, &prc)
    merged_arr = []

    until left.empty? || right.empty? 
      if prc.call(left[0],right[0]) == -1 #prc(left[0],right[0])
        merged_arr << left.shift
      else
        merged_arr << right.shift
      end
    end

    return merged_arr + left + right
  end
end
