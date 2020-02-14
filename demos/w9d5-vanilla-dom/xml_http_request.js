const newGifAJAX = function () {
    return $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
        success: function () {
            console.log("success!");
        },
        error: function () {
            console.log("error!!!");
        }
    });
}

const fetchNewGif = function () {
    newGifAJAX()
        .then(res => {
            const url = res.data.image_url;
            appendGif(url);
        });
};

const appendGif = newGifURL => {
    // Add gif to the display and keep track of its url
    const $gifDisplay = $('.requests');
    $gifDisplay.empty();

    const $newImage = $(`<img class="gif" src="${newGifURL}">`);
    $gifDisplay.data("url", newGifURL);
    $gifDisplay.append($newImage);

};


