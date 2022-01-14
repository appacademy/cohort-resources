# W3D5: ADTs and Trees

---

## Learning Goals

By the end of today, you'll be able to:

+ Explain the difference between Abstract Data Types & Data Structures
+ Break down an algorithm using psuedo-code and visuals
+ Describe and implement the `Stack`, `Queue`, and `Tree` ADTs, & the `BFS` and `DFS` search algorithms

---

## Lecture Agenda

* ADTs vs Data Structures
* Stacks
* Queues
* Trees
* DFS & BFS

---

## Abstract Data Types vs. Data Structures

`Abstract Data Type`: Defines the essential properties of a data type, and the set of operations for interacting with that data 
  * **analogy** - a poll: everyone gets 1 vote; whoever gets the most votes wins

`Data Structure`: The actual implementation of a data type: how its actually stored and mutated under the hood
  * **analogy** - slips of paper with votes on them, the jar where everyone puts their votes, etc.

---

## Passenger Car "ADT"

* Enter and exit
* Lock and unlock
* Accelerate & decelerate
* Turn

---

## Passenger Car "Data Structure"

---

![Camry](https://mycarboard.com/wp-content/uploads/2017/12/AwesomeAmazingGreat-1999-Toyota-Camry-LE-87K-MILES-4-CYLINDERS-1-OWNER-NO-RESERVE-GETS-GREAT-GAS-MILEAGE-CLEAN-RUNS-DRIVES-GREAT-2017-20182017-201820172018.jpg)

---

![Tesla](https://www.cstatic-images.com/car-pictures/xl/usc70tsc024b021001.png)

---

![Flintstone](https://media.giphy.com/media/10hDCVo7lTQlIk/giphy.gif)

---

## Tradeoffs!

---

## What is an API?

---

## API: Application Programming Interface

* How one application talks to another application
  * For *classes*: public methods
  * For *libraries*: all the classes, functions, and methods publicly available to users of the library
  * For *web services*: URLs where you can make requests to get or update data
* API Specification: description of what should be part of an API, without giving the implementation details

---

## What data structure(s) could we use to implement these ADTs?

* List
* Dictionary

---

## Example: Stacks

![stacks](https://camo.githubusercontent.com/08034c7ae610ca661572cf1458e3e36aa5ee5e0d/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f336f68687765526773394f5a6c644c7761732f67697068792e676966)

---

## Stack (ADT)

Overview: Sequential collection of objects. All operations take place at one end (LIFO).

---

![stack of plates](https://images.unsplash.com/photo-1620818309896-df4306ec95d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2848&q=80)

---

![carts](https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80)

---

### Stack (ADT) -- Sequential, LIFO

**Operations**:

* `push(el)`:  Add element to top of stack
* `pop`: Remove and return element from top of stack
* `peek`:  Return top element of the stack, without removing it
* `size`: Return the current size of the stack
* `empty?`: Return true or false depending on whether or not stack is empty

---

## Code Demo: Stack

---

## Queue (ADT)

Overview: Sequential collection of objects. Removal at one end, insertion at the other (FIFO).

---

![people in line](https://images.unsplash.com/photo-1584614207146-a64524f5806a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80)

---

### Queue (ADT) -- Sequential, FIFO

**Operations:**

* `enqueue(el)`:  Add element to back of queue
* `dequeue`: Remove and return element from front of queue
* `show`:  Show the entire queue (read-only)
* `size`: Return the current size of the queue
* `empty?`: Return true or false depending on whether or not queue is empty

---

## Code Demo: Queue

---

# Break

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

## Tree ADT

* Composed of nodes that store information
* Each node has 0 or 1 parent, and 0+ children
* Depth: how many layers are in the tree

---

![tree](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tree_%28computer_science%29.svg/1280px-Tree_%28computer_science%29.svg.png)

---

## Node

+ The basic unit comprising a tree
+ Typically holds:
  - a value
  - references to its children
  - (optionally) a reference to its parent

---

## "Do we need a `Tree` class?"

---

## Root Node
+ Root node: node at top of tree (no parent)
+ Every other node in a tree is a descendent of the root node 
+ Thus, the root node holds direct or indirect reference to every node in tree  
  - generic tree operations, such as search, can be defined on Node
+ Each node is the root node of its own subtree

---

![tree](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tree_%28computer_science%29.svg/1280px-Tree_%28computer_science%29.svg.png)

---

## Internal Nodes vs Leaf Nodes

+ Internal node: at least 1 child 
+ Leaf node: no children

---

## Is the root node a leaf node or an internal node?

---

Which nodes are leaves?
Which nodes are internal?

![tree](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tree_%28computer_science%29.svg/1280px-Tree_%28computer_science%29.svg.png)


---

## Code Demo: Node

---

## Algorithms & Methods

`Algorithm`: A particular approach or process for solving a problem (e.g. binary search)

`Function/Method`: Concrete implementation, in a specific language, of an algorithm (`Array#bsearch`)

---

## Tree Traversal Algorithms (Search)

* Breadth-first Search (BFS)
* Depth-first Search (DFS)

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=e33ec04c-b289-4d09-8cc7-6a55758aadcd)

---

# Thank You 👋
