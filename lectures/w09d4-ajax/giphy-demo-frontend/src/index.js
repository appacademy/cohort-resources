// Query Document
const newGifForm = document.querySelector('#new-gif-form');
const gifDisplay = document.querySelector('.gif-display');
const clearGifButton = document.querySelector('.clear');
const saveGifForm = document.querySelector('#save-gif-form');
const saveGifTitle = document.querySelector('#save-gif-title');

let currentGif;

const clearGif = () => {
  gifDisplay.childNodes.forEach(child => child.remove());
  currentGif = null;
};

const renderNewGif = url => {
  clearGif();
  currentGif = url;
  const newGif = document.createElement('img');
  newGif.src = url;
  gifDisplay.appendChild(newGif);
};

const fetchNewGif = async () => {
  const url = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=g&tag=salmon';
  try {
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });
    let gifData;
    if (res.ok) {
      gifData = await res.json();
      renderNewGif(gifData.data.images.fixed_height.url);
    } else {
      throw res;
    }
  } catch (err) {
    console.error(err);
  }
}

// gif parameter should be { title: '', url: '' }
const saveNewGif = () => {
  const gif = { title: saveGifTitle.value, url: currentGif };

  return fetch('http://localhost:3000/api/gifs', {
    method: 'POST',
    body: JSON.stringify(gif),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
};

// Add Event Listeners
newGifForm.addEventListener('submit', e => {
  e.preventDefault();
  fetchNewGif();
});

clearGifButton.addEventListener('click', clearGif);

saveGifForm.addEventListener('submit', e => {
  e.preventDefault();
  saveNewGif();
});