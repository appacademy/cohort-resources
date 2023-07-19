
//Util
let currentGif;
const url = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=g&tag=cat';

//Document queries
const gifDisplay = document.querySelector('.gif-display');
const newGifForm = document.querySelector('#new-gif-form');
const saveGifTitle = document.getElementById('save-gif-title');
const saveGifForm = document.getElementById('save-gif-form');
const oldGifForm =document.getElementById('old-gif-form');
const oldGifQuery = document.getElementById('old-gif-query');
const clearButton = document.querySelector('.clear');

const fetchNewGif = async e => {
    e.preventDefault();
    try{
        const res = await fetch(url, {headers: {'Accept': 'application/json'}});
        if(res.ok){
            const data = await res.json();
            let newGif = document.createElement('img');
            newGif.src = data.data.images.original.url;
            currentGif = data.data.images.original.url;
            gifDisplay.childNodes.forEach(child => child.remove());
            gifDisplay.appendChild(newGif);
        } else {
            throw new Error(res)
        } 
    }catch (err){
        console.error(err);
    }
}


// const fetchNewGif = ()=> {

//     return fetch(url, {headers: {'Accept': 'application/json'}})
//         .then(res => {
//             if(res.ok){
//                 return res.json();
//             } else {
//                 throw new Error('Something went wrong')
//             }

//         }, fail => console.log('hello'))
//         .then(body => {
//             currentGif = body.data.images.original.url;
//         }, fail => console.log('failure callback'))
//         .catch(err => console.error(err))


// }


//saveGif

const saveGif = async gif => {
    //expect gif = {title: 'whatever', url: 'url.com'}
    const res = await fetch('/api/gifs', {
        method: 'POST',
        body: JSON.stringify({gif}), //{gif: gif}
        headers:{'Content-Type': 'application/json', 'Accept': 'application/json'}
    });
    if(res.ok){
        saveGifTitle.value = '';
        setTimeout(()=>alert('Saved successfully'), 50);
    } else {
        alert('Title of gif already taken')
    }
}

const handleSaveGif = e =>{
    e.preventDefault();
    saveGif({title: saveGifTitle.value, url: currentGif})
}

const fetchSavedGif = async e => {
    e.preventDefault();
    const title = oldGifQuery.value;
    const res = await fetch(`/api/gifs/${title}`, {
        method: 'GET',
        headers: {'Accept': 'application/json'}
    });
    if(res.ok){
        oldGifQuery.value = '';
        const data = await res.json();
        let newGif = document.createElement('img');
        newGif.src = data.url;
        currentGif = data.url;
        gifDisplay.childNodes.forEach(child => child.remove());
        gifDisplay.append(newGif);
    } else {
        alert('Not found')
    }

}

const handleClear = e => {
    e.preventDefault();
    gifDisplay.childNodes.forEach(child => child.remove())
}




//Event listeners

newGifForm.addEventListener('submit', fetchNewGif);
saveGifForm.addEventListener('submit', handleSaveGif);
oldGifForm.addEventListener('submit', fetchSavedGif);
clearButton.addEventListener('click', handleClear)
