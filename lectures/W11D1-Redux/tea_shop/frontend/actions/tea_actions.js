export const RECEIVE_TEA = "RECEIVE_TEA";


// this is basic
export const receivedGreenTea = {
    type: RECEIVE_TEA,
    tea: {
        flavor: "green",
        amount: 2.75,
        id:1
    }
}
// this is the ideal way
export const receiveTea = (tea) => {
    return {
        type: RECEIVE_TEA,
        tea 
    }
}