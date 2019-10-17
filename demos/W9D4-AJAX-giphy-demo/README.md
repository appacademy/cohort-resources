# W6D3 AJAX Demo

## Promise Demo: Use `promises.js` file as a skeleton for this demo. It should have the below code.

```js
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const questions = [
    "Why do we bake cookies, and cook bacon?\n",
    "What is the true meaning of life?\n",
    "Will 'Make Change' be on A05?\n"
];

// We want our reader to reach each question, and get an answer before moving onto the next question

// This will not work
questions.forEach(question => {
    reader.question(question, (ans) => {
        console.log(ans);
    });
});

// MADNESS!
reader.question(questions[0], (ans) => {
    console.log(ans);
    reader.question(questions[1], (ans) => {
        console.log(ans);
        reader.question(questions[2], (ans) => {
            console.log(ans);
        });
    });
```

* We want our reader to read each question and get an answer before moving onto the next question.
* This won't work because the synchronous iteration conflicts with our async code. This will never work, so how do we solve this issue? Nested callbacks?
* This creates callback hell! It is impossible to read and unrealistic if we have a lot of callbacks that rely on each other.

### Promises
* If you remember from readings and some of the points I made earlier, you could use promises to make this much simpler. 
* What exactly is a promise?
  * Promise is a constructor that takes a single callback.
  * This callback takes 1 or 2 callbacks, call them callbackbacks.
* Let's look at a simple version of a promise in the Chrome Console using a timeout. We can use setTimeout to simulate some async code. 
* We don't need to use reject because setTimeout will not fail. But if a Promise does not resolve, and there is no reject callback, then it will always be pending.
* .then takes the resolve callback - resolve is not defined until .then (just a param)

```js
const wait = () => new Promise(resolve => setTimeout(resolve, 4000));
wait()
  .then(() => console.log("Whoop, there it is!"))
  .then(() => console.log("Tag team, back again");
```
* .then() returns a promise and takes up to two arguments - callback functions for the success and failure of a promise.

Now, let's fix our question-asker to use a promies!
```js
function questionPromisified(question) {
    return new Promise((resolve, reject) => {
        reader.question(question, ans => resolve(ans));
    });
}
```

Let's rewrite our callback hell using promises
```js
questionPromisified(questions.shift())
    .then(ans => {
        console.log(ans);
        return questionPromisified(questions.shift());
    })
    .then(ans => {
        console.log(ans);
        return questionPromisified(questions.shift());
    })
    .then(ans => {
        console.log(ans);
        reader.close();
    });
```

* Test your new code by running `node promises.js`


## AJAX Demo: Use the giphy_demo rails project for the AJAX demo
* Let's take a look at root.html.erb - we will always be on this page (look at the routes).
* Now, let's take a look at the controllers - they are very similar except they are all responding with JSON objects.
* This one page is going to be manipulated by Javascript. In order to test our app in the browser, we need a bundle. Is it clear what the bundle is?
  * It is all of the JS code compressed into one file that the browser can handle - w/out webpack we couldn't use the browser because it can't candle multiple files

* Start rails server and webpack and open local host to display current app.
  * `bundle install`
  * `rails db:setup`
  * `rails s`
  * `npm install`
  * `npm start`

* Open localhost:3000 and explain the app. 
* Click on the get giphy button and explain the cycle.
  * Button with an event listener for click
  * When we click we make an AJAX call, wait for a promise
  * Get the data from the AJAX request and somehow display it on the page

* Go back to the rails project and walk through the code/method for getting a giphy and displaying on a page

* Now we can call this function in our event handler

* Add code from the `appendGif` function to the clear gif button
```js
const $gifDisplay = $('.gif-display');
  $gifDisplay.empty();
```

## Now let's complete the other functionalities of the app - save gif and fetch saved gif

* add to `gif_api_util.js`
```js
saveGifAJAX: function(gifArg) {
  return $.ajax({
    method: "POST",
    url: "/gifs",
    data: {
      gif: gifArg
    }
  });
},
fetchSavedGifAJAX: function(titleArg) {
  return $.ajax({
    method: 'GET',
    url: `/gifs/${titleArg}`
  });
}
```

* add to `giphy_lite.js`
```js
const saveGif = e => {
  const $input = $('#save-gif-title');
  const title = $input.val();
  $input.val('');

  const gif = {
    title: title,
    url: $('.gif-display').data('url')
  };
  
  const messages = $('.messages');

  const success = (explicitResponse) => {
    //appended to response to messages
    messages.text('you did it!');
    setTimeout(() => messages.empty(), 5000);
  };
  
  const failure = (errors) => {
    //appended errors to messages
    messages.text(errors.responseJSON[0]);
    setTimeout(() => messages.empty(), 5000);
  };

  GifApiUtil.saveGifAJAX(gif)
    .then(success, failure);
};
```

* Now we can also add this to the submit event handler for the save-gif-form
* Attempt to save a blank gif - will get the error message
* Then generate a gif and save one

```js
$('#save-gif-form').on('submit', e => {
    e.preventDefault();
    e.stopPropagation();
    saveGif();
  });
```

* Let's be able to retreive the saved gif

```js
const fetchSavedGif = () => {
  const $input = $('#old-gif-query');
  const title = $input.val();
  $input.val('');

  GifApiUtil.fetchSavedGifAJAX(title)
    .then(
      (response) => {
        appendGif(response.url);
      },
      (errors) => {
        console.log("gif not found!");
      };
    );
};
```

* Lastly, we can add our fetchSavedGif function to the submit event handler for the `old-gif-form`

```js
 $('#old-gif-form').on('submit', e => {
    e.preventDefault();
    // Fetch saved GIF
    fetchSavedGif();
  });
  ```

