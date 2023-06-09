import * as TeaAPIUtil from '../util/tea_api_util';

export const RECEIVE_TEA = "RECEIVE_TEA"
export const RECEIVE_TEAS = "RECEIVE_TEAS"
export const REMOVE_TEA = "REMOVE_TEA"

// ------ THUNK ACTION CREATORS ----//

export const fetchAllTeas = () => async (dispatch) => {
  debugger
  const res = await TeaAPIUtil.requestTeas();
  const data = await res.json();
  dispatch(receiveTeas(data));
};

export const createTea = (tea) => async (dispatch) => {
  debugger
  const res = await TeaAPIUtil.createTea(tea);
  const data = await res.json();
  dispatch(receiveTea(data));
};


// ------ ACTION CREATORS --------//

// export const receiveTea = tea => ({

// })
// harder to debug

export const receiveTea = tea => {
  debugger
  return {
    type: RECEIVE_TEA,
    tea
  }
}

export const receiveTeas = teas => {
  debugger
  return {
    type: RECEIVE_TEAS,
    teas
  }
}

// just needs and id to remove a tea from state
export const removeTea = teaId => {
  return {
    type: REMOVE_TEA,
    teaId
  }
}

// removeTea(1)
// >>> {type: "REMOVE_TEA", teaId: 1}

const teaReducer = (state = {}, action) => {
  Object.freeze(state)
  // make existing state properties non-writeable
  // state must be read-only

  const nextState = Object.assign({}, state)
  // const nextState = {...state};
  // basically .dup
  // state = initialState

  switch (action.type) {
    case RECEIVE_TEA:
      debugger
      nextState[action.tea.id] = action.tea;
      return nextState; // returns new tea slice of state
    case RECEIVE_TEAS:
      debugger
      // return action.teas; // situational - replaces prevState
      return { ...nextState, ...action.teas}; // this way retains prevState
      // return Object.assign(nextState, action.teas); // this way retains prevState
    case REMOVE_TEA:
      delete nextState[action.teaId]; 
      // removes both key and value for that tea, from the nextState object
      return nextState;
    default:
      return nextState; // or state?
  }
}

export default teaReducer;