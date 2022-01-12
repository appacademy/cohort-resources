import * as TeaAPIUtil from '../util/tea_api_util'

export const RECEIVE_TEA = 'RECEIVE_TEA';
export const RECEIVE_ALL_TEAS = 'RECEIVE_ALL_TEAS';


export const receiveGreenTea = {
  type: RECEIVE_TEA,
  tea: {
    flavor: 'green',
    amount: 2.75,
    id: 1
  }
};

// action creators

export const receiveAllTeas = (teas) => {
  return {
    type: RECEIVE_ALL_TEAS,
    teas
  }
}

export const receiveTea = (tea) => {
  debugger;
  // this is the action, it's an object
  return { 
    type: RECEIVE_TEA,
    tea: tea
  }
};

// thunk action creators

export const fetchAllTeas = () => dispatch => {
  return TeaAPIUtil.getAllTeas()
    .then(teas => dispatch(receiveAllTeas(teas)))
}

export const createTea = (tea) => dispatch => {
  debugger
  return TeaAPIUtil.postTea(tea)
    .then(tea => dispatch(receiveTea(tea)))
}