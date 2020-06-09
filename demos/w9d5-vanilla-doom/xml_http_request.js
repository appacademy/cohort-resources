// // //AJAX request from yesterday
//   const newGifAJAX = function() {
//     // always explicitly return because it makes debugging easier
//     // explicitly returning whatever is returned by the ajax method. (a promise)
//     return $.ajax({
//       method: 'GET',
//       url: `https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
//       success: function() {
//         console.log("success!");
//       },
//       error: function() {
//         console.log("error!!!");
//       }
//     });
//   };

//   const fetchNewGif = function() {
//     newGifAJAX()
//       .then(res => {
//         const url = res.data.image_url;
//         appendGifOld(url);
//       });
//     };

//   const appendGifOld = newGifURL => {
//     // Add gif to the display and keep track of its url
//     const $gifDisplay = $('.requests');
//     $gifDisplay.empty();

//     const $newImage = $(`<img class="gif" src="${newGifURL}">`);
//     $gifDisplay.data("url", newGifURL);
//     $gifDisplay.append($newImage);
//   };


  
  
  
  // uncomment to run when page loads
  // fetchNewGif();







  // XMLHttpRequest Demo remaking the AJAX request
  
  // step 1 - create an XMLHttpRequest object
  // step 2 - specify HTTP method and URL
  // step 3 - register a callback
  // step 4 - send off the request with optional data
  
  const XML = new XMLHttpRequest(); //native JS ajax call 
  const method = "get"; //not case sensitive
  const url = "https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G";

  XML.onreadystatechange = function(){ //listener given to us by the object
    console.log(`ready state: ${this.readyState}`); //4 === done 
    console.log(`status: ${this.status}`); 
    debugger
    if(this.readyState === 4){
      if(this.status === 200){
        // console.log(`success! ${this.response}`)
        debugger
        // console.dir(this) //console.dir allows for interaction
        const resURL = JSON.parse(this.responseText).data.image_url;
        appendGif(resURL);

      } else {
        console.log(`Error! ${this.response}`)
      }
    }
  }

  XML.open(method, url);
  XML.send();


  const appendGif = function(newGifUrl) {
    const reqDiv = document.getElementById("REQUEST");
    const newElement = `<img class="gif" src="${newGifUrl}" width=500> `;
    reqDiv.innerHTML = newElement; 
  };
  
