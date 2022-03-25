import * as TeaApiUtil from '../util/tea_api_util';

export const RECEIVE_TEA = 'RECEIVE_TEA';
export const RECEIVE_TEAS = 'RECEIVE_TEAS';
export const RECEIVE_TEA_DETAIL = 'RECEIVE_TEA_DETAIL';

// static action
export const receiveGreenTea = {
  type: RECEIVE_TEA,
  tea: {
    flavor: 'green',
    amount: 2.75,
    id: 1
  }
};

// dynamic action creator
// implicitly returning an object => ({})
export const receiveTea = (tea) => {
  debugger
  return {
    type: RECEIVE_TEA,
    tea
  }
};

export const receiveTeas = (teas) => {
  debugger
  return {
    type: RECEIVE_TEAS,
    teas
  };
};

const receiveTeaDetail = payload => {
  debugger
  return {
    type: RECEIVE_TEA_DETAIL,
    payload
  }
}

// THUNK ACTION CREATORS
export const requestTeas = () => dispatch => {
  debugger
  return TeaApiUtil.fetchTeas() // returns promise like object
    .then(teas => {
      dispatch(receiveTeas(teas))
    })
};

export const createTea = tea => dispatch => {
  debugger
  return TeaApiUtil.createTea(tea)
    .then(tea => dispatch(receiveTea(tea)))
};

export const requestTea = teaId => dispatch => {
  debugger
  return TeaApiUtil.fetchTea(teaId)
    .then(payload => {
      debugger
      return dispatch(receiveTeaDetail(payload))
    });
};