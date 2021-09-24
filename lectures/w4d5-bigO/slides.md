# W4D5
#### Analysis of Algorithms

---

### Agenda

* Big-O Notation 
* Today's Projects

---

# Big-O

What is it? Why do we care?

Note:


Ask what factors slow down user experience

---

## Things to Remember

>>1. Many factors affect the time it takes for a function to run: the speed of the processor, what else the computer is running, etc. 
>>>>>    - Big-O notation is only concerned with performance relative to the _input size_.

>>2. An algorithm may have steps that seem expensive when `n` is small but are eclipsed by other steps as `n` approaches infinity. We only care about the stuff that grows the fastest as the input grows.


 

---

## More Things to Remember

>>* Big-O notation describes an algorithm's *worst* case

>>* Big-O talks about *orders*, not about specifics (i.e. O(2n) and O(100n) are really both just O(n))

>>* We can measure both time and space complexity, but are mostly concerned with time (memory is cheap and abundant)

>>* Other notable classifications include Big-Ө and Big-Ω

Note:
Big Theta == average/accurate case
Big Omega == best case
Talk about scaleability

---

### Asymptotes

>>>* An asymptote of a curve is a line such that the distance between the curve and the line approaches zero as the input grows to infinity.

---

## Asymptotic Behavior

>>* The _asymptotic behaviour_ of a function refers to its rate of growth as its input size approaches infinity

>>* Allows us to focus on the big picture and compare algorithms from a high level

>>* Big-O notation is a tool for understanding asymptotic behaviour

---

