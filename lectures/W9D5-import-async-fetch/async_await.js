// Examples taken from the docs 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

function resolveAfter5Seconds() {
    
    // We return a promise object because async and await enable promise based behavior
    // In our JS Projects, we would typically be returning the data from an API response
    // More on that to come soon!
    
    return new Promise(resolve => {
        console.log("starting slow promise")

        setTimeout(function () {
            resolve("slow")
            console.log("slow promise is done")
        }, 5000)
    })
}

function resolveAfter1Second() {
    
    return new Promise(resolve => {
        console.log("starting fast promise")

        setTimeout(function () {
            resolve("fast")
            console.log("fast promise is done")
        }, 1000)
    })
}

// Normally:
function normalBehavior() {
    console.log("==NORMAL BEHAVIOR START==")
    
    resolveAfter5Seconds()

    console.log("After Slow")

    resolveAfter1Second()
    
    console.log("After Fast")
}




async function sequentialStart() {
    console.log('==SEQUENTIAL START==')

    // Execution gets here almost instantly
    await resolveAfter5Seconds()
    // We will await the completion of our async function resolveAfter5Seconds before continuing

    console.log("After Slow") // This line will only execute about 2 seconds after we invoke sequentialStart

    const resolution = await resolveAfter1Second()
    // We will await the completion of our async function resolveAfter1Second before continuing

    console.log("Resolution", resolution)

    console.log("After Fast") // This line will only execute about 3 seconds after we invoke sequentialStart

}

