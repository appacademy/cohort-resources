import * as TeaAPIUtil from '../util/tea_api_util'

export const RECEIVE_TEA = 'RECEIVE_TEA';
export const RECEIVE_ALL_TEAS = 'RECEIVE_ALL_TEAS';

export const receiveTea = (tea) => {
  return {
    type: RECEIVE_TEA,
    tea: tea
  }
};

export const receiveAllTeas = (teas) => {
  return {
    type: RECEIVE_ALL_TEAS,
    teas: teas
  }
}

export const fetchAllTeas = () => (dispatch) => {
  return TeaAPIUtil.getAllTeas()
    .then(teas => dispatch(receiveAllTeas(teas)))
}

export const createTea = (tea) => dispatch => {
  return TeaAPIUtil.postTea(tea)
    .then(tea => dispatch(receiveTea(tea)))
}