![Complexity Chart](http://bigocheatsheet.com/img/big-o-complexity-chart.png "Complexity Chart")

Source: **bigocheatsheet.com**

---

### Questions?

---

### Some examples

* Sort 100,000,000 people by social security number

* Is the number 6,700,417 prime?

* Search the entire internet for "cat at dinner table meme" and rank the results by relevance

---

## We don't care about these

- constant coefficients
- all but the largest growing term (the term which _dominates_)

---

## Examples

`12n^3 + 3n^2 + 10`

  becomes `O(n^3)`

`5*2^n + 3n!`

  becomes `O(n!)`

---
### Counting Operations

![math-gif](https://media.giphy.com/media/3o6Yg4GUVgIUg3bf7W/giphy.gif)

Where do these mathy-looking functions come from?

* They represent the number of operations that an algorithm takes based on an input size of `n`
* We find them by looking at the way our function is structured

---

### Rule 1: Single Lines Add

>
```ruby
def adding_operations
  puts "hello" # 1 operation
  puts "world" # 1 operation
  puts "!"
  # total = 1 + 1 + 1= 3operations
end
```
---

### Rule 2: Loops Multiply 

>
```ruby
def multiplying_operations
  5.times do # code is in this loop will execute 5 times
    puts "hello world!"  # 1 operation
  end
  # total = 5 * 1 = 5 operations
end
```

---

### Rule 1 and Rule 2 Together 

>
```ruby
def adding_and_multiplying
  puts "hello" # 1 operation
  (0...10).each do |number|  # code is in this loop will execute 10 times
    puts "hi" # 1 operation
    puts "number" # 1 operation
  end
  # total = 1 + (10 * (1 + 1)) = 1 + (10 * 2) = 1 + 20 = 21 operations
end

```

---

### Questions?

---

## Big-O hierarchy

- Constant `(1)`
- Logarithmic `(log n)`
- Linear `(n)`
- Linearithmic `(n log n)`
- Polynomial/Quadratic `(n^2)`
- Exponential `(2^n)`
- Factorial `(n!)`

---

![Complexity Chart](http://bigocheatsheet.com/img/big-o-complexity-chart.png "Complexity Chart")

Source: **bigocheatsheet.com**

---
### What is the time complexity?

>

```ruby
def first_thing(array)
  array.first
end
```

```ruby
def three_hundred_thousand_puts(name)
  300000.times { puts "hello, #{name}" }
end
```
Note: 
### Constant Time
O(1)

---

### What is the time complexity?

>
```ruby
def print_all(array)
  array.each { |el| puts el }
end
```

```ruby
def most_common_char(word)
  count = Hash.new(0)
  word.chars.each { |char| count[char] += 1 }
  count.max_by { |ch, n| n }
end
```

Note:
### Linear Time
#### The second example is O(2n)


Comment that even though the second example
loops through the chars twice, it is still only linear time
because the loops aren't nested, so they add rather than multiplying

---
### What is the time complexity?

>

```ruby
class Array
  def include?(value)
    self.each do |el|
       return true if (el == value)
    end
    
    false
  end
end
```
Note:
### O(n) Linear Time

Even though this example may return immediately, it is still linear time because asymptotic analysis is concerned with the _worst_ case.

---

### What is the time complexity?

>

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

Note:

### O(log n) Logarithmic


This implementation of bsearch uses indices to track what region is
being searched.
In the recursion solutions, we use `take` and `drop`, which are O(n),
making that solution O(n log n), not O(log n).
This is how Ruby implements its binary_search.

On this slide, explain that we might have to keep dividing our
search space by 2 until we reach a single element.
n /2 /2 ... /2 can be represented as n / (2^k).
At most, we have: n / (2^k) = 1

So k = log(n) recursive calls at most


---
### What is the time complexity?

>
```ruby
def merge_sort
  return self if count < 2
  middle = count / 2

  left, right = self.take(middle), self.drop(middle)
  sorted_left, sorted_right = left.merge_sort, right.merge_sort

  merge(sorted_left, sorted_right)
end

def merge(left, right)
  merged_array = []
  until left.empty? || right.empty?
    merged_array << ((left.first < right.first) ? left.shift : right.shift)
  end
  merged_array + left + right
end
```

Note:
### O(n * log n) Linearithmic / Log-linear

---

### Linearithmic / Log-linear Diagram
![Merge sort](https://i.stack.imgur.com/lF95K.png "Merge Sort")

---

### Stack Trace diagram

![Merge_sort_stack_trace](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/ruby/w4d5-big-o/assets/merge_sort_stack.png?token=AK3MF7GISK6C7KAQSRUYQLLBK4QB6)


---
### What is the time complexity?

>
```ruby
def all_pair_sums(array)
  sums = []

  array.each do |el1| # n
    array.each do |el2| 
      sums << el1 + el2
    end
  end

  sums
end
```

Note:
### Quadratic
#### O(n^2)


---
### What is the time complexity?

>
```ruby
class Array
  def subsets
    return [[]] if empty?
    subs = take(count - 1).subsets
    subs.concat(subs.map { |sub| sub + [last] })
  end
end
```

Note: 
### Exponential
O(2^n)
Every time we add a new number to the input, we must include all previous subsets, plus those same subsets with the new number added. Essentially, _we are doubling our work_ with every increase in the input size.

---
### What is the time complexity?

>
```ruby
def permutations(array)
  return [array] if array.length <= 1

  first = array.shift

  perms = permutations(array)
  total = []

  perms.each do |perm|
    (0..perm.length).each do |i|
      total << perm[0 ... i] + [first] + perm[i .. -1]
    end
  end
  total
end
```
Note: 
### Factorial
O(n!)... or O(n * n!)

---

## Benchmarking demo

Note:
Before lecture, take a quick look at the Benchmark module:
http://ruby-doc.org/stdlib-2.4.1/libdoc/benchmark/rdoc/Benchmark.html

---

#### Cases where algorithm efficiency matters:

* Interviews
* Building large scalable applications
* Building apps for limited hardware
* Fixing bottlenecks in performance

---
# Remember

#### 9 times out of 10, *readable* code is much more important than efficient code

>>>>>Efficiency of program execution time 
  
>>>>>>>>>>>VS
  
>>>>>>>Efficiency of developer time
  
"If you optimize 100% of your code, you're wasting 90% of your time" (**premature optimization**)

---

### Final Questions?

---

### Projects

[Execution Time Differences](https://github.com/appacademy/curriculum/tree/master/ruby/projects/execution_time_differences)

[Anagrams](https://github.com/appacademy/curriculum/tree/master/ruby/projects/anagrams)

[Two Sum](https://github.com/appacademy/curriculum/tree/master/ruby/projects/two_sum)

[Max Windowed Range](https://github.com/appacademy/curriculum/tree/master/ruby/projects/max_windowed_range)
