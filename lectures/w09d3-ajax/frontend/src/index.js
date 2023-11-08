console.log('webpack is working');

const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=g&tag=spongebob';

const gifDisplay = document.querySelector('.gif-display');
const newGifForm = document.querySelector('#new-gif-form');
const saveGifForm = document.querySelector('#save-gif-form');
const gifTitle = document.querySelector('#save-gif-title');
const clearGifButton = document.querySelector('.clear');

let currentGif = null;

async function fetchNewGif() {
  try {
    const res = await fetch(giphyUrl);
    if (res.ok) {
      const body = await res.json();
      const url = body.data.images.fixed_height.url;
      currentGif = url;
      renderNewGif(currentGif);
    } else {
      throw res;
    }
  } catch(err) {
    console.log(err);
  }
}

async function saveGif(gif) {
  // gif should be an object with `title` and `url` attributes
  const res = await fetch('http://localhost:5000/api/gifs', {
    method: 'POST',
    body: JSON.stringify(gif),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}

function renderNewGif(url) {
  const newGif = document.createElement('img');
  newGif.src = url;
  clearGif();
  gifDisplay.appendChild(newGif);
}

function clearGif() {
  for (child of gifDisplay.children) {
    currentGif = null;
    child.remove();
  }
}

newGifForm.addEventListener('submit', e => {
  e.preventDefault();
  fetchNewGif();
});

clearGifButton.addEventListener('click', e => {
  e.preventDefault();
  clearGif();
});

saveGifForm.addEventListener('submit', e => {
  e.preventDefault();
  saveGif({ title: gifTitle.value, url: currentGif });
  gifTitle.value = '';
})