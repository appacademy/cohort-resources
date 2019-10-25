import * as TeaAPIUtil from '../utils/tea_api_util';
export const RECEIVE_TEA = "RECEIVE_TEA";
export const RECEIVE_ALL_TEAS = "RECEIVE_ALL_TEAS";


// static action
// export const receiveMatchaTea = {
//     type: RECEIVE_TEA,
//     tea: {
//       flavor: "matcha",
//       amount: 6.75,
//       id: 1,
//     },
//   };

// action creators
const receiveTea = (tea) => {
  return {
    type: RECEIVE_TEA,
    tea,
  };
};

const receiveAllTeas = (teas) => {
  return {
    type: RECEIVE_ALL_TEAS,
    teas
  }
}

// thunk action creator
export const fetchAllTeas = () => (dispatch) => {
  return TeaAPIUtil.fetchAllTeas()
    .then(teas => dispatch(receiveAllTeas(teas)))
} 

export const createTea = (tea) => (dispatch) => {
  return TeaAPIUtil.createTea(tea)
    .then(resTea => dispatch(receiveTea(resTea)))
}