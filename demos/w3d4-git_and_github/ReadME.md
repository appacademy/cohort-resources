## W3D4
## Introduction to Git and GitHub


---
## What is Git

+ Git is a version control system (VCS): You can use it to :
  + Keep track of the history of a project
  + Collaborate with your teammates on the same project  

![Directory](https://user-images.githubusercontent.com/51456702/79085383-35cde200-7ced-11ea-88a5-7a380ae3d83c.png)


---

![1_FpEDNFF2CDqpmdkSHXFpmA](https://user-images.githubusercontent.com/51456702/79392937-16bb9400-7f29-11ea-8d76-8c97e98d50bd.jpeg)


---

## What is Github

+ Git is the version control software
+ Github is a webservice that runs git software behind the scenes.



---
## Let's git started!

+ Github
  + Repository
  + Commiting
  + Branches
+ Git
  + Cloning
  + Reset
  + Remotes
+ Git/Github
  + Push
  + Pull


---


## Lecture Learning Goals

+ Understand the fundamentals of Git
+ Learn git commands and git workflow 





---
## Github - 1

+ Repository: A folder for your project
+ Committing
  + Files are saved in a _commit_
  + Similar to save in a word document + custom message


---

## Questions?


---
## Github - 2

+ Branch: Junction created to add changes on the side

![download](https://user-images.githubusercontent.com/63574549/79187644-b2d28780-7dd1-11ea-88f6-590e252683fb.png)

+ Pull & Merge: Send a request to the main branch to concatenate the changes I added to my branch into my main branch.



---

## Questions? 

---

## Github server/ local repo

+ git-scm.com
+ `git config --global user.name "Your name"`
+ `git config --global user.email "Your email"`
+ `git clone {url}`
  +  copies the remote repo to your local machine



---
  ![naws3](https://user-images.githubusercontent.com/51456702/79501674-4a5af480-7fe3-11ea-9a63-7a8ddf8379c1.png)

---
 ## Local Repo Vocab

+ untracked
  + any newly introduced file (not in previous commit)
+ unstaged
  + file that exists in previous commit but has been changed now
+ staged
  + files awaiting commit
+ committed
  + files that are in your local repository

---

### Questions
---
## Local Repo Commands 1

+ `git status`
  + tracks current changes since last commit
+ `git add <file-name>`
  + add a single file to be committed
+ `git add .`
  + add all files from current directory (and all child directories)

---

## Local Repo Commands 2
  
+ `git add -A`
  + add all files in the entire working tree
+ `git commit -m <message>`
  + moves updates from staging area to local repository
+ `git diff`
  + show detailed changes from last commit
+ `git log`
  + see list of commits

---

## Local Reset Commands

+ `git reset <filename>`
  + remove a file from staging area
  + doesn't affect working directory
+ `git reset`
  + unstage everything
  + doesn't affect working directory
+ `git reset --hard`
  + reset the staging area and the working directory to match the most recent commit ( or specified commit )
  + affects working directory

---
## Questions
 
---
### Branching Commands / Vocab
  
+ `master`
  + default main branch
+ `git branch`
  + lists branches
+ `git branch <branch-name>`
  + create branch
+ `git checkout <branch-name>`
  + switch to branch
+ `git branch -d <branch-name>`
  + deletes branch
+ `git merge <branch-name>`
  + merge `<branch-name>` into current branch

---

## Questions

---
## Local Repositories

+ "local" repository = on your machine

+ "remote" repository = duplicate instance of your git repository that lives on code hosting service like Github



---

## Remote Commands / terminology 

+ `origin`
  + keyword referring to default remote repo
+ `git remote`
  + command to list remotes
+ `git push <remote> <branch-name>`
  + moves updates from local to remote repository
+ `git push -u <remote> <branch-name>`
  + moves updates from `local to remote repository, sets upstream branch

 


---
## Remote Commands 2

+ `git fetch <remote> <branch-name>`
  + gets updated info from the remote repo
+ `git pull <remote> <branch-name>`
  + gets updates AND merges from remote repository

---
## Git workflow 
  
![git-local-remote](https://user-images.githubusercontent.com/63574549/79697275-a2d60000-8236-11ea-81cf-5a99c5fb4ecd.png)


---
  
## Creating local repositories
+ `git init`
  + creates local Git repository
+ `git remote add <remote> <remote-url>`
  + Adds a remote
  

---

## Questions?


---

## Foundation

+ Your future company will teach you their Git workflow
+ You won't be expected to know any more than this
+ Focus on mastering the fundamentals; building on top of those will be easy


---

## The most important command

`open http://www.google.com`


---


## Homework System Starting Today

+ You'll be creating one repository for your Homework called `aA_Homework` and one repository for your Classwork called `aA_Classwork`
  + You can run `git init` on the top level of these individual folders
  + For each day make a folder called `WXDY` folder inside this repo and push to your Github

+ Note: do not include Screwdoku in Classwork folder as this will result in nested .git repos
Note:
+ Push the days' projects (not a typo)
+ Push your nightly homework from now on




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

# [Kahoot!](https://play.kahoot.it/#/k/b42779ec-e48f-4322-a8bf-a136c85d9374)




