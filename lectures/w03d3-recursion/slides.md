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
1. How to think about recursion
1. Movie theater example
1. Demos
1. Recursion reasoning tips
1. Kahoot!


---

## What you're _not_ going to do today...

>>>> * Use loops*
>>>> * Modify a method argument
>>>> * Use an optional, private argument
>>>> * Think in linear or procedural terms
>>>> * Be mentally refreshed at the end of the day (sorry)

>>*Recursion & iteration can be used together
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
* Builds back up incrementally using an _**inductive step**_ (more to)

---

## Inductive Step
How we use the return value of the previous step to determine the current result.


---

## Problem Solving Process
1. Understand the problem
1. Identify Base case
1. Write one step up from base case
1. Logic for inductive step
1. Code it out!

---

## Code Demos!

---

## The power of Memoization!
![fibs_memoized](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/recursion/fibs_memoized.png)


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

# [Kahoot!](https://create.kahoot.it/details/w3d3-recursion/b12bbcd0-0ac8-4725-a228-7746f1890852)

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