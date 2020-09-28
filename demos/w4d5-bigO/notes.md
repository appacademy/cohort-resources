### Suggestions for Lecturers

I have found the following demos / topics useful:
  * Draw the graph that compares asymptotic growth for O(1), O(n), O(n2)... O(n!), or show it on a web page. There are many online graphing tool. A link that should work is included in the notes with the corresponding slide
  * Draw the recursion tree for binary search & merge sort to show why one is O(log n) and one is O(n log n). Here is an explanation for why the hight of both trees is log n, in case the students ask. I wouldn't go into it otherwise.
    * The hight of the tree is the number of times we have to divide `n` by `2` before we get to `1`. This is `log n` (actually, `floor(log n)`, but that doesn't really matter). Why is that true? Suppose `k` is the number we are looking for. Then
    ```
    n/2/2/.../2 = 1
    ```
    where we divide by `2` `k` times. This is the same as saying `n/(2^k) = 1`. Thus
    `n = 2^k`. Taking `log`s of both sides we get `k = log n`, so we are done.
  * It's nice to explain why there are `2^n` subsets of an array of `n` elements. The reason is simple. To produce an arbitrary subset, we go through the array, and for each element we decide whether or not to include that element in the subset. Each choice adds a factor of two (include or don't) and we have `n` choices, so there are `2^n` subsets.

### Solutions prep

**Expect questions on:**
+ module PokerHands: self.included(klass)
  + When you `include` PokerHands in any klass, you call `PokerHands.included(klass)`
  + We overrode `Module::included` within PokerHands so that whenever we include PokerHands, we also include TieBreaker. This lessens chance for error of someone including PokerHands without including TieBreaker in a class.
  + You can't include another module inside a module.
  + `included` is a method that is run each time the module is included in a class. It receives the class as an argument. We call it `klass` because `class` is a reserved word
+ Overriding `<=>` in order to sort cards
+ Q from video with XOR
  + The problem from the video about space complexity uses XOR. You could have used addition/subtraction or multiplication/division for a similar effect, but adding or multiplying a billion numbers creates a GIGANTIC number. Using XOR on a billion numbers will not result in a gigantic number.

**Point out:**
+ Card doubles: you should use card doubles...strictly speaking...but we used real cards because they're so lightweight.

### Big O Notation - Asymptotic - cares as n approaches infinity

+ expresses how long an algorithm takes to run
+ characterize a function by its growth rate
+ for comparing efficiency
+ how quickly execution time grows relative to the input, as the input increases
+ many factors can affect actual execution time, so we instead talk about growth
+ as _n_ gets huge, other factors don't matter in comparison, so we can ignore
+ `O(1)` - constant time, doesn't change regardless of input size
+ `O(n)` - linear time, have to do some work n times, each loop
+ `O(n^2)` - quadratic time, each within each
+ `O(log(n))` - logarithmic time, binary search, levels off
+ `n` could be an array or a number of times to do something
+ we can ignore the constants, if something happens `2n` times, it's still `O(n)`
+ we can also ignore the less significant terms `n^3 + 5n^2` == `n^3`
+ talking about worst case, but best case can also be expressed
+ space complexity: how does the memory we allocate in regards to `n`
+ problems: ignores constants which can sometimes really matter
+ If f(x) is a sum of several terms, the one with the largest growth rate is kept, and all others omitted.
+ If f(x) is a product of several factors, any constants (terms in the product that do not depend on x) are omitted.

### Stack Overflow Explanation

+ Big-O notation is a relative representation of the complexity of an algorithm.
+ addition by hand - linear time add each digit one by one
+ multiplication by hand - quadratic time

### Stacks and Queues

+ queue - first in first out, `enqueue` and `dequeue`
+ stack - first in last out, `push` and `pop`

### Additional Notes

+ Anthony mentioned that in their video lectures they sometimes said "bit" when they meant "byte" and/or vice versa - potentially worth addressing in lecture

+ Have some quiz-like questions ready, like reducing algebraic equations to their BigO and finding the time complexity of some simple methods/scenarios.
  Ex: Big O of...?
  1) n^2 + 1  => n^2
  2) n * n^3 => n^4
  3) n + log(n) => n
  4) n! / ((n - 2)! * 2!) => n^2

+ BigO example
  + If function is n^2 + log(n), the n^2 bit overpowers the log(n) bit
  + Cat psychologist example (see previous lectures..have skeleton ready if you code)
  + Nested loops:
    + If the length of both loops depends on n, you have O(n^2)
    + Even small optimization of n^2/2 => O(n^2)
      + Doesn't change big O, but still worth doing. If my page load goes from 5 seconds to 2.5 seconds, I'm happy :)

+ Bsearch/Merge sort
  + bsearch review -- sets students up for merge sort. Can go quickly if students are comfortable
    + divide the array log(n) times
    + with each array, you just check the middle element => CONSTANT TIME
    + log(n) * (1) => O(log(n))
  + merge sort
    + divide the array log(n) times
    + with each level, you have to merge, i.e. look at every single element in the arrays => LINEAR TIME
    + log(n) * (n) => O(nlog(n))
