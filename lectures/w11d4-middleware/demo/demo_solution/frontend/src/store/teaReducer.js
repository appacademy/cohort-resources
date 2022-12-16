import { requestTeas, postTea } from '../utils/tea_api_utils';

const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';

/* ----THUNK ACTION CREATORS---- */
export const fetchAllTeas = () => async (dispatch) => {
  const res = await requestTeas();
  const teas = await res.json();
  dispatch(receiveTeas(teas));
}

export const createTea = (tea) => async (dispatch) => {
  // debugger
  const res = await postTea(tea);
  let data;
  if (res.ok) {
    data = await res.json();
    dispatch(receiveTea(data))
  } else {
    console.log(res.statusText);
  }
}

/* ----ACTION CREATORS---- */
export const receiveTea = tea => {
  // debugger
  return {
  type: RECEIVE_TEA,
  tea
}};

export const receiveTeas = teas => ({
  type: RECEIVE_TEAS,
  teas
});

export const removeTea = teaId => ({
  type: REMOVE_TEA,
  teaId
});

/* ----REDUCER---- */
const teaReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_TEA:
      // debugger
      nextState[action.tea.id] = action.tea;
      return nextState;
    case RECEIVE_TEAS:
      return { ...nextState, ...action.teas };
    case REMOVE_TEA:
      delete nextState[action.teaId];
      return nextState;
    default:
      return nextState;
  };
};

export default teaReducer;

/*
let obj = { 'greeting': 'hello', 'farewell': 'goodbye' };
let val = 'greeting';
obj[val]
*/