# Using Github Pages to Get Javscript Project Online

* Great resource for using webpack
[webpack documentation](https://webpack.js.org/guides/getting-started/)
* Great resource for setting up github pages as it's own repo
[Github Pages Docs](https://pages.github.com/)
* Great resource for getting github pages working with webpack
[online resource](https://gist.github.com/cobyism/4730490)

# package.json example
```js
{
  "name": "virtual-graduation", //name of aplication
  "version": "1.0.0",
  "description": "",
  "private": true,
  "homepage": "https: //carlosaicrag.github.io/virtual_graduation/", //name of github pages website
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx webpack -w --mode=development",
    "predeploy": "npm run build",
    "build": "webpack --watch --mode=development",
    "deploy": "npm run build && gh-pages -d dist", 
    "pages": "gh-pages -d dist" //i beleive that this this tells github pages to unpack everything in the dist folder...
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "gh-pages": "^2.2.0",
    "webpack": "^4.42.1",
    "webpack-cli": "^3.3.11"
  }
}
```

