# Terminal Tips

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

## Demo Helpful Commands

---

## `.bashrc` & `.zshrc`

* Config for your terminal environment
* Lives in your root directory
  - `~/`

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
* [Bash Special Prompt Characters](https://ss64.com/bash/syntax-prompt.html)
  - `\u`: username
  - `\w`: Current working directory
 * [Zsh Special Prompt Characters](http://zsh.sourceforge.net/Doc/Release/Prompt-Expansion.html#Simple-prompt-escapes)
    - `%n`: username
    - `%~`: shortened current working directory
* Can add emojis
  - Mac: `cmd + ctrl + space`
  - Windows: `wndw + ;`

---

## Customizing Prompt Colors

* Prompt color can be customized
* Use this format for bash:
  - `\[\e[COLORm\]`
  - [Bash Colors](https://ss64.com/bash/syntax-prompt.html)
  - Text that you want to be that color goes after
 * Zsh
 	- `%F{color}your text here%f`
  - [Zsh Colors](http://zsh.sourceforge.net/Doc/Release/Prompt-Expansion.html#Visual-effects)
  - colors can be text or numeric code from 0-255
  - [Numeric Codes](https://upload.wikimedia.org/wikipedia/commons/1/15/Xterm_256color_chart.svg)

---

## Example Prompt

- bash
```sh
    export PS1="\u \[\e[32m\]\w \[\e[00m\] $ "
```
- zsh
```sh
	export PS1="%n %F{green}%~%f $ "
```

---

## Customizing LS Colors

* LS Colors are colors of listed (`ls`) files 
* Can be customized by changing `LS_COLORS`
  - `echo LS_COLORS` -> Add to `.bashrc` or `.zshrc` file
  - edit it directly
* Use this format:
  - `type-of-file=color-type;text-color;background-color`
* [Some available codes](https://linuxhint.com/ls_colors_bash/)

---

## Common LS Files

* `fi`: file
* `di`: directory
* `ex`: executable
* `no`: default
* `*.extension`: specific extensions
  - `*.mp3`: all `.mp3` files

---

## Customize Demo
* Helpful [website](https://www.howtogeek.com/307701/how-to-customize-and-colorize-your-bash-prompt/)

---

## Thank you!
