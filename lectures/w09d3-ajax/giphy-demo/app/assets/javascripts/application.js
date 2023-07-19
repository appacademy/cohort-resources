
//Util
let currentGif;
const url = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=g&tag=cat';

//Document queries
const gifDisplay = document.querySelector('.gif-display');
const newGifForm = document.querySelector('#new-gif-form')


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


//Event listeners

newGifForm.addEventListener('submit', fetchNewGif)