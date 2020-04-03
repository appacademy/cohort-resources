# node version 
  * make sure Node is version 10.13.0(`npm test` will not give you any errors for this bug)
    * check both VSCode terminal and computer terminal
    * if both do not use v10.13.0, run `nvm use 10.13.0`

# debugger 
  * press play button to run debugger; `npm test` will not run the debugger 
  * double check debugger setup in `launch.json`
    * use `${workspaceFolder}` and NOT `${file}`
    * the mocha configuration may automatically alter `launch.json` 
  * when running the debugger, check args key (which points to an array)
    * has `bdd` and Not `tdd` as an element 