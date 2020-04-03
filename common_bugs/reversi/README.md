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
  
  * `launch.json` should look like this: 
  ``` javascript
  {
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Mocha Tests",
      "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
      "args": [
        "-u",
        "bdd",
        "--timeout",
        "999999",
        "--colors",
        "${workspaceFolder}/test"
      ],
      "internalConsoleOptions": "openOnSessionStart",
      "skipFiles": [
        "<node_internals>/**"
      ]
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${file}"
    },
    {
      "name": "Launch index.html",
      "type": "chrome",
      "request": "launch",
      "file": "${workspaceFolder}/index.html"
    }
}

  ```