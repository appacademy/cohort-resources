const myFirstPromise = new Promise((resolve, reject) =>{
    // resolve will pass the argument to .then
    // reject passes the arg to .catch
    setTimeout(() => {
        resolve("failure")
        // reject("success")
    }, 3000)
    ;});

myFirstPromise
// .then will keep going as long as these are successful
.then((successMessage) => console.log(`Yaay!! ${successMessage} first then`))
.then((successMessage) => console.log(`Yaay!! ${successMessage} second then`))
.catch((failureMessage) => console.log(`Booo !! ${failureMessage}`))