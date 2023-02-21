import { requestTeas, postTea} from "../utils/tea_api_utils";

const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';
export const RECEIVE_TEA_DETAIL = 'RECEIVE_TEA_DETAIL';


/* ----ACTION CREATORS---- */
export const receiveTeaDetail = payload => {
  return {
    type: RECEIVE_TEA_DETAIL,
    payload
  }
}

export const receiveTea = tea => {
  return {
    type: RECEIVE_TEA,
    tea
  }
};

export const receiveTeas = teas => {
  return {
    type: RECEIVE_TEAS,
    teas
  }
};

export const removeTea = teaId => ({
  type: REMOVE_TEA,
  teaId
});


/* ----THUNK ACTION CREATORS---- */
export const fetchAllTeas = () => (dispatch) => {
  return requestTeas()
    .then(res => res.json())
    .then(data => dispatch(receiveTeas(data)));
}


export const createTea = (tea) => (dispatch) => {
  return postTea(tea)
    .then(res => res.json())
    .then(data => dispatch(receiveTea(data)))
}

export const fetchTeaDetail = (teaId) => async (dispatch) => {
  const res = await fetch(`/api/teas/${teaId}`);
  const data = await res.json();
  dispatch(receiveTeaDetail(data));
}

/* ----REDUCER---- */
const teaReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_TEA:
      nextState[action.tea.id] = action.tea;
      return nextState;
    case RECEIVE_TEAS:
      // debugger
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
