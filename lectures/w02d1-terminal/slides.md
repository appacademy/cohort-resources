# W2D1
## Terminal Tips

---

## Lecture Objectives

* Become more comfortable with your Terminal Environment

---

## Lecture Outline

* Helpful commands
* Aliases & Functions
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

* This function would take in one argument (a file or directory) and move that file or directory to the root directory

```sh
    function mtr() {
        mv $1 ~/
    }
```

* `mtr <path-of-file>`

---

## Useful Bash and Zsh customization links
* [How to Customize (and colorize) your Bash Prompt](https://www.howtogeek.com/307701/how-to-customize-and-colorize-your-bash-prompt/)
* [How to Customize the zsh Prompt in the macOS Terminal](https://www.makeuseof.com/customize-zsh-prompt-macos-terminal/)


---

## Thank you!
