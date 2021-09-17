
# W3D5
## Data Structures

---
## Learning Goals
+ Understand the basics of data structures and in what situations certain data structures might be preferred
+ Know what a `stack`, `queue`, and `tree` are, and the basic API to implement them
+ Know how to implement `BFS` and `DFS` for your tree and understand the differences between them
Note: Ask them if they know what an API is, and if not explain to them. I like using examples of other interfaces that they are familiar with, first a GUI (graphical user interface, i.e. any website they've ever been on and their computer desktop itself). Then a CLI, which they have now started getting comfortable using and just learned the Git CLI the previous day, and finally an API, something that we the application programmer can interface with in our application by calling methods that we expect to behave a certain way. API is a broad term, the Ruby language itself is an API (the docs say API docs). The public methods we write on a class *are* that class' API.
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
![aloha-friday](https://media.giphy.com/media/9r5198quTdTVOkLN4p/giphy.gif)
---
## Abstract Data Types vs. Data Structures
`Abstract Data Type`: Defines a set of properties and interactions with some information (i.e. the blueprint)
`Data Structure`: Actual implementation of the concept, with all of the properties
(i.e. the building itself)

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
Note: No (generally). As long as you have a reference to the root node you have access to the entire "tree" through the root node (because of its children references, and its children's children references, etc.). Sometimes a tree class might need to be implemented to manage the root (e.g. BTrees) but there's no need to go that deep unless a student asks.
---
## Node
+ The basic unit comprising a tree
+ Typically holds a value and references to its children
+ The root node _is_ the tree (and every other node is a sub-tree).
+ **internal nodes** vs. **leaf nodes**
Note: 
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
Note: Can use the iPad or whiteboard to demonstrate the two algorithms. Write both of them in Pseudo Code, and do an implementation of BFS using the queue built earlier in lecture! Draw a tree on the whiteboard (A binary tree with 3 levels should suffice) and create the tree using the node class you built. Test out your algo and see if you get the correct output! For DFS, write it in Pseudo Code, but tell them that they will get to actually implement it in the projects today.
**When to use BFS vs. DFS** (if they ask)
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
Note: There is a question on this quiz regarding DFS. The DFS is done in a preorder manner, which is in contrast to the DFS that Haseeb shows in the video they've seen the night before (his is postorder). It is, however, in line with the animation that is shown in one of the readings. The different types of DFS are based on at what point the root is searched/evaluated:
Preorder: Root -> Left Sub-Tree -> Right Sub-Tree
Inorder: Left Sub-Tree -> Root -> Right Sub-Tree
Postorder: Left Sub-Tree -> Right Sub-Tree -> Root
Keep in mind that DFS is recursive, and once the recursive call is made on a node, that node becomes the 'root' in the context of the recursive call. There is no need to delve into detail on the 3 different orders of tree traversal unless a student asks specifically about them.
---
# Thank You 👋
