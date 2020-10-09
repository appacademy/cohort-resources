# W3D5 ADTs

---

## Learning Goals

+ Understand the basics of data structures and in what situations certain data structures might be preferred
+ Know what a `stack`, `queue`, and `tree` are, and basic API to implement them
+ Know how to implement `BFS` and `DFS` for your tree and understand the differences between them

---

## Lecture Agenda

* ADTs VS. Data Structures
* Stacks
* Queues
* Trees
* Algorithms and Methods (DFS / BFS)

---

## Abstract Data Types vs. Data Structures

`Abstract Data Type`: Defines a set of properties and interactions with some information (i.e. the idea/instructions)

`Data Structure`: Actual implementation of the concept, with all of the properties (i.e. the actual implementation)

---

## Passenger Car "ADT"

* Allow passengers to enter and exit vehicle
* Accelerate
* Decelerate
* Direct (Steer)

---

## Passenger Car "Data Structure"

---

![FLinstones](https://camo.githubusercontent.com/a07a2c05b19537cb2a5a13c70e2e5eaa07278c66/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f3130684443566f376c54516c496b2f67697068792e676966)

---

![Birdie](https://camo.githubusercontent.com/86216f7dd7b5ba3b45598686383c65458393aba4/68747470733a2f2f686970732e686561727374617070732e636f6d2f726f612e682d63646e2e636f2f6173736574732f31362f30322f313435323738373834382d72656c69616e742e676966)

---

![Camry](https://mycarboard.com/wp-content/uploads/2017/12/AwesomeAmazingGreat-1999-Toyota-Camry-LE-87K-MILES-4-CYLINDERS-1-OWNER-NO-RESERVE-GETS-GREAT-GAS-MILEAGE-CLEAN-RUNS-DRIVES-GREAT-2017-20182017-201820172018.jpg)

---

![Tesla](https://www.cstatic-images.com/car-pictures/xl/usc70tsc024b021001.png)

---

## Tradeoffs!

---


## What data structure could we use to implement these ADTs?

>>>> * List

>>>> * Dictionary

---

## Example: Stacks

![StackCat](https://camo.githubusercontent.com/08034c7ae610ca661572cf1458e3e36aa5ee5e0d/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f336f68687765526773394f5a6c644c7761732f67697068792e676966)

---

## Stack (ADT)

Overview: Sequential collection of objects. All operations take place at one end (LIFO).

---


### Stack (ADT) -- Sequential, LIFO

**Properties**:

* `push(el)`:  Add element to top of stack
* `pop`: Remove and return element from top of stack
* `peek`:  Return top element of the stack, without removing it
* `size`: Return the current size of the stack
* `empty?`: Return true or false depending on whether or not stack is empty

---

## Code Review of Stack

---

## Queue (ADT)

Overview: Sequential collection of objects. Removal at one end, insertion at the other (FIFO).

---

### Queue (ADT) -- Sequential, FIFO

**Properties:**

* `enqueue(el)`:  Add element to back of queue
* `dequeue`: Remove and return element from front of queue
* `show`:  Show the entire queue (but don't return it! Why wouldn't we want to return it?)
* `size`: Return the current size of the queue
* `empty?`: Return true or false depending on whether or not queue is empty

---

## Code Review of Queue

---

## Lecture Agenda

* ~~ADT’s VS. Data Structures~~
* ~~Stacks~~
* ~~Queues~~
* Trees
* Algorithms and Methods (DFS / BFS)

---

## Trees

---

## What makes up a Tree ADT

* Composed of nodes that store information
* Each node has (optionally) one parent and (optionally) many children
* Depth

---

## "Do we need a `Tree` class?"

---

## Node

+ The basic unit comprising a tree
+ Typically holds a value and references to its children
+ The root node _is_ the tree (and every other node is a sub-tree).
+ **internal nodes** vs. **leaf nodes**

---

## Is the root node a leaf node or an internal node?

---

Which nodes are leaves?
Which nodes are internal?

![binary-tree](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/tree1.bmp)

---

## A simple Node implementation

---

## Algorithms & Methods

---

`Algorithm`: General approach and process to problem solving operations (ex. Binary Search)

`Function/Method`: Concrete implementation, in a specific language, of an algorithm (Binary Search in Ruby)

---

## Tree Traversal Algorithms (Search)

* Breadth-first Search (BFS)
* Depth-first Search (DFS)

---

## [Kahoot!](https://create.kahoot.it/v2/details/e33ec04c-b289-4d09-8cc7-6a55758aadcd)

---

# Thank You 👋