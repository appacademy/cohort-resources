# W2D1
## Terminal Tips and Tricks

---

## Lecture Objectives

* Become more comfortable with your Terminal Environment

---

## Lecture Outline

* Helpful commands
* Aliases & Functions
* Customization
  - `bash`
  - `zsh`
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

## Questions

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

## Questions

---

## Customize your Prompt

* Prompt can be customized by changing your `PS1` variable
  - lives in your `.bashrc` or `.zshrc`
* [Special Prompt Characters: Bash](https://ss64.com/bash/syntax-prompt.html)
  - `\u`: username
  - `\w`: Current working directory
* [Special Prompt Characters: Zsh](https://www.makeuseof.com/customize-zsh-prompt-macos-terminal/)
  - `%n`: username
  - `%1`: Current working directory
* Can add emojis
  - Mac: `cmd + ctrl + space`
  - Windows: `wndw + ;`

---

## Customizing Prompt Colors

* Prompt color can be customized
* For Bash use this format:
  - `\[\e[COLORm\]`
  - Text that you want to be that color goes after the closing bracket
  - [Colors for Bash](https://ss64.com/bash/syntax-prompt.html)
* For Zsh use this format:
  - `%F{color}%f`
  - Text that you want to be that color goes between the closing brace and `%f`
  - [Colors for Zsh](https://scriptingosx.com/2019/07/moving-to-zsh-06-customizing-the-zsh-prompt/)
  

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
* For Bash:
  - Add `LS_COLORS` to `.bashrc` file
  - Use this format for setting colors
    - `type-of-file=color-type;text-color;background-color`
  - Remember to `export LS_COLORS`
* For Zsh:
  - Add `LSCOLORS` to `.zshrc` file
  - Use this formate for setting colors
    - bcfxcxdxbxegedabagacad 
    - each pair represents a foreground and background color of a file type
    - color code and file type order can be found [here](https://www.cyberciti.biz/faq/apple-mac-osx-terminal-color-ls-output-option/)
  - Remember to `export LSCOLORS`

* [How to Change Colors of LS in Bash](https://linuxhint.com/ls_colors_bash/)
* [How to Change Colors of LS in Bash/Zsh](https://www.cyberciti.biz/faq/apple-mac-osx-terminal-color-ls-output-option/)

---

## Questions

---

## Useful Bash and Zsh customization links
* [How to Customize (and colorize) your Bash Prompt](https://www.howtogeek.com/307701/how-to-customize-and-colorize-your-bash-prompt/)
* [How to Customize the zsh Prompt in the macOS Terminal](https://www.makeuseof.com/customize-zsh-prompt-macos-terminal/)

---

## Thank you!

