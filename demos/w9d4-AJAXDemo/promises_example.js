let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, 
    // and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function () {
        resolve("Success!")  // Yay! Everything went well!
        reject("failure!") //Boo! it didnt go well
    }, 0)
    // resolve("Success!")
})

// myFirstPromise.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, 
//     // it probably will be.
//     console.log("Yay! " + successMessage)
// })
// .catch((failureMessage) => {
//     console.log("boo!" + failureMessage) //.fail won't work
// });

myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, 
    // it probably will be.
    console.log("Yay! " + successMessage)
})
.then( ()=>{
    // setTimeout( ()=>{
    //     console.log('yes')
    // }, 0)
    console.log('yes')
})
.catch( ()=>{
    console.log('failure')
})
console.log('banana') //runs first 