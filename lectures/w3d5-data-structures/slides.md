# W3D5
## Data Structures

---

## Learning Goals
+ Understand the basics of data structures and in what situations certain data structures might be preferred
+ Know what a `stack`, `queue`, and `tree` are, and the basic API to implement them
+ Know how to implement `BFS` and `DFS` for your tree and understand the differences between them


---

## Lecture Agenda
* ADTs VS. Data Structures
* Stacks
* Queues
* Trees
* Algorithms and Methods (DFS / BFS)

---

## Before we begin
#### Assessment Ruby 1
![Fear](https://camo.githubusercontent.com/a31327808b40416b2a87bdbe909bf703984274a3/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f316870526b564d315851674f512f67697068792e676966)

---

![rambo](https://media0.giphy.com/media/11ISwbgCxEzMyY/giphy.gif)

---

## Abstract Data Types vs. Data Structures
`Abstract Data Type`: Defines a set of properties and interactions with some information (i.e. the blueprint)
`Data Structure`: Actual implementation of the concept, with all of the properties
(i.e. the building itself)
Note: Abstract data types are like a black box - they are implementation agnostic. You can understand what the output will be based on given inputs, but you won't know how it is happening under the hood. They give you a pre-defined API or set of operations that the object will need to have the ability to perform, but don't specify how those operations must be done (e.g. how the data will be organized in memory and what algorithms will be used)

---

## Passenger Car "ADT"
* Allow passengers to enter and exit vehicle
* Accelerate
* Decelerate
* Direct

---

## Passenger Car "Data Structure"

---

![Camry](https://mycarboard.com/wp-content/uploads/2017/12/AwesomeAmazingGreat-1999-Toyota-Camry-LE-87K-MILES-4-CYLINDERS-1-OWNER-NO-RESERVE-GETS-GREAT-GAS-MILEAGE-CLEAN-RUNS-DRIVES-GREAT-2017-20182017-201820172018.jpg)
Note: but who says it has to be gas powered?

---

![Tesla](https://www.cstatic-images.com/car-pictures/xl/usc70tsc024b021001.png)

---

![Flintstone](https://media.giphy.com/media/10hDCVo7lTQlIk/giphy.gif)

---

![Reliant Robin](https://hips.hearstapps.com/roa.h-cdn.co/assets/16/02/1452787848-reliant.gif)

---

## Tradeoffs!
Note: ADTs describe the rules (behavior) and how you can use it (API). It is up to the implementor to decide how to go about this, and there are always tradeoffs between different implementations.

---

## What data structure could we use to implement these ADTs?
* List
* Dictionary

---

## Example: Stacks
![stacks](https://camo.githubusercontent.com/08034c7ae610ca661572cf1458e3e36aa5ee5e0d/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f336f68687765526773394f5a6c644c7761732f67697068792e676966)

---

## Stack (ADT)
Sequential collection of objects. All operations take place at one end (LIFO).

---

### Stack (ADT) -- Sequential, LIFO
**Properties**:
* `push(el)`:  Add element to top of stack
* `pop`: Remove and return element from top of stack
* `peek`:  Return top element of the stack, without removing it
* `size`: Return the current size of the stack
* `empty?`: Return true or false depending on whether or not stack is empty

---

## Stack Code Review

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

## Queue Code Review

---

# 10 minute break

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

## "Do we need a ‘Tree’ class?"
Note: No (generally). As long as you have a reference to the root node you have access to the entire "tree" through the root node (because of its children references, and its children's children references, etc.).

---

## Node
+ The basic unit comprising a tree
+ Typically holds a value and references to its children
+ The root node _is_ the tree (and every other node is a sub-tree).
+ **internal nodes** vs. **leaf nodes**

Note: When I say the root node is the tree, what I really mean is that via the root node, you have access to the rest of the tree. Rather than needing to store a reference to a 'tree' object, you simply need to store a reference to the root node. In this same sense every internal node is a sub-tree. It is important to explain this, as the bullet point by itself may be misguiding.
Internal nodes: nodes with children
Leaf nodes: nodes without children

---

Which nodes are leaves?
Which nodes are internal?
![binary-tree](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/tree1.bmp)

---

##  A simple Node implementation

---

## Algorithms & Methods

---

`Algorithm`: General approach and process to problem solving operations (ex. Binary Search)
`Function/Method`: Concrete implementation, in a specific language, of an algorithm (Binary Search in Ruby)
Note: Analagous to an ADT vs. Data Structure

---

## Tree Traversal Algorithms (Search)
* Breadth-first Search (BFS)
* Depth-first Search (DFS)

**When to use BFS vs. DFS**
* Use **BFS** when:
  * The solution is likely high in the tree
  * You want to find the *shortest* path to a node
  * Your tree isn't super wide (BFS can be very memory intensive since it uses a queue with a lot of nodes)
* Use **DFS** when:
  * If the solution is likely to be deep in the tree
  * You want to exhaust all possibilities and figure out which one is best.
  * You have a wide tree and BFS would be too memory-intensive
Sources:
* https://www.quora.com/When-should-we-use-BFS-instead-of-DFS-and-vice-versa
* https://stackoverflow.com/questions/3332947/when-is-it-practical-to-use-depth-first-search-dfs-vs-breadth-first-search-bf
---

## [Kahoot!](https://create.kahoot.it/create#/edit/e33ec04c-b289-4d09-8cc7-6a55758aadcd/done)

---
# Thank You 👋