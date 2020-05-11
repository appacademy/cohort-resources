# ruby 
* if you get the bug "bundle exists in this ruby version" 
    * gem install bundler 
    * bundler needs to be reinstalled for every ruby version that you have 

# rails 
* students not able to do html snippets in erb file.
* add this to settings.json
```javascript
"emmet.includeLanguages": {
        "html.erb": "html",
        "html": "erb",
        "erb": "html",
        "jsx": "html",
        "jsx": "js"
    },
```
* rails c not opening and getting hung up 
    * type "spring stop" in the terminal

# react/redux

## Bug: Gem::Ext::BuildError Failed to build gem native extension
### Solution 
Tends to happen when someone has updated their operating system. The solution is usually to run xcode-select --install to install the XCode Command Line Developer Tools. Note that this installation takes some time (10-20 mins). Once done, they should be able to successfully bundle install.
