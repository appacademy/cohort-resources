// //AJAX request from yesterday
  // const newGifAJAX = function() {
  //   // always explicitly return because it makes debugging easier
  //   // explicitly returning whatever is returned by the ajax method. (a promise)
  //   return $.ajax({
  //     method: 'GET',
  //     url: `https://api.giphy.com/v1/gifs/random?tag=patrick&api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
  //     success: function() {
  //       console.log("success!");
  //     },
  //     error: function() {
  //       console.log("error!!!");
  //     }
  //   });
  // };

  const fetchNewGif = function() {
    newGifAJAX()
      .then(res => {
        const url = res.data.image_url;
        appendGifOld(url);
      });
    };

  const appendGifOld = newGifURL => {
    // Add gif to the display and keep track of its url
    const $gifDisplay = $('.requests');
    $gifDisplay.empty();

    const $newImage = $(`<img class="gif" src="${newGifURL}">`);
    $gifDisplay.data("url", newGifURL);
    $gifDisplay.append($newImage);
  };


  
  
  
  // uncomment to run when page loads
  // fetchNewGif();







  // XMLHttpRequest Demo remaking the AJAX request
  
  // step 1 - create an XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // step 2 - specify HTTP method and URL
  const method = "GET";
  const siteUrl = "https://api.giphy.com/v1/gifs/random?tag=patrick&api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G";

  // step 3 - register a callback
  xhr.onreadystatechange = function() {
    console.dir(this);
    console.log(this.readyState);
    if (this.readyState === 4) {
      if (this.status === 200) {
        const parsed = JSON.parse(this.response);
        console.dir(parsed);
        const resultURL = parsed.data.image_url;
        appendGif(resultURL);
      } else {
        console.log(`error: ${this.response}`);
      }
    }
  }
  // step 4 - send off the request with optional data
  xhr.open(method, siteUrl);
  xhr.send();
  
  const appendGif = function(newGifUrl) {
    // returns node list, so we [0]
    const request = document.getElementsByClassName('requests')[0];
    const newEl = ` <img class='gif' src='${newGifUrl}' width=500>`;
    request.innerHTML = newEl;
  };
  
