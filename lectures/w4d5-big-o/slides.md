# W4D5

## Big O Analysis

---

## Learning Objectives

- Explain Big O analysis and how it's measured
- Analyze the time and space complexity of a method
- List and compare orders of Big O
- Identify the time complexity of common algorithms 

---

## Agenda
- Overview of Big O
- Hierarchy of Big O Complexities
- *Demo:* Benchmarks
- When Does Complexity Matter?
- Kahoot!

---

# Big-O

What is it? Why do we care?

---

## Motivations

- When inputs get very large, inefficient code can cause serious performance issues
- Big O provides a formalized way to measure how an algorithm's performance changes as input(s) grow larger
- Big O often comes up in interviews!

---
# Big-O

* A mathematical notation that shows how efficient an algorithm is in it's worst case as 
	its input increases
  
* We measure the input with the variable 'n' (n = input) and see how the algorithm handles n
	(iterating through once, multiple times, etc.)

---

![Complexity Chart](http://bigocheatsheet.com/img/big-o-complexity-chart.png "Complexity Chart")

Source: **bigocheatsheet.com**

---


## Benchmarking demo

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

---

![Complexity Chart](https://www.bigocheatsheet.com/img/big-o-complexity-chart.png)

---


### Asymptotes

>>>* An asymptote of a curve is a line such that the distance between the curve and the line approaches zero as the input grows to infinity.

---

## Asymptotic Behavior

>>* The _asymptotic behaviour_ of a function refers to its rate of growth as its input size approaches infinity

>>* Allows us to focus on the big picture and compare algorithms from a high level

>>* Big-O notation is a tool for understanding asymptotic behaviour


---

### Questions?

---

## Situations to consider

- Sort 100,000,000 people by social security number
- Is 6,700,417 prime?
- Search the entire internet for 'cat pictures' and rank by relevance

---

## We don't care about these

- constant coefficients
- all but the largest growing term (the term which _dominates_)

---

## Examples

- `4n^3 + 12n^2 + 10`
    - Becomes `O(n^3)`
- `5^n + 3n!`
    - Becomes `O(n!)`

Note:
- `n = 5` => 4n^3 = 500; 12n^2 = 300
- `n = 100` => 4n^3 = 4,000,000; 12n^2 = 120,000
- `n = 5` => 5^n = 3125; 3n! = 360
- `n = 20` => 5^n = 95 trillion; 3n! = 7.3 quintillion

---

## More Examples

- `n * n^3 + 3`
    - Becomes ?
- `n^2 + log(n) + 20n`
    - Becomes ?

---

## Big O Hierarchy

- Constant `O(1)` **<-- fastest** 
- Logarithmic `O(log n)`
- Linear `O(n)`
- Linearithmic (aka loglinear) `O(n log n)`
- Polynomial/Quadratic `O(n^2)`
- Exponential `O(2^n)`
- Factorial `O(n!)` **<-- slowest**

---

## Determining Big O Time Complexity

1. Count the number of operations the algorithm will perform as a function of its input size, in the worst case scenario
    - For non-recursive functions, usually best to go line by line
    - Assignment, comparisons, math, etc are constant operations 
    - Iterations are linear; nested iterations are polynomial 
        - rule of thumb: `n^(levels of nesting)`
    - *Note:* you can simplify & drop constants as you go

2. Perform asymptotic analysis

---

## How to Perform Asymptotic Analysis

- Simplify fractions and add like terms
- Drop constants & coefficients
- Ignore all but the largest growing (or *"dominating"*) term

---

### Rule 1: Single Lines Add

>
```ruby
def adding_operations
  puts "hello" # 1 operation
  puts "world" # 1 operation
  puts "!" # 1 operation
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
  counts = Hash.new(0)
  chars = word.split("")
  chars.each { |char| counts[char] += 1 }
  count.max_by { |key, value| value }
end
```

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

---

### Some notes on space complexity
- Refers to _additional_ memory used (new data structures)
- We can also use Big-O notation
  - Describes how much additional space is needed with respect to `n`
- Space is in the form of RAM and it's relatively abundant

---

## When it matters

- Interviews
- Building large scalable applications
- Building apps for limited hardware
- Fixing bottlenecks in performance

---

### 9 times out of 10, *readable* code is much more important than efficient code

>>>>>>>>Efficiency of program execution time 
  
>>>>>>>>>>>>>>>>VS
  
>>>>>>>>Efficiency of developer time
  
### "If you optimize 100% of your code, you're wasting 90% of your time"

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=e915778d-0890-4f75-987a-e349c6e9fa6d)