const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';


// action creators
export const receive_tea = tea => {

  // action
  return {
    type: RECEIVE_TEA,
    tea: tea // payload is a single tea object
  }
};

export const receive_teas = teas => {
  return {
    type: RECEIVE_TEAS,
    teas // syntactic sugar for => teas: teas
  }
};

export const removeTea = teaId => {
  return {
    type: REMOVE_TEA,
    teaId
  }
};

// REDUCER

const teaReducer = (state = {}, action) => {
  //  freezing objects makes properties non-writable
  Object.freeze(state);

  const nextState = { ...state }

  switch (action.type) {
    case RECEIVE_TEA:
      nextState[action.tea.id] = action.tea;
      return nextState;
    case RECEIVE_TEAS:
      return { ...nextState, ...action.teas };
    case REMOVE_TEA:
      delete nextState[action.teaId];
      return nextState;
    default:
      return nextState;
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