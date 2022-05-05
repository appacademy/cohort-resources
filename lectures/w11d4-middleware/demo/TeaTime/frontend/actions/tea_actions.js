import * as TeaApiUtil from '../utils/tea_utils';
export const RECEIVE_TEA = 'RECEIVE_TEA';
export const RECEIVE_TEAS = 'RECEIVE_TEAS';

// export const receiveGreenTea = {
//   type: RECEIVE_TEA,
//   tea: {
//     flavor: 'green',
//     amount: 2.75,
//     id: 1
//   }
// };

export const receiveTea = (tea) => {
  return {
    type: RECEIVE_TEA,
    tea: tea
  };
};

export const receiveTeas = (teas) => {
  return {
    type: RECEIVE_TEAS,
    teas: teas
  }
}

export const fetchAllTeas = () => (dispatch) => {
  return TeaApiUtil.fetchAllTeas()
    .then(teas => dispatch(receiveTeas(teas)))
}

export const createTea = function(tea) {
  return function(dispatch, getState) {
    return TeaApiUtil.createTea(tea)
      .then(tea => dispatch(receiveTea(tea)))
  }
}