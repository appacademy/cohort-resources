export const RECEIVE_TEA = "RECEIVE_TEA";

// ____static action____
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
    debugger
    return {
        type: RECEIVE_TEA,
        tea
        // tea: tea
    }
 }