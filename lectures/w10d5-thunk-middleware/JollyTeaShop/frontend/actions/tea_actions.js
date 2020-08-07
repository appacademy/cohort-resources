import * as TeaAPIUtil from '../utils/tea_api_utils';

// Action Constants
export const RECEIVE_TEA = 'RECEIVE_TEA';
export const RECEIVE_ALL_TEAS = 'RECEIVE_ALL_TEAS';


// export const receiveGreenTea = {
//     type: RECEIVE_TEA,
//     tea: {
//         id: 1,
//         flavor: 'Green',
//         amount: 2.75
//     }
// };

// ACTION CREATORS CREATE ACTIONS

// export const receiveTea = (tea) => {
//     return {
//         type: RECEIVE_TEA,
//         tea: tea
//     };
// };

// Regular Action Creator

export const receiveTea = tea => {
  // debugger;
  return {
    type: RECEIVE_TEA,
    tea: tea
  }
};

export const receiveAllTeas = teas => (
  {
    type: RECEIVE_ALL_TEAS,
    teas
  }
)

// Thunk Action Creators

export const fetchAllTeas = () => (dispatch) => {
  return TeaAPIUtil.fetchAllTeas()
    .then( teas => dispatch(receiveAllTeas(teas)));
};

export const createTea = (tea) => (dispatch) => {
  // debugger;
  return TeaAPIUtil.createTea(tea)
    .then( tea => dispatch(receiveTea(tea)));
};
