export const RECEIVE_TEA = "RECEIVE_TEA";

// this action only is for green tea
export const receiveGreenTea = {
  type: RECEIVE_TEA,
  tea: {
    id: 1,
    type: "green",
    amount: 2.75
  }
};

// action creator
// implicit return 
export const receiveTea = (tea) => ({
    type: RECEIVE_TEA,
    tea
});





