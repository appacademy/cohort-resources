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
export const receiveTea = (tea) => ({
  type: RECEIVE_TEA,
  tea
});

export const receiveTeas = (teas) => {
  return {
    type: RECEIVE_TEAS,
    teas
  };
};

export const receiveTeaDetail = (payload) => {
  return {
    type: RECEIVE_TEA_DETAIL,
    tea: payload.tea,
    transactions: payload.transactions
  }
}

// THUNK ACTION CREATORS
export const requestTeas = () => dispatch => {
  return TeaApiUtil.fetchTeas() // returns promise like object
    .then(teas => {
      dispatch(receiveTeas(teas))
    })
};

export const createTea = tea => dispatch => {
  return TeaApiUtil.createTea(tea)
    .then(tea => dispatch(receiveTea(tea)))
};

export const requestTea = (id) => dispatch => {
  return TeaApiUtil.fetchTea(id)
    .then(payload => dispatch(receiveTeaDetail(payload)))
}