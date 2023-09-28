
## W3D4
# Intro to Git and GitHub

---

## Agenda

+ Git Overview
+ Git Demos
  + Repos
  + Remotes
  + Branches

---

## Learning Objectives

+ Explain motiviation for Git
+ Understand basic structure of a Git repository
+ Learn Git commands and Git workflow

---

# Git Overview

---

## What Is Git?

+ Git is a version control system (VCS)
+ Created by Linus Torvalds in 2005 for the Linux Kernel

---

## Why Git?

+ Versioning
+ Collaboration

---

## How Does Git Work?

+ Tracks changes to files in a particular directory or _repository_
+ Snapshot of the repository is saved in a _commit_
	+ Note that a commit only stores the files that have changed since the last commit was made
	+ Cloning a repository retrieves the entire commit history

---

## Git's Internal System

+ The visible, editable contents of a repository are considered to be its _working tree_
+ Individual files or folders that have been modified can be added to the _staging area_
+ The contents of the staging area are moved into the `.git` directory upon making a commit

---

# Basic Commands & Workflow

---

## Basic Commands

+ `git init`: creates local Git repository
+ `git status`: see overview of the repo's current state
+ `git log`: see list of commits
+ `git diff`: see changes between working tree and commits

---

## Local Repo Vocab

+ A file newly added to the working tree but not yet added to the staging area is said to be _untracked_
+ A modified file that is not yet added to the staging area is said to be _unstaged_
+ Any file that has been added to the staging area and is awaiting a commit is said to be _staged_

---

## Basic Git Workflow

+ `git add <file-name>`
  + _add a single file to the staging area_
+ `git add .`
  + _add all files from current directory (and all child directories)_
+ `git add -A`
  + _add all files in the entire working tree_
+ `git commit -m <message>`
  + _Message should start with a verb in the imperative tense_
  + _No emoji or ending punctuation_

---

## Diagram: Basic Git Workflow

![local_diagram](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/git-github/local_repo.png)

---

## Code Demo #1

1. Create a new repo
2. Show basic commands
3. Show basic workflow

---

## Git Reset

+ powerful set of commands used to undo local changes to the state of a Git repository

---

## Reset Commands

+ `git reset <filename>`
  + _unstage a file (does not affect working tree)_
+ `git reset`
  + _unstage everything (does not affect working tree)_
+ `git reset --hard`
  + _unstage everything_
  + _restore working tree back to state of most recent commit_

---

## Diagram: Reset

![reset_staging](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/git-github/reset_file.png)

---

## Diagram: Hard Reset

![reset_hard](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/git-github/fixed_hart_reset.png)

---

## Code Demo #2

1. Show use cases for `git reset`

---

# Remote Repositories

---

## Local vs. Remote

+ A local repository exists in the file system of your own computer, whereas a remote repository resides in the cloud

---

## GitHub

+ Not the only cloud service for hosting remote repositories but probably the most popular

---

## Diagram: Remotes

![remotes](https://git-scm.com/book/en/v2/book/05-distributed-git/images/centralized_workflow.png)

---

## Remote Commands

+ `git remote`
  + _show list of remotes (add optional `-v` for more info)_
+ `git remote add <remote> <remote-url>`
  + _add a new remote_
+ `git push <remote> <branch-name>`
	+ _sync commit history of remote repository with the local_
+ `git push -u <remote> <branch-name>`
	+ _sync commit history of remote repository with the local_
  + _set default upstream branch_

---

## More Remote Commands

+ `git clone <remote-url>`
	+ _copy the remote repo to your local computer_
+ `git fetch <remote>`
  + _get most recent updates from remote repo_
+ `git pull <remote> <branch-name>`
	+ _get most recent updates from remote repo_
  + _merge those updates into local repo_

---

## Code Demo #3

1. Add a remote to a local repository
2. Push and/or pull from a remote repository
3. Clone down a remote repository

---

## Diagram: Git Workflow (with Remote)

![git flow](https://s3-us-west-1.amazonaws.com/eventliter-prod/download.jpeg)

---

# Branches

---

## Branch Commands

+ `git branch`
  + _list branch names (and identify current branch)_
+ `git checkout <branch-name>`
  + _switch to a particular branch_
+ `git checkout -b <branch-name>`
  + _create a new branch with the specified name_
  + _switch to newly created branch_
+ `git branch -d <branch-name>`
  + _delete specified branch_
+ `git merge <branch-name>`
  + _merge specified branch into current branch_

---

## Diagram: Branches

![branch](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/git-github/branch.png)

---

## Diagram: Divergent Branches

![diverging_branch](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/git-github/diverge_branch.png)

---

## Code Demo #4

1. Create new branch
2. Switch between branches
3. Merge branches

---

# Today's Project

+ Screwdoku should be its own repository
	+ Avoid nested repositories
+ Going forward, EOD reports require a link to your daily classwork repository
