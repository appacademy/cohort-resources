# W2D1
## Terminal Tips and Git Tricks

---

## Lecture Objectives

* Become more comfortable with your Terminal Environment
* Learn what Git is and how to track/submit projects with Git

---

## Lecture Outline

* Helpful commands
* Aliases & Functions
* Customization
  - `bash`
  - `zsh`
* Git/Github
* Demos along the way

---

## Helpful Commands

* `cd`: change directory
  - `cd <path-to-directory>`
* `ls`: list
  - can add `-a` flag to list all files (including hidden ones)
* `touch`: create new file
* `mkdir`: create new directory

---

## Helpful Commands cont.

* `cp`: copy file or folder to new location
  - `cp <path-to-file> <path-to-copy-location>`
  - add `-rf` flag to recursively copy folder contents
* `mv`: move file or folder to new location
  - `mv <path-to-file> <path-to-move-location>`
* `rm`: remove file or folder
  - `rm <path-to-file>`
  - add `-rf` flag to recursively remove folder contents

---

## `.bashrc` & `.zshrc`

* Config for your terminal environment
* Lives in your root directory
  - `~/`
* Open your .bashrc or .zshrc in VSCode with the following command
  - `code ~/.bashrc` or `code ~/.zshrc`

---

## Aliases

* Shorten common commands so you don't have to type as much
* Add to `.bashrc` or `.zshrc`

```sh
    alias name_of_alias='command that you want alias to represent'
```

---

## Helpful Aliases

```sh
    alias bi='bundle install'
    alias be='bundle exec'
    alias ber='bundle exec rspec'

    # For WSL users
    alias wndw='cd /mnt/c/Users/your-username/'
```

---

## Functions

* Perform some command that requires a dynamic input
* Add to `.bashrc` or `zshrc`

```sh
    function function_name() { 
        # commands you want to execute
        # Parameters represented by $1, $2, ...$n
    }
```

---

## Example Function

```sh
    function mtr() {
        mv $1 ~/
    }
```

* `mtr <path-of-file>`

---

## Customize your Prompt

* Prompt can be customized by changing your `PS1` variable
  - lives in your `.bashrc` or `.zshrc`
* [Special Prompt Characters](https://ss64.com/bash/syntax-prompt.html)
  - `\u`: username
  - `\w`: Current working directory
* Can add emojis
  - Mac: `cmd + ctrl + space`
  - Windows: `wndw + ;`

---

## Customizing Prompt Colors

* Prompt color can be customized
* Use this format:
  - `\[\e[COLORm\]`
  - [Colors](https://ss64.com/bash/syntax-prompt.html)
  - Text that you want to be that color goes after

---

## Example Prompt
bash
```sh
    export PS1="\u \[\e[32m\]\w \[\e[00m\] $ "
```

zsh
```sh
    export PS1='%F{green}%n %f %F{199}%1d %f $ '
```

---

## Customizing LS Colors

* LS Colors are colors of listed (`ls`) files 
* Can be customized by changing `LS_COLORS`
  - `echo LS_COLORS` -> Add to `.bashrc` or `.zshrc` file
  - edit it directly
* Use this format:
  - `type-of-file=color-type;text-color;background-color`
* [How to Chanage Colors on LS in Bash](https://linuxhint.com/ls_colors_bash/)
* [How to Change Colors on LS in Bash/Zsh](https://www.cyberciti.biz/faq/apple-mac-osx-terminal-color-ls-output-option/)

---

## Common LS Files

* `fi`: file
* `di`: directory
* `ex`: executable
* `no`: default
* `*.extension`: specific extensions
  - `*.mp3`: all `.mp3` files

---

## Useful Bash and Zsh customization links
* [How to Customize the zsh Prompt in the macOS Terminal](https://www.makeuseof.com/customize-zsh-prompt-macos-terminal/)
* [How to Customize (and colorize) your Bash Prompt](https://www.howtogeek.com/307701/how-to-customize-and-colorize-your-bash-prompt/)

---

# Break (5 mins)

---

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

