export const RECEIVE_TEA = 'RECEIVE_TEA';

export const receiveGreenTea = {
    type: RECEIVE_TEA,
    tea: {
        flavor: 'Green',
        amount: 2.75,
        id: 1
    }
}

// Action Creator, takes payload data and sets type and payload. Returns Action Object
export const receiveTea = (tea) => {
    // debugger;
    return {
        type: RECEIVE_TEA,
        tea // => tea: tea
    }
}
