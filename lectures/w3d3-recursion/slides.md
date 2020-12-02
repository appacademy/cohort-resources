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
## Agenda
1. Recursion
    1. Recursion
	      1. Recursion
		        1. Recursion
                    1. Base Case
2. Demos
---
## Lecture Outline
- Recursion for Today
- How to think about recursion
- Movie theater example
- Demos
- Recursion reasoning tips
- Kahoot!
---
## WARNING
### Throw out everything you _think_ you know about writing functions.
![flashing warning sign](https://upload.wikimedia.org/wikipedia/commons/4/44/Ambox_warning_psycho.gif)
Note:
The main roadblock students seem to have in understanding recursion is
that it's a different _approach_ to solving problems entirely. They need
to throw everything they *think* they know about writing functions out the
window and start from scratch, or they won't think about the problems
properly.
---
## How you've solved problems up to now...
![looping racecar](http://clipground.com/images/racetrack-clipart-1.gif)
---
## How you are going to solve problems today...
![recursion](https://media.giphy.com/media/xlTwaFb20TVjW/giphy.gif)
---
## What you're _not_ going to do...
>>>> * Use loops*
>>>> * Modify a method argument
>>>> * Use an optional, private argument
>>>> * Think in linear or procedural terms
>>>> * Be mentally refreshed at the end of the day (sorry)
>>*Recursion & iteration can be used together, so you will use loops but not to recurse.
---
## What you _are_ going to do...
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
How do you know what row you are in in a dark theater?
---
# Code Demos!
---
# Final Thoughts
## The Recursion Process
 1. Simplify the problem
 2. Identify the base case
 3. Write the inductive step
---
## Some tippos to keep in mind
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
## Soapbox Moment
Experiment. Try things. Do it _wrong_. The point isn't to be perfect. It's to _learn_.