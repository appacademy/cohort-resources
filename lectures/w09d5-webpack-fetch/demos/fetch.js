// Example GET method implementation:

// async function getData(url = 'https://jsonplaceholder.typicode.com/users') {
//     // We set a default value for the url to our api. This is recommended, but not required.

//     // We await our fetch, which will return a promise object
//     // Because we're using the await keyword, 
//         // we have declared getData with to be an async function
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     const data = await response.json() 
//     // response.json() parses JSON response into native JavaScript objects
//     // response.json() is asynchronous
//     return data
// }

// getData()
//     .then(data => {
//         // If the fetch was successful, here we can manipulate the data we received
//         console.log(data);
//     })
//     .catch(error => {
//         // If our fetch was unnsuccessful, here we can handle our error(s)
//         console.error('There has been a problem with your fetch operation: ', error);
//     }
// );

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // when the first promise resolves, we invoke the success callback with the response
    if (!response.ok) {
      // A failed request (like a 404) won't reject, so we have to check if the response is ok
      throw new Error('Network response was not ok');
      // This error will be caught by our .catch if thrown
    }
    return response.json();
    // note this needs to end this promise, as response.json occurs asynchronously
    // They'll see an example of using `await` instead in the demo!
  })
  .then(data => {
    // When we've pulled our data from a successful response, we console log that data
    console.log(data);
    showGif(data.url)
  })
  .catch(error => {
    // If an error was thrown at any point we'll console log the error
    // The "network response was not okay" will only be hit if we went to an existing domain but with an error code returned from our request
    // If we had a typo in our domain (like 'http://exmple.com/movies.json') the fetch promise would fail, so we'd have a different error
    console.error(error);
  });