import * as TeaApiUtil from "../util/tea_api_util";
export const RECEIVE_TEA = "RECEIVE_TEA";
export const RECEIVE_ALL_TEAS = "RECEIVE_ALL_TEAS";


// this action only is for green tea
// export const receiveGreenTea = {
//   type: RECEIVE_TEA,
//   tea: {
//     id: 1,
//     type: "green",
//     amount: 2.75
//   }
// };

// action creator
// implicit return 
export const receiveTea = (tea) => ({
    type: RECEIVE_TEA,
    tea
});

export const receiveAllTeas = (teas) => ({
  type: RECEIVE_ALL_TEAS,
  teas
});

//  ----------THUNK ACTION CREATORS----------

export const fetchAllTeas = () => dispatch => {
  return TeaApiUtil.fetchAllTeas()
    .then( teas => dispatch(receiveAllTeas(teas)) );
};

export const createTea = (tea) => dispatch => {
  return TeaApiUtil.createTea(tea)
    .then( tea => dispatch(receiveTea(tea)) );
};

// export const fetchAllTeas = () => {
//   return dispatch => {
//     return TeaApiUtil.fetchAllTeas()
//       .then( teas => dispatch(receiveAllTeas(teas)) );
//   };
// };

// export const createTea = (tea) => {
//   return (dispatch) => {
//     return TeaApiUtil.createTea(tea)
//       .then( tea => dispatch(receiveTea(tea)) );
//   };
// };







