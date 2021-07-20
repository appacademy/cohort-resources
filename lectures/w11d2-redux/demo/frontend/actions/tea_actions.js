export const RECEIVE_TEA = 'RECEIVE_TEA';

// action
export const receiveGreenTea = {
  type: RECEIVE_TEA,
  tea: {
    id: 1,
    flavor: 'green',
    amount: 2.75
  }
}

// action creater - takes in an argument of what data you want to send in the action
export const receiveTea = (tea) => {
  return {
    type: RECEIVE_TEA,
    tea: tea
  }
}