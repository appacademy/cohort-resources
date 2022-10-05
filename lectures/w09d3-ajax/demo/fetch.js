// Example GET method implementation:

async function getData(url = 'https://jsonplaceholder.typicode.com/users') {
    // We set a default value for the url to our api. This is recommended, but not required.

    // We await our fetch, which will return a promise object
    // Because we're using the await keyword, 
        // we have declared getData with to be an async function
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json() 
    // response.json() parses JSON response into native JavaScript objects
    // response.json() is asynchronous
    return data
}

getData()
    .then(data => {
        // If the fetch was successful, here we can manipulate the data we received
        console.log(data);
    })
    .catch(error => {
        // If our fetch was unnsuccessful, here we can handle our error(s)
        console.error('There has been a problem with your fetch operation: ', error);
    }
);