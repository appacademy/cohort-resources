export const RECEIVED_TEA = "RECEIVED_TEA";
export const REMOVED_TEA = "REMOVED_TEA";

    // tea: {
    //     flavor: "green",
    //     amount: 5.99,
    //     id:1
    // }
export const receivedTea = (tea) => {
    return {
        type: RECEIVED_TEA,
        tea: tea
    };
}




