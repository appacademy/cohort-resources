import * as TeaApiUtil from '../util/tea_api_util';

// ACTION CONSTANTS
const RECEIVE_TEA = "RECEIVE_TEA";
const RECEIVE_TEAS = "RECEIVE_TEAS";
const REMOVE_TEA = "REMOVE_TEA";

// ACTION CREATORS 
export const receiveTea = tea => {
  return {
    type: RECEIVE_TEA,
    tea: tea
  };
};

export const receiveTeas = teas => {
  return {
    type: RECEIVE_TEAS,
    teas
  };
};

export const removeTea = teaId => {
  return {
    type: REMOVE_TEA,
    teaId
  };
};

// THUNK ACTION CREATORS
export const fetchAllTeas = () => async dispatch => {
  const res = await TeaApiUtil.requestTeas();
  const teas = await res.json();
  dispatch(receiveTeas(teas));
};

export const createTea = tea => async dispatch => {
  const res = await TeaApiUtil.postTea(tea);
  const teaData = await res.json();
  if (res.ok) {
    dispatch(receiveTea(teaData));
  } else {
    // dispatch(receiveTeaError(tea))
    alert(teaData);
  }
};

// SELECTORS
export const selectTeas = state => (
  state.teas ? Object.values(state.teas) : []
);

// REDUCER
// action is just a POJO with a 'type' attribute
const teaReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = {...state}
  switch (action.type) {
    case RECEIVE_TEA:
      nextState[action.tea.id] = action.tea;
      return nextState;
    case RECEIVE_TEAS:
      return action.teas;
    case REMOVE_TEA:
      delete nextState[action.teaId];
      return nextState;
    default:
      return nextState;
  }
};

export default teaReducer;

