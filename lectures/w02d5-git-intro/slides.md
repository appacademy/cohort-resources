

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
    - *Never* create a repo at the root directory!
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
- You will usually use both of these in sequence
- Commit frequently!

---

## Basic Commands Cont. - Pushing to GitHub
- `git push`
    - 'Pushes' changes from your local computer to GitHub
    - Can do as frequently as you'd like, but only NEED to do at the end of the day
    - Push your work for the day before submitting the link to your GitHub Repo

---

## Classwork Repo Setup Part 1 - Local
1. Create new local folder to contain your classwork projects (aa_classwork)
2. `cd` into that folder and run `git status` to ensure there is not a containing git repo
3. Run `git init` if there is no git repo
   - Otherwise move the folder out of the containing repo and try step 2 again
4. Add a folder for your day's projects (ex: W2D1)
5. Add at least 1 skeleton or project file to the directory
   - We need files to commit!
6. `git add .` and `git commit -m "First commit"`
   - Need to have at least one commit before we add GitHub
7. Rename master branch to `main`
   - `git branch -M main` 

---

## Classwork Repo Setup Part 2 - GitHub
1. Go to [GitHub.com](https://github.com/)
2. Hit the "+" to make a new repository
3. Name repository `aa_classwork`
4. Follow GitHub instructions to "push an existing repository"
5. Refresh the GitHub page to confirm your files were pushed
6. Add link for the day's folder to progress tracker at the end of the day

---

## Final reminders:
- *NEVER* nest repos!
    - Always run `git status` before `git init` to be sure
- `git add` AND `git commit` are needed to save a new commit
- You need at least one file in a repository before you can make the first commit

---

## Thank you!
