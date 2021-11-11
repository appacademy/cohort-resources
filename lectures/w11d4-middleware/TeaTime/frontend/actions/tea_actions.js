import * as TeaApiUtil from "../util/teaApi"

//action types
export const RECEIVE_TEA = "RECEIVE_TEA";
export const RECEIVE_ALL_TEAS = "RECEIVE_ALL_TEAS";


// regular actions aka POJO actions
export const receiveTea = (tea) => {
  return {
    type: RECEIVE_TEA, 
    tea
  }
};

export const receiveAllTeas = (teas) => {
  return {
    type: RECEIVE_ALL_TEAS,
    teas
  }
};

//Thunk actions AKA function actions -> return functions 
export const fetchAllTeas = () => {
  return (dispatch, getState) => {
    return TeaApiUtil.getAllTeas()
      .then(teasArr => dispatch(receiveAllTeas(teasArr)))
  }
}

export const createTea = (tea) => (dispatch) => {
  return TeaApiUtil.postTea(tea)
    .then(tea => dispatch(receiveTea(tea)))
}