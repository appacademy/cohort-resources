![byebug](../images/byebug.png)
* https://stackoverflow.com/questions/4304438/gem-install-failed-to-build-gem-native-extension-cant-find-header-files 
* this is an issue on windows machines when trying to install the byebug gem
* if it doesnt fix when you do the command that they reccomend then try this: `apt-get install ruby-all-dev` 

## MacUserComputer:Gems z$ gem install pryERROR: While executing gem ... (Gem::FilePermissionError)You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory.

* This is an issue with switching to zshell after having set-up with bash

* Test this by having student type `source ~/.bashrc` and running `pry`. If `pry` works here, it is a zshell error.

* The easiest fix is to switch back to `bash`. First have the student `cd` to root then type `chsh -s /bin/bash`. Opening a new terminal tab should show `bash` and not `zsh` at the top, and `pry` should now open successfully.

## Rails 6 installed 

* First, run `gem uninstall rails` and select `all versions` when prompted
    - After this, `rails -v` should return an error.

* Next, run `gem uninstall railties` and select `y` when prompted to remove all dependencies.

* Finally, run `gem install rails --version 5.2.3`

* Voila! `rails -v` should no longer have `rails 6.X.X`
## When Byebug runs on external terminal but not VSCode terminal(Mac)

* In the VSCode terminal, students might see this error `require: cannot load such file --byebug(Load Error)`

* Check if student can switch VSCode terminal to run using `bash`
  * To check, click on the dropdown in VSCode terminal and see if they can click on `Select Default Shell` and then select `bash bin/bash` as their default terminal
    * Close all VSCode terminals and re-open to see if it's running on `bash`. If yes, the switch was successful. 

* If unable to switch VSCode terminal to `bash` using the dropdown, the easiest fix is to check `settings.json` and make sure they have
` "terminal.integrated.automationShell.osx": ""` and not commands that may point to incorrect operating systems
  * example: `"terminal.integrated.shellArgs.linux"` --> delete this out 

## If students are recieving a bunch of warnings when running any rails commands or while runnings through specs 
* run `gem pristine --all`

## Unable to Bundle Install FFI

![ffi](../images/ffi-bug.png)

* To solve this run `LDFLAGS="-L/usr/local/opt/libffi/lib" PKG_CONFIG_PATH="/usr/local/opt/libffi/lib/pkgconfig" gem install ffi -v 'X.X.X'` where X.X.X is the version number found in the error message
* Mac only to our knowledge

## Unable to install nokogiri when you bundle install in rails project 
* to solve this go ahead and try: 
1. brew install libxml2
2. bundle config build.nokogiri "--use-system-libraries --with-xml2-include=/usr/local/opt/libxml2/include/libxml2"
3. bundle install

## `gem` and `bundle install` commands to rubygems.org get stuck and timeout
#### For Mac OS do this:
![mac-fix](../images/mac-gem-timeout-fix.png)
#### For Linux do this:
![linux-fix](../images/linux-gem-timeout-fix.png)