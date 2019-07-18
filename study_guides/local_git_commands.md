## Local Repo Commands 1

+ `git init`
  + initiates local Git repository
+ `git status`
  + see current changes from last commit
+ `git log`
  + see list of commits
+ `git stash`
  + stash changes so they do not persist when switching branches
+ `git stash list`
  + gives list of all the changes that you have stashed
+ `git stash apply <stash number>`
  + allows you to apply a stash based on what numbered stash it is.
  + stash number starts at 0 

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

## Local Reset Commands

+ `git reset <filename>`
  + remove a file from staging area
+ `git reset`
  + unstage everything
+ `git reset --hard`
  + wipe out everything back to your last commit (or a specified commit)

## Branching Commands

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