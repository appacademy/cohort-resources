export const RECEIVE_TEA = "RECEIVE_TEA";

// static action
export const receiveMatchaTea = {
    type: RECEIVE_TEA,
    tea: {
      flavor: "matcha",
      amount: 6.75,
      id: 1,
    },
  };

// action creator
export const receiveTea = (tea) => {
  return {
    type: RECEIVE_TEA,
    tea,
  };
};


