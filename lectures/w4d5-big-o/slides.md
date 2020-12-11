# W4D5
#### Analysis of Algorithms

---

### Learning Objectives

- Develop a process for figuring out the Big-O of an algorithm
- Know the relative speeds of different time complexity orders
- Develop vocabylary to talk about time and space complexity

---

### Lecture Outline

* Big-O Notation 
* Relative order of time complexities
* Lots of examples
* Benchmark demo
* A note on Space complexity
* Kahoot!

---

# Big-O

What is it? Why do we care?

Note:
Talk about this

As our input sizes grow, we can begin having performace issues.  As programmers we want to be able to optimize the things that we _can_ control - such as how our algorithm performs. 

Imagine the job you'll get after graduation. If you're working at a facebook or google, you could very feasibly be working on a feature with really large amounts of data.  We don't want the user to experience any slow performance that would drive them away from our site.  So we need to make sure we can optimize in those situations.

COMMON NEW PROGRAMMER SYNDROME - unecessarily optimizing!!
We don't need to make the most efficient solution if we don't already have a problem.  Can easily waste huge amounts of time doing unecessary optimizations.  We want to create solutions and optimize when we have a problem!

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

### Asymptotes

>>>* An asymptote of a curve is a line such that the distance between the curve and the line approaches zero as the input size grows to infinity.

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

* Search the entire internet for "cat pictures" and rank the results by relevance :)

Note: Point out, it's easy to implement a solution to any of these problems that would take hundreds of years. Using clever, or really just thoughtful, algorithms and data structures, it can take seconds. This also helps the students see why Big O matters even when we ignore constants. A constant multiple of 20 minutes is 40 mintues, or maybe 60. Switching from quicksort to bubble sort can take you from 20 minutes to 200 years.

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
  count.max_by { |_, n| n }
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
      if (el == value) return true
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
### What is the time complexity?

>
```ruby
def all_pair_sums(array)
  sums = []

  array.each do |el1|
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
* Quicksort (yes, really)
* Bubble Sort

Technically Quicksort is worst case: quadratic, but it almost always runs in linearithmic time. That's why colloquially people often say it's O(n log n), even though technically it's O(n^2)

Note: (again)
A common question at this point is "why use quick sort vs. merge sort?" The short answer is, Quicksort is usually faster but more variable in terms of performance, while merge sort is consistent. In addition, merge sort is better when you are in a parallel computing or asynchronous environment, due to its recursive nature.

---
### What is the time complexity?

>
```ruby
def largest_pair_sum(array)
  sums = []

  array.each do |el1|
    array.each do |el2|
      sums << el1 + el2
    end
  end

  largest = sums.first
  sums.each do |sum|
    largest = sum if sum > largest
  end 

  largest
end
```

Note: 
Point out here the difference between adding and multiplying parts of the function. Also point out how the second part is actually n^2 too because sums n^2 in size.
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
O(k^n)
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

### Some notes on space complexity
- Refers to _additional_ memory used (new data structures)
- We can also use Big-O notation
  - Describes how much additional data with respect to n
- Space is in the form of RAM and it's relatively abundant

---

#### Cases where algorithm efficiency matters:

* Interviews
* Building large scalable applications
* Building apps for limited hardware
* Fixing bottlenecks in performance

---
# Remember

#### 9 times out of 10, *readable* code is much more important than efficient code

>>>>>>>>>Efficiency of program execution time 
  
>>>>>>>>>>>>>>>>VS
  
>>>>>>>>>>>Efficiency of developer time
  
>>"If you optimize 100% of your code, you're wasting 90% of your time" (**premature optimization**)

---

## [Kahoot!](https://create.kahoot.it/details/w4d5-big-o/e915778d-0890-4f75-987a-e349c6e9fa6d)

---

### Projects

[Execution Time Differences](https://github.com/appacademy/curriculum/tree/master/ruby/projects/execution_time_differences)

[Anagrams](https://github.com/appacademy/curriculum/tree/master/ruby/projects/anagrams)

[Two Sum](https://github.com/appacademy/curriculum/tree/master/ruby/projects/two_sum)

[Max Windowed Range](https://github.com/appacademy/curriculum/tree/master/ruby/projects/max_windowed_range)

Note: In a lot of ways, these questions are going to simulate an interview environment. We're taking you through a familiar process here: brute forcing an algorithm and then improving upon it until we reach an optimal solution. Don't give up too quickly - getting comfortable with struggling is the point of these exercises.