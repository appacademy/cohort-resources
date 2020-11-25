export const RECEIVE_TEA = 'RECEIVE_TEA';

// not dynamic
export const receiveHojiCha = {
    type: RECEIVE_TEA,
    tea: { flavor: 'hoji cha', amount: 5, id: 1 } // <= payload
};

// more dynamic
// ACTION CREATOR => creates actions
export const receiveTea = (tea) => {
    return {
        type: RECEIVE_TEA,
        tea // same as tea: tea
    }
}