# my_inject 
  * accumulator return within the Array class definition but not within the my_inject method definition 
  * add `accumulator = self[0]` after line 10
# primes
  * line 51 (end does not have d)
  * line 31 range should start at 2 and not 0
# factorials 
  * line 68 should be `(num-1)*arr[-1]`
# dups 
  * line 82 should be `Hash.new {|h,k| h[k] = []}`
  * line 84 should be `each_with_index`
# symmetric_substrings 
  * line 103 should be `(idx + 1)`
  * line 105 should be `sub_str == sub_str.reverse` (double equal sign)
# merge_sort 
  * line 132 should pass in `&prc` as argument 
  * line 132 should be `Array.merge` instead of `self.merge` 