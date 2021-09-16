## Review

**Merge sort** 

- Work through fixing this broken merge sort, taking it as an opportunity to both understand merge sort and explore best debugging practices.

```ruby
  class Array
    def merge_sort(&prc) # Procifies the block
      return self if arr.count <= 1

      middle = self.length / 2
      left = self[0...middle]
      right = self[middle..-1]

      sorted_left = merge_sort(left)
      sorted_right = merge_sort(right)
      merge(sorted_left, sorted_right, prc)
    end

    private
    def self.merge(left, right, prc)
      result = []
      until left.empty? || right.empty?
        if prc.call(left[0], right[0]) <= 0
          result += left.shift
        else
          result += right.shift
        end
      end

      result + left + right
    end
  end
```

---

## W3D4

## Intro to Git and GitHub


---

## Agenda

+ Review
+ Git Overview
+ Git Demos
  + Repos
  + Reset
  + Remotes
  + Branches

---


## Lecture Learning Goals

+ Understand the fundamentals of Git
+ Learn Git commands and git workflow


---

## What is Git

+ Git is a version control system (VCS)
+ Created by Linus Torvalds in 2005 for the Linux Kernel


---

## Why Git?

+ Versioning
+ Collaboration


---

## How does Git work

+ Repository: stores a set of files or directories in vcs
+ Files are saved in a _commit_
+ Does *NOT* store entire project in each commit
+ Each commit is a snapshot of what changed since the last commit
+ Cloning or downloading a repository grabs the entire commit history



---

## Questions?

---

# Git's Internal System

+ working directory
  + all files and folders on your local machine
+ staging area
  + tracks specified changes to working directory
+ commit history
  + snapshots of project stored in `.git`


---

# Local Repositories

+ "local" repository = on your machine

+ "remote" repository = online code hosting service like Github

---

## Local Repo Commands 1

+ `git init`
  + creates local Git repository
+ `git status`
  + see current changes from last commit
+ `git log`
  + see list of commits


---

```diff

match2memory
├── .git
├── players
│   ├── computer.rb
│   └── human.rb
├── parts
│   ├── board.rb
│   └── tile.rb
└── game.rb

```

---

## Local Repo Vocab

+ untracked
  + any newly introduced file (not in previous snapshot of repo)
+ unstaged
  + file that exists in .git but has been changed since last commit
+ staged
  + files added to staging area, awaiting commit
+ commit
  + files that have been committed to .git
---

## Local Repo Commands 2

+ `git add <file-name>`
  + add a single file to the staging area
+ `git add .`
  + add all files from current directory (and all child directories)
+ `git add -A`
  + add all files in the entire working tree
+ `git commit -m <message>`
  + moves updates from staging area to `.git`
  + Start with a verb; imperative mood; _no_ emoji; no ending punctuation
+ `git diff`
  + show what changed from last commit to staged changes

---

## Conceptual Diagram - Local repos/commits


![local_diagram](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/w3d4-git/ruby/w3d4-git/assets/local_repo.png?token=ALOGIUHBN5URFABWC4ISHO2645JKG)

---

## Questions?


---

# Code Demo - Local repos/commits


---

# Git Reset

+ powerful command used to undo local changes to the state of a Git repository

---

## Local Reset Commands

+ `git reset <filename>`
  + remove a file from staging area
  + doesn't affect working directory
+ `git reset`
  + unstage everything
  + doesnt affect working directory
+ `git reset --hard`
  + reset the staging area and the working directory to match the most recent commit ( or specified commit )
  + affects working directory


---

## Conceptual Diagram - Resetting files


![reset_staging](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/w3d4-git/ruby/w3d4-git/assets/reset_file.png?token=ALOGIUDGUNS26NFXFPCHTHC645JMQ)



---

## Conceptual Diagram - Hard reset


![reset_hard](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/w3d4-git/ruby/w3d4-git/assets/fixed_hart_reset.png?token=ALOGIUGGR4UNDL2MJOUY44C645JQQ)


---

## Questions?

---

# Code Demo - Resetting


---

## 10 min break!

---

## Remote Repositories

---

## What is Github

+ Webservice that integrates git software behind the scenes.
+ Allows hosting of projects

---

### Conceptual Diagram - Remote

![remotes](https://git-scm.com/book/en/v2/book/05-distributed-git/images/centralized_workflow.png)


---

## Github Demo

---

## Remote Commands / terminology 

+ `origin`
  + keyword referring to default remote repo
+ `git remote`
  + command to list remotes
+ `git remote add <remote> <remote-url>`
  + Adds a remote
+ `git push <remote> <branch-name>`
  + moves updates from `.git` to remote repository
+ `git push -u <remote> <branch-name>`
  + moves updates from `.git` to remote repository, sets upstream branch

---

## Remote Commands 2

+ `git clone <remote-url>`
  + copies the remote repo to your local machine
+ `git fetch <remote>`
  + gets updated info from the remote repo
+ `git pull <remote> <branch-name>`
  + gets updates AND merges from remote repository
---

## Questions?

---

# Code demo - Remotes


---

## Git Flow Diagram

![git flow](https://s3-us-west-1.amazonaws.com/eventliter-prod/download.jpeg)

---

## Keep your options open

+ `git push --force <remote> <branch>`
  + or `-f` force option, be careful
+ `git push --all`
  + pushes _all_ branches


---

# Branching

---

## Branching Commands / Vocab

+ `master`
  + default main branch
+ `git branch`
  + lists branches
+ `git checkout <branch-name>`
  + switch to branch
+ `git checkout -b <branch-name>`
  + create and immediately switch to branch
+ `git branch -d <branch-name>`
  + deletes branch
+ `git merge <branch-name>`
  + merge `<branch-name>` into current branch


---

### Conceptual Diagram - Branching


![branch](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/w3d4-git/ruby/w3d4-git/assets/branch.png?token=ALOGIUGMQX7MFYRTRX3PJY2645JTQ)


---

### Conceptual Diagram - Diverging Branches

![diverging_branch](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/w3d4-git/ruby/w3d4-git/assets/diverge_branch.png?token=ALOGIUDTYFOP5HXSV63JXKS645JU6)



---

## Questions?

---

## Code demo - Branching

---

## Foundation

+ Your future company will teach you their Git workflow
+ You won't be expected to know any more than this
+ Focus on mastering the fundamentals; building on top of those will be easy


---

## The most important command

`open http://www.google.com`

---

## Today!

+ Learn Git *today*
+ Push the days' projects (not a typo)
+ Push your nightly homework from now on

---


## Homework System Starting Today

+ You'll be creating one repository for your Homework called `aA_Homework` and one repository for your Classwork called `aA_Classwork`
  + You can run `git init` on the top level of these individual folders
  + For each day make a folder called `WXDY` folder inside this repo and push to your Github
  + The homework you are doing tonight should be in the folder called `W3D4`, the day it is due
  + Note: do not include Screwdoku in Classwork folder as this will result in nested .git repos



---


## No nested repos!

```diff
 └── nest_stuff
     ├── home_for_a_bird
     │   ├── bluejays.rb
-    │   └── .git
     ├── nest_free
     │   ├── bunnies.rb
     │   └── turtles.rb
     └── .git
```



---

## One more incentive...

[Green squares == green rectangles](https://github.com/gaearon)

---

# [Kahoot!](https://play.kahoot.it/v2/?quizId=d09c0ec8-16ee-4d63-9cb4-9cbc6d140e3e)

---

## Today's Project
