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

const vanillaAppendGif = function(newGifUrl){
    const requestDiv = document.querySelector(".requests")
    const newEl = `<img class="gif" src="${newGifUrl}" width=500px />`
    requestDiv.innerHTML = newEl
} 

const xml = new XMLHttpRequest();
const method = "get"
const url = `https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`
debugger
xml.onreadystatechange = function(){
    console.dir(this)
    debugger
    if(this.readyState === 4){
        if(this.status === 200){
            // console.log(`success! \n ${this.response}`)        ;
            // console.dir(this);

            debugger
            const parsed = JSON.parse(this.responseText) //parses our response text
            const resUrl = parsed.data.image_url
            vanillaAppendGif(resUrl)
            
            setInterval(()=> {
                window.location.hash = "REQUEST"
            },100);

        }else{
            console.log(`errors \n ${this.response}`)
        }
    }
}
debugger
xml.open(method,url); //encapsualtes the data we will be sending 
debugger
xml.send();
