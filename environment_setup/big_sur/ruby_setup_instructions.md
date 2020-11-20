## Please follow these instructions closely to setup Ruby on your machine 
## Warning: This setup is targeted specifically towards students who have M1 Macs and may not work for students **upgrading** to macOS Big Sur

1. Locate the Terminal application within the Utilities folder (Finder > Go menu > Utilities)
2. Select Terminal.app and right-click on it, then choose “Duplicate”
3. Rename the duplicated Terminal app something obvious and distinct, like ‘Rosetta Terminal’
4. Now select the freshly renamed ‘Rosetta Terminal’ app and right-click and choose “Get Info” (or hit Command+i)
5. Check the box for “Open using Rosetta”, then close the Get Info window
6. Run the “Rosetta Terminal” as usual, which will fully support Homebrew and other x86 command line apps
7. Paste these commands to your Rosetta Terminal: 
    + `chsh -s /bin/zsh`
    + `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
    + `brew install rbenv ruby-build`
    + `echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.zshrc source ~/.zshrc`
    + `rbenv install 2.5.1`
    + `rbenv global 2.5.1`
    + `ruby -v`
    + `echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc`
    + `echo 'eval "$(rbenv init -)"' >> ~/.zshrc`
    + `source ~/.zshrc`
    + `rbenv rehash`

You should be good to go!

Sources: 
    1. https://osxdaily.com/2020/11/18/how-run-homebrew-x86-terminal-apple-silicon-mac/
    2. https://gorails.com/setup/osx/11.0-big-sur

