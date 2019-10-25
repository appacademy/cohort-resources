export const fetchAllTeas = () => {
    return $.ajax({
        url: `/api/teas`, // doesn't have to be back-ticks
        method: 'GET' // not case-sensitive
    })
}

// const ajaxCall = fetchAllTeas();
// const promise = ajaxCall();
// promise.then((res) => `I would love to update my state now with ${res}`)

export const createTea = (tea) => {
    return $.ajax({
        url: `/api/teas`, // doesn't have to be back-ticks
        method: 'POST',
        data: {tea}  // same as { tea: tea }
    })
}

// {   
//     tea = {
//         flavor: 'green',
//         amount: 2.50
//     }
// } 