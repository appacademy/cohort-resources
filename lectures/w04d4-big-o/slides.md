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
- *Demo:* OkCatnip
- Hierarchy of Big O Complexities
- *Demo:* Algorithms & Benchmarks
- When Does Complexity Matter?
- Kahoot!

---

## Motivations

- When inputs get very large, inefficient code can cause serious performance issues
- Big O provides a formalized way to measure how an algorithm's performance changes as input(s) grow larger
- Big O often comes up in interviews!

---

## What is Big O Analysis?

- Analyzes how much the space and time requirements of an algorithm grow relative to its input as the input grows towards infinity
- Breaks an algorithm down into basic, constant-time operations (time complexity) or allocated slots in memory (space complexity)
- **Worst Case** analysis (usually)
- Classifies algorithms into orders / a hierarchy
- Isn't concerned with efficiency differences within the same order

---

![Complexity Chart](https://www.bigocheatsheet.com/img/big-o-complexity-chart.png)

---

## Situations to consider

- Sort 100,000,000 people by social security number
- Is 6,700,417 prime?
- Search the entire internet for 'cat pictures' and rank by relevance

---

## OkCatnip Demo

---

## Big O Complexities

- Constant `O(1)`
- Logarithmic `O(log n)`
- Linear `O(n)`
- Linearithmic (aka loglinear) `O(n log n)`
- Polynomial/Quadratic `O(n^2)`
- Exponential `O(2^n)`
- Factorial `O(n!)`

---

![Complexity Chart](https://www.bigocheatsheet.com/img/big-o-complexity-chart.png)

---

## Asymptotic Analysis

- Looks at the curve of a function as its input approaches infinity
- Finds a simpler function that has approximately the same big-picture curve
  - This simpler function, when multiplied by some constant, acts as an upper bound for the given function
- E.g. `x^2 - x` and `x^2 + 2` are asymptotic to `x^2`. 

---

## How to Perform Asymptotic Analysis

- Simplify / add like terms
- Drop constants & coefficients
- Ignore all but the largest growing (or *"dominating"*) term

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

## Algorithms 

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
