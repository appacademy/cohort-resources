## W4D5 

## Big O Notation

---

## Lecture Objectives

+ Understand motivation for Big O notation
+ Analyze time complexity of common algorithms
+ Explain space complexity

---

## Lecture Outline

+ Motivation for Big O Notation
+ Big O Notation Time Complexity Examples
+ Big O Notation Space Complexity Introduction

---

## Motivation behind Big O Notation

+ Provides a way to discuss how long an algorithm takes to run 

+ Allows comparison of efficiency of different approaches to a problem

---

## Big O Time Complexity/Runtime

+ Language and metric used to describe the efficiency of an algorithm

+ Expressed in terms of:
    - how fast the runtime grows
    - relative to input size
    - as input size gets arbitrarily large

---

## Time Complexity Analysis

+ Big-O notation describes an algorithm's *worst* case

+ Big-O talks about *orders*, not about specifics (i.e. O(2n) and O(100n) are really both just O(n))

---

## Common Big-O Runtimes

+ Constant `O(1)`
+ Logarithmic `O(log n)`
+ Linear `O(n)`
+ Linearithmic `O(n log n)`
+ Polynomial/Quadratic `O(n^2)`/ `O(n^k)`
+ Exponential `O(2^n)`/ `O(k^n)`
+ Factorial `O(n!)`

---

