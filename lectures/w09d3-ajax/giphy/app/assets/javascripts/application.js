console.log('ready to gif sir');

// DOCUMENT QUERIES
const gifDisplay = document.querySelector('.gif-display');
const newGifForm = document.querySelector('#new-gif-form');
const saveGifForm = document.querySelector('#save-gif-form');
const saveGifTitle = document.querySelector('#save-gif-title');


// UTIL FUNCTIONS
const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=G&tag=spongebob';
let currentGif;

// fetchNewGif
const fetchNewGif = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch(giphyUrl, { 
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      let data = await res.json();
      let newGif = document.createElement('img');
      newGif.src = data.data.images.original.url;
      currentGif = data.data.images.original.url;
      if (gifDisplay.children) {
        gifDisplay.childNodes.forEach(child => child.remove());
      }
      gifDisplay.appendChild(newGif);
    } else {
      throw new Error(res);
    }
  } catch (err) {
    console.error(err);
  }
};

// const fetchNewGif = () => (
  //   fetch(giphyUrl, { headers: { 'Accept': 'application/json' } })
  //     .then(res => {
    //       if (res.ok) {
      //         return res.json();
      //       } else {
        //         throw new Error('Something went wrong');
        //       }
        //     }, fail => console.log)
        //     .then(body => {
          //       newGif = body.data.images.original.url;
          //     }, fail => console.log(fail))
          //     .catch(fail => console.error(fail))
          // );
          
// saveGif
const saveGif = async gif => {
  // expect gif = { title: 'blah', url: 'alsoblah' }
  let res = await fetch('/api/gifs', {
    method: 'POST',
    body: JSON.stringify({ gif }),
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
  });
  if (res.ok) {
    saveGifTitle.value = '';
    alert('Successfully saved')
  } else {
    alert('Something went wrong')
  }
};

const handleSaveGif = e => {
  e.preventDefault();
  saveGif({title: saveGifTitle.value, url: currentGif });
};

// fetchSavedGif
          
// BIND EVENTS
newGifForm.addEventListener('submit', fetchNewGif);
saveGifForm.addEventListener('submit', handleSaveGif);