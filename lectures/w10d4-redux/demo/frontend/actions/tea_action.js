export const RECEIVE_TEA = "RECEIVE_TEA";

// static action
export const receiveJasmineTea = {
    type: RECEIVE_TEA,
    tea: {
        id: 1,
        flavor: "Jasmine",
        amount: 3.33
    }
};

// action creators
export const receiveTea = (tea) => {
    return {
        type: RECEIVE_TEA,
        tea
        // tea: tea
    }
 }