![Complexity Chart](http://bigocheatsheet.com/img/big-o-complexity-chart.png "Complexity Chart")

Source: **bigocheatsheet.com**

---

## Analysis of Input `n`

+ `n` can be the _actual_ input OR the _size_ of the input
+ Example - `n` can refer to an integer, or size of an array

```ruby
def print_n_times(n)
  (0...n).each do |i|
    puts i
  end
end

def print_all_items(items)
  items.each do |item|
    puts item
  end
end

```

---

## Drop the Constants

+ Drop constant coefficients
+ Example - O(2n) -> O(n)

```ruby
def print_items(items)
  items.each do |item|
    puts item
  end

  items.each do |item|
    puts item
  end
end

```

---

## Drop Less Significant Terms

+ Drop less significant terms
+ Example - O(n) + O(n^2) -> O(n^2)

```ruby
def print_numbers(numbers)
  numbers.each do |number|
    puts number
  end
  
  numbers.each do |num_1|
    numbers.each do |num_2|
      puts num_1 + num_2
    end
  end
end

```

---

## Multi-Part Algorithms - Add runtimes

+ Example - runtime is O(a + b)

+ Add runtimes - do `a` chunks of work then `b` chunks of work

```ruby
def print_all(array_a, array_b)
  array_a.each do |ele|
    puts ele
  end

  array_b.each do |ele|
    puts ele
  end
end
```

---

## Multi-Part Algorithms - Multiply runtimes

+ Example - runtime is O(a * b)

+ Multiply runtimes - do `b` chunks of work for each element in `a`
 
```ruby
def print_all(array_a, array_b)
  array_a.each do |ele_a|
    array_b.each do |ele_b|
      puts ele_a + ele_b
    end
  end
end
```

---

## O(1) Constant Time

+ Runtime does not grow as input size changes

```ruby
def print_one(items)
    puts items[0]
end

def hundred_puts(name)
  100.times { puts "hello, #{name}" }
end

```

---

## O(n) Linear Time

+ Runtime grows proportionately as input size changes

```ruby
def print_one(items)
  items.each { |item| puts item }
end

class Array
  def include?(value)
    self.each do |el|
      return true if (el == value)
    end
    
    false
  end
end
```

---

## O(n^2) Quadratic/Polynomial Time

+ Runtime is proportional to a power of the input size

+ O(n^x) where `n` is the size of the input

```ruby
def print_numbers(numbers)
  numbers.each do |num_1|
    numbers.each do |num_2|
      puts num_1 + num_2
    end
  end
end
```

---

# Break

---

## Logarithmic Time

+ O(log n) Logarithmic Time

+ O(n log n) Linearithmic Time

+ Runtime increases by a log of the input size

---

## O(log n) Logarithmic Time

+ Binary search is most common algorithm with O(log n) runtime

+ Example - Binary Search (search for a target in a sorted array)
    1. Start with middle element - is target smaller or bigger than middle element?
    2. Narrow down which half of array to search in - eliminate other half of array that doesn't contain target
    3. Repeat same approach to search for target in the identified half

---

## O(log n) with Binary Search

+ What is the starting input size? `n`
+ When does our bsearch stop? `n * (1/2)^k`
+ How many calls do we make to bsearch? `log n`

```ruby
def bsearch(nums, target, start = 0, finish = nums.length)
  return nil if start == finish

  mid = (finish - start) / 2 + start
  case target <=> nums[mid]
  when -1
    bsearch(nums, target, start, mid)
  when 0
    mid
  when 1
    bsearch(nums, target, mid + 1, finish)
  end
end
```

---

## O(n log n) Linearithmic (Log-Linear) Time

+ Merge Sort is most common algorithm with O(n log n) runtime

+ Example - Merge Sort (sort an array)
    1. Divide array into left and right halves
    2. Repeatedly divide left and right halves until each is single element array
    3. Merge each left and right array back together in a sorted manner by comparing first element of each half

---

## O(n log n) with Merge Sort

+ What is the starting input size? `n`
+ When does our merge sort stop?
+ How many calls do we make to merge sort? `n * (1/2)^k`
+ How many elements are we merging back? `n`

```ruby
def merge_sort(arr)
  return arr if arr.length < 2

  middle = arr.length / 2

  left  = arr[0...middle]
  right = arr[middle..-1]
  
  sorted_left  = merge_sort(left)
  sorted_right = merge_sort(right)

  merged_array = []
  until left.empty? || right.empty?
    merged_array << ((left.first < right.first) ? left.shift : right.shift)
  end

  merged_array + left + right
end
```

---

## O(2^n) Exponential

+ Runtime doubles as input size grows
+ O(2^n) where `n` is the input size

```ruby
def subsets(arr)
    return [[]] if arr.empty?
    subs = subsets(arr[0..-2]) #O(2^n-1)
    subs.concat(subs.map { |sub| sub + [arr.last] }) #O(2^n-1)
end
```

---

## O(n!) Factorial Time

+ Runtime grows relative to the factorial of input size
+ Factorial of a number is calculated by mutiplying all integers from the given number down to 1
    + n * (n-1) * (n-2)*...* 2 * 1 == n!

```ruby
def permutations(array)
  return [array] if array.length <= 1

  first = array.shift

  perms = permutations(array) # O(n-1!)
  total = []

  perms.each do |perm| # O(n-1!)
    (0...array.length).each do |i| #O(n)
      total << perm[0...i] + [first] + perm[i..-1] #O(n)
    end
  end
  total
end
```

---

## Time Complexity Demo

---

## Benchmark Demo

---

## Space Complexity

+ Big O notation can also be used to express space complexity
+ Space complexity is the additional memory cost of new variables relative to input size
+ Always a tradeoff between optimizing for speed or for memory

---

## Space Complexity Examples - O(1)

```ruby
def get_largest_item(items)
  largest = items[0]
  items.each do |item|
    if item > largest
      largest = item
    end
  end
  largest
end
```

---

## Space Complexity Examples - O(n)

```ruby
def array_of_hi_n_times(n)
  hi_array = []
  n.times { hi_array.push("hi") }
  hi_array
end
```

---

## Cases where algorithm efficiency matters:

+ Interviews
+ Building large scalable applications
+ Building apps for limited hardware
+ Fixing bottlenecks in performance

---

## Big O Pitfalls

+ Beware of premature optimization
+ Tradeoffs of time/space optimization 
    + Optimizing for time and space can negatively impact readability or coding time 
    + Efficiency of program execution vs. efficiency of developer time

---

## Projects Today

[Execution Time Differences](https://github.com/appacademy/curriculum/tree/master/ruby/projects/execution_time_differences)

[Anagrams](https://github.com/appacademy/curriculum/tree/master/ruby/projects/anagrams)

[Two Sum](https://github.com/appacademy/curriculum/tree/master/ruby/projects/two_sum)

[Max Windowed Range](https://github.com/appacademy/curriculum/tree/master/ruby/projects/max_windowed_range)

---

## Thank you!

---