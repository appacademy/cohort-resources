// an action is an object that has a type key 


// ex = {
//     type: "SOMETHING",
//     date:{}
// }


// export const receiveGreenTea = {
//     type: "RECEIVE_TEA",
//     tea: {
//         flavor:"green tea",
//         amount: 2.99,
//         id:4
//     }
// }


// let greenTea = {
//             flavor:"green tea",
//             amount: 2.99,
//             id:4
// }

export const RECEIVE_TEA = "RECEIVE_TEA"

export const receiveTea = (tea) =>{
    return {
        type:RECEIVE_TEA,
        tea:tea 
    }
}