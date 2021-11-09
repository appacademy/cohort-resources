export const RECEIVE_TEA = "RECEIVE_TEA";

// static action
// export const receiveGreenTea = {
//     type: RECEIVE_TEA, 
//     tea: {
//         flavor: "green", 
//         cost: 2.75, 
//         id: 1
//     }
// }

// dynamic action creator
// export const receiveTea = (tea) => {
//     return {
//         type: RECEIVE_TEA, 
//         tea: tea
//     };
// }

// with syntactic sugar
export const receiveTea = (tea) => ({
    type: RECEIVE_TEA, 
    tea
})

// coming up next...
// RECEIVE_TEAS
// DELETE_TEA
// etc.
// fn receiveTeas
// fn deleteTea
// etc.