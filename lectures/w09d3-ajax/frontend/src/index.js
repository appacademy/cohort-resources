console.log('webpack is working');

const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=g&tag=cat';
let currentGif = null;

// querySelectors
const fetchNewGifForm = document.querySelector('#new-gif-form');
const saveGifForm = document.querySelector('#save-gif-form');
const loadGifForm = document.querySelector('#load-gif-form');
const gifDisplay = document.querySelector('.gif-display');
const clearButton = document.querySelector('.clear');

// fetchNewGif

// function fetchNewGif() {
//   return fetch(giphyUrl)
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw res;
//       }
//     })
//     .then(gifInfo => {
//       const newGif = document.createElement('img');
//       newGif.src = gifInfo.data.images.original.url;
//       gifDisplay.appendChild(newGif);
//     })
//     .catch(err => console.error(err));
// };

async function fetchNewGif() {
  try {
    const res = await fetch(giphyUrl);
    if (res.ok) {
      const gifInfo = await res.json();
      renderNewGif(gifInfo.data.images.original.url);
    } else {
      throw res;
    }
  } catch (err) {
    console.error(err);
  }
};

// clearGif

function clearGif() {
  currentGif = null;
  for (let child of gifDisplay.children) {
    child.remove();
  }
};

// renderNewGif

function renderNewGif(url) {
  const newGif = document.createElement('img');
  newGif.src = url;
  clearGif();
  currentGif = url;
  gifDisplay.appendChild(newGif);
};

// saveGif

function postGif(gifObject) { // gifObject is something like { title: ???, url: ??? }
  return fetch('http://localhost:3000/api/gifs', {
    method: 'POST',
    body: JSON.stringify(gifObject),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(res => {
    if (res.ok) {
      alert('GIF successfully saved');
    } else {
      console.error('something went wrong');
    }
  });
};

window.postGif = postGif;

// eventListeners
fetchNewGifForm.addEventListener('submit', e => {
  e.preventDefault();
  fetchNewGif();
});

clearButton.addEventListener('click', clearGif);