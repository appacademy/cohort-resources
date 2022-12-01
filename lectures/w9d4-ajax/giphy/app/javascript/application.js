// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// internal rails commands
import "@hotwired/turbo-rails"
import "controllers"

// import * as GiphyApiUtil from "./giphy_api_util";
import fetchNewGif from './giphy_api_util';

window.fetchNewGif = fetchNewGif;

let newGifForm = document.querySelector('#new-gif-form');
let gifDisplay = document.querySelector('.gif-display');

newGifForm.addEventListener('submit', async e => {
  e.preventDefault();
  let gif = await fetchNewGif();
  console.log(gif);
  gifDisplay.childNodes.forEach(node => node.remove());
  let newGif = document.createElement('img');
  gifDisplay.innerHTML = gif.data.title;
  newGif.src = gif.data.images.fixed_height.url;
  gifDisplay.appendChild(newGif);
})

// ES5 vs ES6 import
// ES5 = require
// ES6 = import

// ES5 vs ES6 export
// ES5 = modules.export (limited to exporting a single object)
// ES6 = specify as many individual export statements as we want (also single export default)