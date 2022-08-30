import { requestTeas, postTea} from "../utils/tea_api_utils";
import csrfFetch from "./csrf";

const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';
export const RECEIVE_TEA_DETAIL = 'RECEIVE_TEA_DETAIL';


export const fetchTeaDetail = (teaId) => async (dispatch) => {
  const res = await csrfFetch(`api/teas/${teaId}`);
  const data = await res.json();
  dispatch(receiveTeaDetail(data));
}



/* ----THUNK ACTION CREATORS---- */
export const fetchAllTeas = () => (dispatch) => {
  return requestTeas()
    .then(res => res.json())
    .then(data => dispatch(receiveTeas(data)));
}
// do async version
// export const fetchAsync

export const createTea = (tea) => (dispatch) => {
  // debugger
  return postTea(tea)
    .then(res => res.json())
    .then(data => dispatch(receiveTea(data)))
}

/* ----ACTION CREATORS---- */
export const receiveTeaDetail = payload => {
  return {
    type: RECEIVE_TEA_DETAIL,
    payload
  }
}

export const receiveTea = tea => {
  // debugger
return {
  type: RECEIVE_TEA,
  tea
}};

export const receiveTeas = teas => {
  // console.log(teas)
  return {
    type: RECEIVE_TEAS,
    teas
}};

export const removeTea = teaId => ({
  type: REMOVE_TEA,
  teaId
});

/* ----REDUCER---- */
const teaReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };
  // console.log(action);

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
    case RECEIVE_TEA_DETAIL:
      nextState[action.payload.tea.id] = action.payload.tea;
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