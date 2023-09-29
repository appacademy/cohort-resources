// this file will contain all redux logic pertaining to teas, actions, reducers, etc

const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';

// ------------ ACTION CREATORS -------- //

export const receiveTea = tea => {
  // debugger
  return {
    type: RECEIVE_TEA,
    tea: tea
  }
};

export const receiveTeas = teas => {
  return {
    type: RECEIVE_TEAS,
    teas // syntactic sugar for teas: teas
  }
};

export const removeTea = teaId => ({ // note implicit return, cant add debugger
  type: REMOVE_TEA,
  teaId
})

// ---------------- REDUCER --------------- //



const teaReducer = (state = {}, action) => {
  const nextState = Object.assign({}, Object.freeze(state))

  switch (action.type) {
    case RECEIVE_TEA:
      // example tea action
      // action: { type: 'RECEIVE_TEA', tea: {id: 1, flavor: 'green', price: 1.23}}
      nextState[action.tea.id] = action.tea; // use bracket notation to add key of 1 or 2 or 3 etc
      return nextState;
    case RECEIVE_TEAS:
      // example teas action
      // action: { type: 'RECEIVE_TEAS', teas: 1: {id: 1, flavor: 'green', price: 1.23}, 2: {...}}
      //
      // return action.teas; // this assumes we want to replace our tea state with all incoming teas
      return { ...nextState, ...action.teas}; // this retains previous teas not included in action.teas, overwrites matching ids
    case REMOVE_TEA:
      // action: { type: 'REMOVE_TEA', teaId: 2}
      delete nextState[action.teaId];
      return nextState;
    default:
      return state;
  }
}

export default teaReducer;