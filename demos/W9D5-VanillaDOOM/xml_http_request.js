// const newGifAJAX = function () {
//     return $.ajax({
//         method: 'GET',
//         url: `https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
//         success: function () {
//             console.log("success!");
//         },
//         error: function () {
//             console.log("error!!!");
//         }
//     });
// }

// const fetchNewGif = function () {
//     newGifAJAX()
//         .then(res => {
//             const url = res.data.image_url;
//             appendGif(url);
//         });
// };

// const appendGif = newGifURL => {
//     // Add gif to the display and keep track of its url
//     const $gifDisplay = $('.requests');
//     $gifDisplay.empty();

//     const $newImage = $(`<img class="gif" src="${newGifURL}">`);
//     $gifDisplay.data("url", newGifURL);
//     $gifDisplay.append($newImage);

// };

const xml = new XMLHttpRequest();
const method = 'GET';
const url = `https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`;

debugger

xml.onreadystatechange = function(){
    debugger;
    if(this.readyState === 4){
        if (this.status === 200) {
            debugger
            const parsed = JSON.parse(this.responseText);
            const resUrl = parsed.data.image_url;

            appendGif(resUrl);
            setInterval(()=> {
                window.location.hash = 'REQUEST';
            }, 100);
        }
    }
}

debugger;

xml.open(method, url);
debugger
xml.send();

const appendGif = function(newGifUrl) {
    const requestDiv = document.querySelector('.requests');
    const newEl = `<img class="gif" src="${newGifUrl}" width=500 />`;

    requestDiv.innerHTML = newEl;
};