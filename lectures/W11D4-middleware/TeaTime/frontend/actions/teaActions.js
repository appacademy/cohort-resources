import * as TeaApiUtil from '../util/tea_api_util';

export const RECEIVED_TEA = "RECEIVED_TEA";
export const REMOVED_TEA = "REMOVED_TEA";
export const RECEIVE_ALL_TEAS = "RECEIVE_ALL_TEAS";


// regular action creators - return POJO actions
export const receivedTea = (tea) => {
  return {
    type: RECEIVED_TEA,
    tea: tea
  };
};

export const receiveAllTeas = (teas) => {
  return {
    type: RECEIVE_ALL_TEAS,
    teas
  }
};


// thunk action creators - return function actions
export const createTea = tea => dispatch => {
  return TeaApiUtil.postTea(tea)
    .then(tea => dispatch(receivedTea(tea)));
};

export const fetchAllTeas = () => dispatch => {
  return TeaApiUtil.getTeas()
    .then(teas => dispatch(receiveAllTeas(teas)));
};