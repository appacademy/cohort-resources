# Recursion
# W3D3

```
#                eosRnuirc
#               eosR  nuirc
#              eo  sR nu  irc
#             e o s R n u i rc             
#             e o s R n u i r c
#             e o s R u n i cr
#              eo  Rs un  cri
#               Reso  curin
#                Recursion
```

Note: This shows the merge sort algorithm

---

## Learning Objectives

- Have a process for approaching recursive problems
- Understand what the inductive step is and how to build it
- Know the advantages of memoization 

---

## Lecture Outline

1. Recursion for Today
2. How to think about recursion
3. Movie theater example
4. Demos
5. Recursion reasoning tips
6. Kahoot!

---

## What you're _not_ going to do today...

* Use loops*
* Modify a method argument
* Use an optional, private argument
* Think in linear or procedural terms
* Be mentally refreshed at the end of the day (sorry)

*Recursion & iteration can be used together, so you will use loops but not to recurse.

---

## What you _are_ going to do today...

* Write methods that call themselves
* Break problems down incrementally
* "Trust" that your method already works for all previous cases
* Learn a new way of thinking and programming! &nbsp; :D

---

## What is a recursive function?

* Calls itself ("recurses")
* Solves a problem by breaking it down into smaller subproblems
* Has a _**base case**_ – simplest "already solved" condition
* Builds back up incrementally using an _**inductive step**_

---

## Inductive Step
How we use the return value of the previous step to determine the current result.

---

# Movie Theater Example
Imagine yourself in a dark movie theater. You want to know what row you in.

How might you find this out?

Iterative apprach:
Get up out of your chair, walk along the isle, and count how many rows to the front.

Recursive approach:
Ask the person in front of you and give them these instructions; 
1. "What row are you in?" (The recursive call)
2. "You can check by asking the person in front of you the same question and 
   adding 1 to their answer." (Inductive step)
3. "If you are in the front row, you are in row 1" (Base case)

Note: each person you go through is the running of a program or set of 
operations. This represents each function call. The iterative approach involves 
only yourself - no additional function calls. 

This is a useful example to think back to if you ever forget how to think about 
recursion.

---

## Problem Solving Process
1. Understand the problem (find a pattern)
2. Identify Base case
3. Write one step up from base case
4. Logic for inductive step
5. Code it out!

---

## Code Demos!

---

## The power of Memoization!
![fibs_memoized](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/ruby/w3d3-recursion/assets/fibs_memoized.png?token=ANVMGKKRY32P64DHY2TKM6LBSPYUQ)

---

## Final Demo Problem
![pascals_triangle](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/ruby/w3d3-recursion/assets/pascals_triangle.png?token=ANVMGKLIOKLBWLEYHZBDCN3BSPYTA)

---

# Final Thoughts
## The Recursion Process
 1. Simplify the problem
 2. Identify the base case
 3. Write the inductive step

---

## Some tips to keep in mind
- Assume what your last recursive call should return  
and build out your inductive step from there
- Use small examples to visualize things
	- one or 2 steps up from the base case
- Look at how you can reduce the input on each call
	- Arrays and Strings: shorten them
  - Integers: decrease or increase to a base case
- Return the same data type (base case and final)

---

# [Kahoot!](https://play.kahoot.it/v2/?quizId=b12bbcd0-0ac8-4725-a228-7746f1890852)

---

## Remember
>>> * You can use Recursion and Iteration _together_
>>> * Each recursive call will return before anything else happens - just like any method call
>>> * Always assume you're getting back the same data type!

---

# Questions?
![pooh](https://media.giphy.com/media/U7EOycerCyghO/giphy.gif)

---

## Thanks!
Experiment. Try things. Do it _wrong_. The point isn't to be perfect. It's to _learn_.