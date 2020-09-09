## Please follow these instructions closely to setup WSL on your machine

1. Enable WSL
    + Open the “Start” menu and search for “Turn Windows features on or off”
        + Note that there isn’t a dedicated search field - just start typing
    + Scroll down and check the box next to “Windows Subsystem for Linux”
2. Download Ubuntu 18.04 LTS from Microsoft Store
    + https://www.microsoft.com/en-us/p/ubuntu-1804-lts/
3. Update default software
    + `sudo apt-get update`
    + `sudo apt-get upgrade`
    + `sudo apt-get dist-upgrade`
    + `sudo apt-get autoremove`
4. Install VS Code in Windows
    + Install WSL extension when prompted
5. Configure git
    + `git config --global user.name “NAME”`
    + `git config --global user.email “EMAIL@EMAIL.COM”`
6. Install rbenv
    + `sudo apt install git curl libssl-dev libreadline-dev zlib1g-dev autoconf bison build-essential libyaml-dev libreadline-dev libncurses5-dev libffi-dev libgdbm-dev`
    + `curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-installer | bash`
7. Add following lines to ~/.bashrc
    + `export PATH=“$HOME/.rbenv/bin:$PATH”`
    + `eval “$(rbenv init -)”`
8. Update your terminal
    + `source ~/.bashrc`
9. Install ruby
    + `rbenv install 2.5.1`
    + `rbenv global 2.5.1`
    + `rbenv rehash`
10. Install gems
    + `gem install bundler pry byebug`
    + `gem install rails -v 5.2.3`
11. Install nvm
    + `curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh`
    + `bash install_nvm.sh`
    + `nvm install 10.13.0`
    + `nvm use 10.13.0`
12. Update your terminal
    + `source ~/.bashrc`
13. Install postgresql
    + `sudo apt-get install postgresql libpq-dev`
14. Add helpful aliases to ~/.bashrc
    + `alias pgstart=’sudo service postgresql start’`
    + `alias pgrun=’sudo -u postgres psql’`
    + `alias pgrestart=’sudo service postgresql restart’`
15. Update your terminal
    + `source ~/.bashrc`
16. Configure postgresql
    + Update /etc/postgresql/*.*/main/pg_hba.conf
        + local all postgres trust
    + Restart postgresql service
        + `sudo service postgresql restart`
17. Install sqlite3
    + `sudo apt-get install sqlite3 libsqlite3-dev`
18. Set up correct user permissions for postgresql
    + Please refer to the stack overflow below if you are getting a `FATAL: role "YOUR_USER_NAME" does not exist` error
        + https://stackoverflow.com/questions/16973018/createuser-could-not-connect-to-database-postgres-fatal-role-tom-does-not-e/16974197#16974197

General Tips
Use `sudo nano` to open and edit files inside the terminal. After editing, use `Ctrl+X` to close and `Y` to save. Hit `Enter` to proceed without changing the file name.
Windows files are accessible through `~/../../mnt/c/` - you may want to set up an alias that will take you here
