## W3D4 

## Intro to Git and GitHub

---

## Agenda

+ Git Overview
+ Git Demos
  + Repos
  + Reset
  + Remotes
  + Branches

---

## Lecture Learning Goals

+ Understand the fundamentals of Git
+ Learn common Git commands
+ Understand basic Git workflow

---

## What is Git?

+ Git is a version control system (VCS)
+ Created by Linus Torvalds in 2005 for the Linux Kernel

---

## Why Git?

+ Enables versioning
+ Allows for collaboration
+ Supports Agile development

---

## How does Git work?

+ Repository: 
  + stores a set of files or directories in vcs
  + where commits live
+ Commits:
  + changes are saved in a _commit_
  + each commit is a snapshot of what changed since the last commit
  + does *NOT* store entire project in each commit

---

## Questions?

---

## Git's Internal System

+ Working directory
  + all folders/files of the project you're currently working on
+ Staging area
  + tracks specified changes to working directory
+ local repository
  + snapshots of changes (commits) stored in `.git`

---

## Local Repo Commands 1

+ `git init`
  + initializes git, creates local Git repository
+ `git status`
  + see current changes from last commit
+ `git log`
  + see list of commits
+ `git diff`
  + show what changed from last commit to staged changes

---

## File Structure Example

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

## Statuses of Changes

+ Untracked
  + any newly introduced file (not in previous snapshot of repo)
+ Unstaged
  + file that exists in .git but has been changed since last commit
+ Staged
  + files added to staging area, awaiting commit
+ Committed
  + files that have been committed to .git
---

## Local Repo Commands 2

+ Move updates from working directory to staging area
+ Change status from untracked or unstaged to staged
  + `git add <file-name>` - add changes from a single file to the staging area
  + `git add .` - add changes from all files in current directory (and all child directories)
  + `git add -A` - add changes from all files in the entire working directory

---

## Local Repo Commands 3

+ Move updates from staging area to .git repository
+ Change status from staged to committed
  + `git commit -m <message>`
  + Start with a verb; imperative mood; _no_ emoji; no ending punctuation
  + `-m` flag allows you to add commit messages on the command line

---

## Conceptual Diagram - Local Repos/Commits

![local_diagram](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/ruby/w3d4-git/assets/local_repo.png?token=AK6ID6OHTKJYYXZCYOOTEMC7Q42EO)

---

## Questions?

---

## Code Demo - Local Repos/Commits

---

## Git Reset Commands

+ Commands used to undo local changes to the state of a Git repository
+ `git reset <filename>`
  + remove a file from staging area, doesn't affect working directory
+ `git reset`
  + unstage everything, doesnt affect working directory
+ `git reset --hard`
  + reset the staging area and the working directory to match the most recent commit ( or specified commit )
  + affects working directory

---

## Conceptual Diagram - Resetting Files

![reset_staging](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/ruby/w3d4-git/assets/reset_file.png?token=AK6ID6PEHR26Z7N6QXAVH4S7Q42G4)

---

## Conceptual Diagram - Hard Reset

![reset_hard](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/ruby/w3d4-git/assets/fixed_hart_reset.png?token=AK6ID6OMXUICZUL2PW7APVK7Q42IY)

---

## Questions?

---

## Code Demo - Resetting

---

## 10 min break!

---

## Remote Repositories

---

## What is Github?

+ Webservice that integrates git software
+ Allows hosting of git repositories

---

## Github Demo

---

## Conceptual Diagram - Remote

![remotes](https://git-scm.com/book/en/v2/book/05-distributed-git/images/centralized_workflow.png)

---

## Common Remote Commands 1

+ `origin` - keyword referring to default remote repo name
+ `git remote` - command to list remotes
+ `git remote add <remote-name> <remote-url>` - adds a remote
+ `git push <remote-name> <branch-name>`
  + moves updates from `.git` to remote repository
+ `git push -u <remote-name> <branch-name>`
  + moves updates from `.git` to remote repository
  + `-u`sets upstream branch

---

## Common Remote Commands 2

+ `git clone <remote-url>`
  + copies the remote repository to your local machine
+ `git pull <remote> <branch-name>`
  + gets updates AND merges from remote repository to current working directory

---

## Git Flow Diagram

![git flow](https://res.cloudinary.com/practicaldev/image/fetch/s--M_fHUEqA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/128hsgntnsu9bww0y8sz.png)

---

## Questions?

---

## Code Demo - Remotes

---

## Keep your options open

+ `git push --force <remote> <branch>`
  + or `-f` force option, be careful
+ `git push --all`
  + pushes _all_ branches

---

## Branching

---

## Branching Commands

+ `master` - default main branch
+ `git branch` - lists branches
+ `git checkout <branch-name>` - switch to branch
+ `git checkout -b <branch-name>`
  + create and immediately switch to branch
+ `git branch -d <branch-name>`
  + deletes branch
+ `git merge <branch-name>`
  + merge `<branch-name>` into current branch

---

## Conceptual Diagram - Branching

![branch](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/ruby/w3d4-git/assets/branch.png?token=AK6ID6K55CTVIOYSOQFEMOK7Q42ME)

---

## Questions?

---

## Code Demo - Branching

---

## Foundation

+ Your future company will teach you their Git workflow
+ Focus on mastering the fundamentals

---

## The most important command

`open http://www.google.com`

---


## Homework System Starting Today

+ You'll be creating: 
  + One repository for your Homework called `aA_Homework`
    - You can have subfolders (i.e. W3D4) within this homework repo
  + One repository for EACH DAY for your Classwork called `WXDY`
 
+ You can run `git init` on the top level of these individual folders
+ Each day you will push to your Github

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

## [Kahoot!](https://play.kahoot.it/v2/?quizId=d09c0ec8-16ee-4d63-9cb4-9cbc6d140e3e)

---

## Today's Project

+ Note: do not include Screwdoku in Classwork folder as this will result in nested .git repos
