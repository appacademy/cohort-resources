import { requestTeas, postTea} from "../utils/tea_api_utils";

const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';
export const RECEIVE_TEA_DETAIL = 'RECEIVE_TEA_DETAIL';


/* ----ACTION CREATORS---- */

export const receiveTea = tea => {
  return {
    type: RECEIVE_TEA,
    tea
  }
};

export const receiveTeas = teas => {
  debugger
  return {
    type: RECEIVE_TEAS,
    teas
  }
};

export const removeTea = teaId => ({
  type: REMOVE_TEA,
  teaId
});

export const receiveTeaDetail = payload => {
  return {
    type: RECEIVE_TEA_DETAIL,
    payload
  }
}


/* ----THUNK ACTION CREATORS---- */
// export const fetchAllTeas = () => (dispatch) => {
//   return requestTeas()
//     .then(res => res.json())
//     .then(data => dispatch(receiveTeas(data)));
// }
// // do async version
// // export const fetchAsync

// export const createTea = (tea) => (dispatch) => {
//   return postTea(tea)
//     .then(res => res.json())
//     .then(data => dispatch(receiveTea(data)))
// }

export const fetchAllTeas = () => async dispatch => {
  debugger
  const res = await requestTeas();
  const teas = await res.json();
  dispatch(receiveTeas(teas));
};

export const createTea = tea => async dispatch => {
  const res = await postTea(tea);
  const teaData = await res.json();
  if (res.ok) {
    dispatch(receiveTea(teaData));
  } else {
    // dispatch(receiveTeaError(tea))
    alert(teaData);
  }
};

export const fetchTeaDetail = (teaId) => async (dispatch) => {
  const res = await fetch(`/api/teas/${teaId}`);
  const data = await res.json();
  dispatch(receiveTeaDetail(data))
} 

// SELECTORS
export const selectTeas = state => (
  state.teas ? Object.values(state.teas) : []
);


/* ----REDUCER---- */
const teaReducer = (state = {}, action) => {
  debugger
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_TEA:
      nextState[action.tea.id] = action.tea;
      return nextState;
    case RECEIVE_TEAS:
      debugger
      return { ...nextState, ...action.teas };
      // return action.teas ;
    case RECEIVE_TEA_DETAIL:
      nextState[action.payload.tea.id] = action.payload.tea
      return nextState;
    case REMOVE_TEA:
      delete nextState[action.teaId];
      return nextState;
    default:
      return nextState;
  };
};

export default teaReducer;
