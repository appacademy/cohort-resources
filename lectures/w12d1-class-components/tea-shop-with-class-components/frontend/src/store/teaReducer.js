import { createSelector } from 'reselect';
import { deleteTea, getTea, getTeas, postTea } from "../utils/teaApiUtils";

const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEA_DETAIL = 'RECEIVE_TEA_DETAIL';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';

// REGULAR ACTION CREATORS
export const receiveTea = tea => ({
    type: RECEIVE_TEA,
    tea: tea // payload is a single tea object
});

export const receiveTeaDetail = data => ({
  type: RECEIVE_TEA_DETAIL,
  data
});

export const receiveTeas = teas => ({
    type: RECEIVE_TEAS,
    teas // syntactic sugar for => teas: teas
});

export const removeTea = teaId => ({
    type: REMOVE_TEA,
    teaId
});

// THUNK ACTION CREATORS
export const fetchTeas = () => (dispatch, getState) => (
  getTeas().then(teas => dispatch(receiveTeas(teas)))
);

export const fetchTea = teaId => async (dispatch, getState) => {
  const tea = await getTea(teaId);
  return dispatch(receiveTeaDetail(tea));
};

export const createTea = teaData => async (dispatch, getState) => {
  try {
    const data = await postTea(teaData);
    return dispatch(receiveTea(data.tea));
  } catch (err) {
    return err;
  }
};

export const destroyTea = teaId => (dispatch, getState) => (
  deleteTea(teaId)
  .then(() => dispatch(removeTea(teaId)))
  .catch(err => console.error(err))
);

// SELECTORS
export const selectAllTeas = createSelector(state => state.teas, teas => Object.values(teas));

// REDUCER
const teaReducer = (state = {}, action) => {
  //  freezing objects makes properties non-writable
  Object.freeze(state);

  const nextState = { ...state }

  switch (action.type) {
    case RECEIVE_TEA:
      nextState[action.tea.id] = action.tea;
      return nextState;
    case RECEIVE_TEA_DETAIL:
      nextState[action.data.tea.id] = action.data.tea;
      return nextState;
    case RECEIVE_TEAS:
      return { ...nextState, ...action.teas };
    case REMOVE_TEA:
      delete nextState[action.teaId];
      return nextState;
    default:
      return state;
  }
};

export default teaReducer;



// case RECEIVE_TEA
//   1: {
//     id: 1,
//     flavor: "matcha",
//     price: 7.00
//   },


// case RECEIVE_TEAS
// teas: {
//   1: {
//     id: 1,
//     flavor: "matcha",
//     price: 7.00
//   },
//   2: {
//     id: 2,
//     flavor: "taro"
//     price: 7.00
//   }
// }