export const fetchAllTeas = () => {
    return $.ajax({
        url: `/api/teas`,
        method: 'GET'
    })
}

export const createTea = (tea) => {
    return $.ajax({
        url: `/api/teas`,
        method: 'POST',
        data: { tea: tea }
    })
}

// store.dispatch({
//     type: "RECEIVE_TEA",
//     tea: {
//         flavor: "Milk Tea",
//         description: "Boba"
//     }
// });

// store.dispatch(() => {
//     return $.ajax({
//         url: `/api/teas`,
//         method: 'GET'
//     });
// });