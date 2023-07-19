let currentGif;
const url = 'https://api.giphy.com/v1/gifs/random?api_key=3yvEbPRnIhHJhjKS9vBRQjQQDCHme7rh&rating=g&tag=cat';

const fetchNewGif = ()=> {

    return fetch(url, {headers: {'Accept': 'application/json'}})
        .then(res => {
            if(res.ok){
                return res.json();
            } else {
                throw new Error('Something went wrong')
            }

        }, fail => console.log('hello'))
        .then(body => {
            currentGif = body.data.images.original.url;
        }, fail => console.log('failure callback'))
        .catch(err => console.error(err))


}