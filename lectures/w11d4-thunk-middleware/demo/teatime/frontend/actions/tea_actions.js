import * as TeaApiUtil from '../util/tea_api_util';


export const RECEIVE_TEA = 'RECEIVE_TEA';
export const RECEIVE_ALL_TEAS = 'RECEIVE_ALL_TEAS';


// action
// export const receiveGreenTea = {
//   type: RECEIVE_TEA,
//   tea: {
//     id: 1,
//     flavor: 'green',
//     amount: 2.75
//   }
// }

// action creater - takes in an argument of what data you want to send in the action
export const receiveTea = (tea) => {
  return {
    type: RECEIVE_TEA,
    tea: tea
  };
};

export const receiveAllTeas = (teas) => {
  return {
    type: RECEIVE_ALL_TEAS,
    teas
  };
};

export const fetchAllTeas = () => (dispatch, getState) => {
  return TeaApiUtil.fetchTeas()
    .then(teas => dispatch(receiveAllTeas(teas)));
};

export const createTea = tea => (dispatch, getState) => {
  return TeaApiUtil.createTea(tea)
    .then(tea => dispatch(receiveTea(tea)));
};