# W2D1
## Tracking and Submitting Projects with Git

---

## What is Git?

---

## Git
- Version Control System (VCS)
- Keeps track of changes to files over time
- Lets us go back and forth to previous versions of projects
- A 'Git repository' (or 'Git repo') contains files and records of changes

---

## Git vs GitHub
Git:
- Tracks changes to files on your computer
Git*Hub*:
- Online cloud storage for Git repositories
- Company that is fully separate from Git itself

---

## Basic Commands
- `git init`
    - Creates new Git repository at the current directory
    - *Never* nest Git repos!
    - This means never create a repo at the root directory!
- `git status`
    - See changes from last "commit"
    - *Always* run before `git init` to double-check you're not currently in a Git repo!

---

## Basic Commands Cont. - Creating New Commits
- `git add .`
    - Confirm you're in top level of your git repo before running
    - Adds all files in the current directory and its subfolders
    - Makes files *ready to commit* but *does not commit them*
- `git commit -m "<message>"`
    - Message should communicate what has been changed since last commit
    - Creates newly saved version of the project
    - Can only commit files that have been `git add`ed
- You will usually use both of these right after each other
- Commit frequently!

---

## Basic Commands Cont. - Pushing to GitHub
- `git push`
    - 'Pushes' changes from your local computer to GitHub
    - Can do as frequently as you'd like, but only NEED to do at the end of the day
    - Push your work for the day before submitting the link to your GitHub Repo

---

## Create a Classwork Repo

If you have not already done so, you can create a classwork repo with these steps:

1. Create the directory with `mkdir aa_classwork` and cd into that directory with `cd aa_classwork`
2. Create your Github repo without a README and follow the steps listed

---

## General workflow

- Decide which student will be cloning and which student will be adding the other as a collaborator 
- The cloner will go to the other student's Github repo and clone the repo `git clone REPO_LINK`
    - DO NOT clone this repo into your own classwork repo. Clone into a separate folder and make sure it is not a git repository.
- The owner of the repo will add the other students github username as a collaborator by going to Settings -> Manage access -> Invite a collaborator
- The cloner then needs to accept the owners invite in an email they will receive
- Once this has occurred, both people should be able to push and pull from the new repo

---

## End of Day 

- Both parties should push and pull to make sure they have everything they need
- The cloner should copy that days folder into their own local classwork repo (DO NOT copy the entire repo)
- The owner of the repo can then remove the cloner as a collaborator
- Add the link to that days work on to Progress Tracker

---

# DEMO

---

## Final reminders:
- *NEVER* nest repos!
    - Always run `git status` before `git init` to be sure
- `git add` AND `git commit` are needed to save a new commit
- You need at least one file in a repository before you can make the first commit