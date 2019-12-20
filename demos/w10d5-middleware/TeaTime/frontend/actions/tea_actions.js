// define action type constants at the top - we do this for better errors if we have a typo
import * as TeaApiUtil from '../utils/tea_API_utils'; 

export const RECEIVE_ALL_TEAS = 'RECEIVE_ALL_TEAS'; 
export const RECEIVE_TEA = 'RECEIVE_TEA';


// action creators
export const receiveTea = tea => ({
  type: 'RECEIVE_TEA',
  tea
});

export const receiveAllTeas = teas => {
  return ({
    type: RECEIVE_ALL_TEAS, 
    teas: teas 
  })
}

// thunk action creators
export const fetchAllTeas = () => dispatch => {
  return TeaApiUtil.fetchAllTeas()
          .then(teas => dispatch(receiveAllTeas(teas))); 
}

export const createTea = tea => dispatch => {
  debugger; 
  return TeaApiUtil.createTea(tea) 
            .then(tea => dispatch(receiveTea(tea)))
}