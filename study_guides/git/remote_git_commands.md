## Remote Commands 1

+ `origin`
  + default remote repo
+ `git remote`
  + List Remotes
+ `git remote add <remote> <url>`
  + Adds a remote
+ `git push <remote> <branch-name>`
  + moves updates from `.git` to remote repository
+ `git push -u <remote> <branch-name>`
  + moves updates from `.git` to remote repository, sets upstream branch

---

## Remote Commands 2

+ `git clone <url>`
  + copies the remote repo to your local machine
+ `git fetch`
  + gets updated info from the remote repo
+ `git pull <remote> <branch-name>`
  + gets updates AND merges from remote repository

## Keep your options open

+ `git push --force <remote> <branch>`
  + or `-f` force option, be careful
+ `git push --all`
  + pushes _all_ branches
+ `git push origin <branch name>`
