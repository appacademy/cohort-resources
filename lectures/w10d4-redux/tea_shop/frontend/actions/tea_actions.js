export const RECEIVE_TEA = 'RECEIVE_TEA';

export const receiveGreenTea = {
    type: RECEIVE_TEA,
    tea: {
        id: 1,
        flavor: 'Green',
        amount: 2.75
    }
};

// ACTION CREATORS CREATE ACTIONS

// export const receiveTea = (tea) => {
//     return {
//         type: RECEIVE_TEA,
//         tea: tea
//     };
// };

export const receiveTea = tea => ({
    type: RECEIVE_TEA,
    tea
});